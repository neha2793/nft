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


export default function MyAssets() {
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
        var wallet_response =  await  axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-users-buy-nft',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.access_token
          },
        })
        const BoughtNFT = wallet_response.data.userBuyNFT.reverse()
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
                    tokenId: i.tokenId,
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.data.image,
                    name: meta.data.name,
                    tokenURI,
                    wishlist : i.wishlist,
                    wishlist_id : i.wishlist_id ? i.wishlist_id : '',
                    product_id : i.product_id,
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
  function listNFT(nft) {
    router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)
  }

 
  if (loadingState === 'loaded' && !nfts.length) return (
    <div>
      <Mainheader />
    
      <section className="latestnft">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Purchased NFTs<div className="divider"></div></h2>
            </div>
          </div>
          <div className="">
            
            <div className="row myfvtrow">
            <h1 className="py-10 px-20 text-3xl">No nfts purchased</h1>
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
              <h2 className="heading">Purchased NFTs<div className="divider"></div></h2>
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
                        {/* <span className="like-design"><a onClick={() => wishlist(nft.wishlist_id, nft.product_id)} id={nft.wishlist_id} ><i className={nft.wishlist == 1 ? 'fa fa-heart':'fa fa-heart-o'} aria-hidden="true"></i>{nft.wishlist ? 1 : 0}</a></span> */}

                      </h5>
                      {/* <button className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => listNFT(nft)}><span className="front">List</span></button> */}
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