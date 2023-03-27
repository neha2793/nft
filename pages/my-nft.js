/* pages/dashboard.js */
import * as React from "react";
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import toast from "../components/Toast";
import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import { useRouter } from 'next/router'



export default function CreatorDashboard() {
  const router = useRouter()
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const [loading, setLoading] = useState(false);
  const [rndmNumber, setRndmNumber] = useState('');

  useEffect(() => {
    loadNFTs()
  }, [])

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  async function loadNFTs() {

    const user = JSON.parse(localStorage.getItem('user'));  
    var temp = 'logout'; 
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

        const web3Modal =  new Web3Modal({
          network: 'mainnet',
          cacheProvider: true,
        })
        if(window.ethereum){
        await window.ethereum.request({method:'eth_requestAccounts'})
          .then(res=>{
            // Return the address of the wallet
          })
        }else{
          alert("install metamask extension!!")
        }
        const connection =  await web3Modal.connect()
        
        setLoading(true) 
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
        const data = await contract.fetchItemsListed()
  
        var wallet_response =  await  axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-users-nft',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.access_token
          },
        })
        const userNFT = wallet_response.data.user_nft.reverse()
        const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+1)
  
        if(wallet_response.data){
          const items = await Promise.all(userNFT.map(async  ( i, index) => {
            const tokenUri = await contract.tokenURI(i.tokenID)
            if(reponsePriceExchange){
              if(tokenUri.split('/')[2] ==  'infura-ipfs.io'){
                var getwayURL = 'https://gateway.moralisipfs.com/ipfs/'+tokenUri.split('/')[4]
                const meta = await axios.get(getwayURL)
                const USDPrice = i.price * reponsePriceExchange.data.USD;
  
                if(meta.data != undefined){
                  const priceFormat = ethers.utils.parseUnits(i.price, 'ether')
                  let price = ethers.utils.formatUnits(priceFormat, 'ether')
                  let item = {
                    price,
                    DollarPrice:USDPrice,
                    tokenId: i.tokenID,
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.data.image,
                    name: meta.data.name,
                    item_id: wallet_response.data.user_nft?wallet_response.data.user_nft[index].id:'',
                    wishlist : i.wishlist,
                    wishlist_id : i.wishlist_id ? i.wishlist_id : '',
                    id : i.id,
                  }
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
    }else{
      var fd = new FormData();
      fd.append('product_id', product_id);
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/add-wishlist', fd ,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
       
        nfts.forEach((nft, index) => {
          if(Boolean(product_id)){
            if(nft.id == product_id){
              // console.log(wishlist_id); 
              nft.wishlist_id = response.data.wishlist.id;
              nft.wishlist = 1;
            }
            nfts[index] = nft
          }
        });
        console.log(nfts);

        setRndmNumber(Math.random())
        setNfts(nfts)
        notify("success", 'Wishlist added successfully!')
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

  if (loadingState === 'loaded' && !nfts.length) return (
    
    <div>
    <Mainheader />
  
    <section className="latestnft">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="heading">My NFT<div className="divider"></div></h2>
          </div>
        </div>
        <div className="">
          
          <div className="row myfvtrow">
          <h1 className="py-10 px-20 text-3xl">No nfts listed</h1>
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
                <h2 className="heading">My NFTs<div className="divider"></div></h2>
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
                          {/* <span className="like-design"><a  onClick={() => wishlist(nft.wishlist_id, nft.id)} id={nft.wishlist_id} ><i className={nft.wishlist == 1 ? 'fa fa-heart':'fa fa-heart-o'} aria-hidden="true"></i></a></span> */}

                        </h5>
                        {/* <button className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => listNFT(nft)} value={nft.item_id}><span className="front">Map Shipping Container</span></button> */}
                        <button className="btn btn-info" onClick={e => {router.push(`/map-manage-shipping-container?id=${nft.item_id}`)}} value={nft.item_id}>Map Container</button>
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