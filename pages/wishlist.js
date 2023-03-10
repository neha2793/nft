/* pages/my-nfts.js */
import * as React from "react";
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import Mainheader from './components/layout/mainheader';
import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import Mainfooter from './components/layout/mainfooter';


export default function WishlistMain() {
    const [nfts, setNfts] = useState([])
    const [userBuyNFt, userBuyNFT] = useState()
    const [loadingState, setLoadingState] = useState('not-loaded')
    const [loading, setLoading] = useState(false);
    const [rndmNumber, setRndmNumber] = useState('');
    const router = useRouter()
    useEffect(() => {
        loadNFTs()
    }, [])

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    async function loadNFTs() {
        var temp = 'logout';
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
        var response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/check-auth',{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.access_token
            },
        }).then((response)  =>{
            temp = 'login';
        }).catch(function (error) {
            // handle error
            if(error.response.status == 400){
            notify("error", error.response.data.error)
            }else if(error.response.status == 401) {
            temp = 'logout';
            localStorage.removeItem("user")
            router.push('/login')
            }else{
            notify("error", 'Something went wrong please try again!')
            } 
        })
        if(temp == 'login'){
            const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            })
            if(window.ethereum){
            await window.ethereum.request({method:'eth_requestAccounts'})
            .then(res=>{
                // Return the address of the wallet
                console.log(res) 
            })
            }else{
            alert("install metamask extension!!")
            }
            setLoading(true) 
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
            const data = await marketplaceContract.fetchMyNFTs()
            const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+1)
            var wallet_response =  await  axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-wishlist',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+user.access_token
            },
            })
            const BoughtNFT = wallet_response.data.wishlist.reverse()
            if(wallet_response.data){
            const items = await Promise.all(BoughtNFT.map(async (i, index) => {
                const tokenURI = await marketplaceContract.tokenURI(i.tokenID)
    
                if(reponsePriceExchange){
                if(tokenURI.split('/')[2] ==  'infura-ipfs.io'){
        
                    var getwayURL = 'https://gateway.moralisipfs.com/ipfs/'+tokenURI.split('/')[4]
                    const meta = await axios.get(getwayURL)
                    const USDPrice = i.price * reponsePriceExchange.data.USD;
    
                    if(meta.data != undefined){
        
                    console.log(meta)
                    const priceFormat = ethers.utils.parseUnits(i.price, 'ether')
                    let price = ethers.utils.formatUnits(priceFormat, 'ether')
                    let item = {
                        price,
                        DollarPrice:USDPrice,
                        tokenId: i.tokenID,
                        string_price:i.string_price,
                        seller: i.seller,
                        owner: i.owner,
                        image: meta.data.image,
                        name: meta.data.name,
                        status: i.status,
                        tokenURI,
                        wishlist : i.wishlist,
                        wishlist_id : i.wishlist_id ? i.wishlist_id : '',
                        product_id : i.id,
                    }
                    console.log(item)
                    return item
                    }
                }
                }
        
            }))
            setNfts(items)
            setLoading(false) 
            setLoadingState('loaded') 
            }
        }    
        }else{
        localStorage.removeItem("user")
        router.push('/login')
        }
        
    }
    async function wishlist(wishlist_id, product_id){
      const user = JSON.parse(localStorage.getItem('user'));
      if(Boolean(wishlist_id)){
        var fd = new FormData();
        fd.append('wishlist_id', wishlist_id);
        axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/remove-wishlist', fd ,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.access_token
            },
        }).then((response)  => {
        
            nfts.forEach((nft, index) => {
            if(Boolean(wishlist_id)){
                if(nft.wishlist_id == wishlist_id){
                // console.log(wishlist_id); 
                nft.wishlist_id = '';
                nft.wishlist = 0;
                }
                nfts[index] = nft
            }
            });
            setRndmNumber(Math.random())
            setNfts(nfts)
            notify("success", 'Wishlist removed successfully!')
            loadNFTs()
        }).catch(function (error) {
            // handle error
            if(error.response){

            if(error.response.status == 400){
                notify("error", error.response.data.error)
            }else if(error.response.status == 401){
                localStorage.removeItem("user")
                router.push('/login')
            } else{
                notify("error", 'Something went wrong please try again!')
            }
            }else{
            console.log(error)
            }
        })
      }
        
    }

    async function buyNft(nft) {

        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        console.log(nft)
        const user = JSON.parse(localStorage.getItem('user'));
        var temp = 'logout';
        var response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/check-auth',{
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user.access_token
          },
        }).then((response)  =>{
          temp = 'login';
        }).catch(function (error) {
          // handle error
          if(error.response.status == 400){
            notify("error", error.response.data.error)
          }else if(error.response.status == 401) {
            temp = 'logout';
            localStorage.removeItem("user")
            router.push('/login')
          }else{
            notify("error", 'Something went wrong please try again!')
          } 
        })
    
        if(temp == 'login' ){
    
          document.getElementById('button_disabled'+nft.product_id).innerHTML = 'Processing...';
          document.getElementById('button_disabled'+nft.product_id).disabled = true;
          var transaction = '';
          var price = '';
          try {
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
        
            /* user will be prompted to pay the asking proces to complete the transaction */
            price = ethers.utils.parseUnits(nft.price, 'ether') 
            transaction = await contract.createMarketSale(nft.tokenId, {
              value: price
            }) 
            await transaction.wait()
            // return transaction;
          } catch (error) {
            if(error.code == '-32603'){
              notify('error','Insufficient funds for gas * price + value!')
              document.getElementById('button_disabled'+nft.product_id).innerHTML = 'Buy';
              document.getElementById('button_disabled'+nft.product_id).disabled = false;
            }
            if(error.code == 'ACTION_REJECTED'){
              notify('error','Transaction rejected!')
              document.getElementById('button_disabled'+nft.product_id).innerHTML = 'Buy';
              document.getElementById('button_disabled'+nft.product_id).disabled = false;
            }
          }
          console.log(transaction);
          if(transaction){
            let fd = new FormData();
            fd.append('product_id', nft.product_id)
            fd.append('name', nft.name)
            fd.append('price', nft.price)
            fd.append('string_price', nft.string_price)
            fd.append('description', nft.description)
            fd.append('image', nft.image)
            fd.append('tokenID', nft.tokenId)
            fd.append('hash_token', transaction.hash)
            fd.append('from_wallet', transaction.from)
            fd.append('gasLimit', JSON.stringify(transaction.gasLimit))
            fd.append('gasPrice', JSON.stringify(transaction.gasPrice))
            fd.append('maxFeePerGas', JSON.stringify(transaction.maxFeePerGas))
            fd.append('maxPriorityFeePerGas', JSON.stringify(transaction.maxPriorityFeePerGas))
            
            axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/user-buy-nft', fd,{
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+user.access_token
              },
            }).then((response)  => {
              notify("success", 'Buy NFT successfully!')
              const data = response.data;
            }).catch(function (error) {
              // handle error
              if(error.response.status == 400){
                notify("error", error.response.data.error)
              }else if(error.response.status == 401) {
                localStorage.removeItem("user")
                router.push('/login')
              }else{
                notify("error", 'Something went wrong please try again!')
              } 
            })
            loadNFTs()
          }
         
        }
    }
    if (loadingState === 'loaded' && !nfts.length) return (
        <div>
        <Mainheader />
        
        <section className="latestnft">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="heading">Wishlist<div className="divider"></div></h2>
                </div>
            </div>
            <div className="">
                
                <div className="row myfvtrow">
                <h1 className="py-10 px-20 text-3xl">Wishlist Empty</h1>
                </div>
            </div>
            </div>
        
        </section>
        <Mainfooter />
        </div>
    )
    return (


        <div>
            
        <Mainheader />
        <section className="latestnft">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="heading">Wishlist<div className="divider"></div></h2>
                </div>
            </div>
            {loading ? (

                <div className="loader-container">
                <div className="spinner"></div>
                </div>
            ) : (
                <div className="">
                
                <div className="row myfvtrow">
                {
                    nfts.map((nft, i) => (
                    nft?<div key={i} className="col-sm-6 col-md-4 col-lg-3 myfvt">      
                    {/* <div className="col-sm-6 col-md-4 col-lg-3 myfvt"> */}
                    <div className="nftbox">
                        <div className="nftbox-img">
                        <a href="#"><img src={nft.image} className="img-fluid" alt=""/></a>
                        <div className="counter">
                            {/* <span>717 : 6 : 32 : 34</span> */}
                        </div>
                        </div>
                        <div className="nftbox-desc">
                        <h3><a href="#">{nft.name}</a></h3>
                        <h5 className="rate"> 
                            $ {nft.DollarPrice.toFixed(7)}
                            <span className="like-design"><a onClick={() => wishlist(nft.wishlist_id, nft.product_id)} id={nft.wishlist_id} ><i className='fa fa-heart' aria-hidden="true"></i></a></span>

                        </h5>
                        <button className="btn btn-info" id={'button_disabled'+nft.product_id}   onClick={() => buyNft(nft)} data-id={nft.tokenId} disabled={nft.status == 'sold' ? true : false} >{nft.status == 'sold' ? 'Sold': 'Buy'}</button>
                        </div>
                    </div>
                    </div> : ""
                    )) 
                    }
                </div>
                </div>
            )}
                </div>
        
        </section>
        <Mainfooter />
        </div>

    )
}