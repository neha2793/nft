/* pages/index.js */
import * as React from "react";
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import Link from 'next/link'
import toast from "../components/Toast";
import Mainheader from './components/layout/mainheader';

import {
  marketplaceAddress
} from '../config'
import { useRouter } from 'next/router'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import Mainfooter from './components/layout/mainfooter';




export default function Home() {
  const [nfts, setNfts] = useState([])
  const [topSeller, setTopSeller] = useState([])
  const [users, User] = useState([])
  const [baseURL, setBaseUrl] = useState('');

  const [rndmNumber, setRndmNumber] = useState('');

  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
    // NFTtransfer()
  }, [])
  const router = useRouter()


  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function loadNFTs() {
    User(JSON.parse(localStorage.getItem('user')))

    // Fatch Top Seller
    const top_seller =  await  axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-top-seller',{
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setTopSeller(top_seller.data.data);
    
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com")
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
    const data = await contract.fetchMarketItems()
    
    // fatch latest nfts
    var wallet_addresses = [];
    var wallet_response = '';
    const itemsss = await Promise.all(data.map(async (i, index) => {
      wallet_addresses.push(i.seller);
    }))
    let fd = new FormData
    fd.append('wallet_address', wallet_addresses)
    wallet_response =  await  axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/nft-profile-image-list', fd ,{
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const userNFT = wallet_response.data.user_nft.reverse()
    setBaseUrl(wallet_response.data.base_url)
    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+1)
    const items = await Promise.all(userNFT.map(async i => {

      var profileImage = '';
      var user_name = '';
      wallet_response.data.profilesData.forEach(value => {
        if(value.wallet_address == i.seller){
          profileImage = value.profile_image,
          user_name = value.name
        }
      });
      const tokenUri = await contract.tokenURI(i.tokenID)
      if(reponsePriceExchange){
        if(tokenUri.split('/')[2] ==  'infura-ipfs.io'){
          var getwayURL = 'https://gateway.moralisipfs.com/ipfs/'+tokenUri.split('/')[4]
          const meta = await axios.get(getwayURL)
          const USDPrice = i.price * reponsePriceExchange.data.USD;
          
            if(meta.data != undefined){
              let price = ethers.utils.formatUnits(i.string_price, 'ether')
              let item = {
                price,
                DollarPrice:USDPrice,
                tokenID: i.tokenID,
                seller: i.seller,
                string_price:i.string_price,
                owner: i.owner,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
                pImage : profileImage,
                wishlist : i.wishlist,
                Uname : user_name,
                wishlist_id : i.wishlist_id ? i.wishlist_id : '',
                id : i.id,
              }
              console.log(item);
              return item
            }
        }
      }
    }))
  
    setNfts(items)
    setLoadingState('loaded') 
  }
  async function buyNft(nft) {
    const user = JSON.parse(localStorage.getItem('user'));
    var product_id = '';
    if(user){

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

      if(temp == 'login'){
        document.getElementById('button_disabled'+nft.id).innerHTML = 'Processing...';
        document.getElementById('button_disabled'+nft.id).disabled = true;
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        var price = '';
        var transaction = '';
        try {
          const web3Modal = new Web3Modal()
          const connection = await web3Modal.connect()
          const provider = new ethers.providers.Web3Provider(connection)
          const signer = provider.getSigner()
          const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      
          /* user will be prompted to pay the asking proces to complete the transaction */
          price = ethers.utils.parseUnits(nft.price, 'ether')   
          
          transaction = await contract.createMarketSale(nft.tokenID, {
            value: price
          }) 
          await transaction.wait()
        } catch (error) {
          if(error.code == '-32603'){
            notify('error','Insufficient funds for gas * price + value!')
            document.getElementById('button_disabled'+nft.id).innerHTML = 'Buy';
            document.getElementById('button_disabled'+nft.id).disabled = false;
          }
          if(error.code == 'ACTION_REJECTED'){
            notify('error','Transaction rejected!') 
            document.getElementById('button_disabled'+nft.id).innerHTML = 'Buy';
            document.getElementById('button_disabled'+nft.id).disabled = false;
          }
        }
        if(transaction){

          let fd = new FormData();
          fd.append('product_id', nft.id)
          fd.append('name', nft.name)
          fd.append('price', nft.price)
          fd.append('string_price', nft.string_price)
          fd.append('description', nft.description)
          fd.append('image', nft.image)
          fd.append('tokenID', nft.tokenID)
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
            product_id = response.data.userNFT.id
            document.getElementById('button_disabled'+nft.id).innerHTML = 'Buy';
            document.getElementById('button_disabled'+nft.id).disabled = false;
            
          }).catch(function (error) {
            // handle error
            if(error.response.status == 400){
              notify("error", error.response.data.error)
            }else if(error.response.status == 401){
              localStorage.removeItem("user")
              router.push('/login')
            }else{
              notify("error", 'Something went wrong please try again!')
            } 
          })

         
          let transaction_detail = new FormData();
          transaction_detail.append('product_id', nft.id)
          transaction_detail.append('Transaction_Token', 'ABC001567IUOP')
          transaction_detail.append('Price', nft.price)
          transaction_detail.append('Quantity', 1)
  
          axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/order-nft', transaction_detail,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.access_token
            },
          }).then((response)  => {
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

  // if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return (
    <div>
      <Mainheader/>
      <section className="mainbanner" style={{ background: "url(" + "/assets/images/mainbg.jpg" + ")" }} >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mainbanner-left">
                <h2>Mint, <span>Buy</span>, and <span>Sell</span> Your NFT&apos;s<div className="divider"></div></h2>
                <p>2kPAID is the biggest Blockchain based NFT marketplace</p>
                <div className="btn-sec">
                  {/* <a href="" className="btn btn-info b-btn">Create NFT</a> */}
                    {users ? (
                      <Link href="/create-nft">
                        <a className="btn btn-info b-btn" >
                          Create NFT
                        </a>
                      </Link>
                    ) : (
                      <Link href="/login">
                        <a className="btn btn-info b-btn" >
                          Create NFT
                        </a>
                      </Link>
                    )}
                  <Link href="/signup">
                    <a className="btn btn-info">
                    Sign Up
                    </a>
                  </Link>
                  {/* <a href="signup.html" className="btn btn-info">Sign Up</a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mainbanner-right">
                <div className="mainbanner-top">
                <div className="mainbanner-a">
                  <img src="assets/images/mainimg1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="mainbanner-b">
                  <img src="assets/images/mainimg2.jpg" className="img-fluid" alt=""/>
                </div>
                <svg className="uk-position-right uk-opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F796FF" d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z" transform="translate(100 100)">
                </path></svg>
              </div>
              </div>
            </div>

          </div>
        </div>
        {/* <svg className="bottombg" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" classNameName="position-absolute width-full z-1" style="bottom: -1px;">
              <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#f0f0f0"></path>
          </svg> */}
      </section>
      <section className="latestnft">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Latest NFTs<div className="divider"></div></h2>
            </div>
          </div>

         

          <div className="row myfvtrow">
            {
              loadingState === 'not-loaded' ? 
              <div className="col-sm-6 col-md-4 col-lg-3">      
                <h2>Loading</h2>
              </div>
              :
              ''
            }
            {
            loadingState === 'loaded' && !nfts.length   ?
              <div className="col-sm-6 col-md-4 col-lg-3">      
                <h2>No nfts found</h2>
              </div>
               :
              
                nfts.reverse().slice(0 , 5).map((nft, i) => (
            
                
                  <div key={i} className="col-sm-6 col-md-4 col-lg-3 myfvt">      
                    <div className="nftbox">
                      <div className="nftbox-img">
                        <a href="#"><img src={nft.image} className="img-fluid" alt=""/></a>
                        <div className="counter">
                          {/* <span>717 : 6 : 32 : 34</span> */}
                        </div>
                      </div>
                      <div className="nftbox-desc">
                        <div className="nftbox-desc-img">
                          <div className="nftbox-user">
                            <a href="#">
                              <img src={nft.pImage ?baseURL+ '/public/'+ nft.pImage : 'assets/images/user.png' } className="img-fluid" alt=""/>
                            </a>
                            <span>{nft.Uname.length > 9 ? nft.Uname.substring(0,9)+'...' :  nft.Uname}</span>
                          </div>
                        </div>
                        <h3><a href="#">{nft.name}</a></h3>
                        <h5 className="rate">$ {nft.DollarPrice.toFixed(7)}
                          <span className="like-design" style={{ display: users ? "block" : "none" }}><a onClick={() => wishlist(nft.wishlist_id, nft.id)} id={nft.wishlist_id} ><i className={nft.wishlist == 1 ? 'fa fa-heart active':'fa fa-heart-o'} aria-hidden="true"></i></a></span>
                        </h5>
                      
                        <button className="btn btn-info" id={'button_disabled'+nft.id} style={{ display: users ? "block" : "none" }} onClick={() => buyNft(nft)}>Buy</button>
                        
                      </div>
                    </div>
                  </div> 
                
                
                ))
            
            }
            </div>
          
          </div>
        {/* </div> */}
      </section>
      <section className="topcollections">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Top Collections<div className="divider"></div></h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="collection_top">
                <div className="collection_row">
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <a href="#">
                        <div className="collection_item_img">
                          <img src="assets/images/nft4.png" className="img-fluid" alt=""/>
                          <div className="collection-desc">
                          <h3>CinnaRolls</h3>
                          <h5>10 Collection</h5>
                          </div>
                        </div>
                        </a>
                      </div>
                  </div>
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <div className="collection_item_img">
                          <img src="assets/images/nft3.png" className="img-fluid" alt=""/>
                        </div>
                      </div>
                  </div>
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <a href="#">
                        <div className="collection_item_img">
                          <img src="assets/images/nft2.png" className="img-fluid" alt=""/>
                          <div className="collection-desc">
                          <h3>Pans</h3>
                          <h5>30 Collection</h5>
                          </div>
                        </div>
                      </a>
                      </div>
                  </div>
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <div className="collection_item_img">
                          <img src="assets/images/nft1.png" className="img-fluid" alt=""/>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="collection_row collection_row2">
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <div className="collection_item_img">
                          <img src="assets/images/nft5.png" className="img-fluid" alt=""/>
                        </div>
                      </div>
                  </div>
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <a href="#">
                        <div className="collection_item_img">
                          <img src="assets/images/nft6.png" className="img-fluid" alt=""/>
                          <div className="collection-desc">
                          <h3>Paper Planes</h3>
                          <h5>20 Collection</h5>
                          </div>
                        </div>
                      </a>
                      </div>
                  </div>
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <div className="collection_item_img">
                          <img src="assets/images/nft7.png" className="img-fluid" alt=""/>
                        </div>
                      </div>
                  </div>
                  <div className="collection_item">
                      <div className="collection_item_in">
                        <a href="#">
                        <div className="collection_item_img">
                          <img src="assets/images/nft8.png" className="img-fluid" alt=""/>
                          <div className="collection-desc">
                          <h3>Lightning Gods</h3>
                          <h5>8 Collection</h5>
                          </div>
                        </div>
                      </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="topcollections-desc">
                <p>Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                <a href="#" className="btn btn-info">all Collection</a>
              </div>
            </div>
          </div>


        </div>
      </section>
      <section className="top-seller">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Top Sellers<div className="divider"></div></h2>
            </div>
          </div>
          <div className="row">

            {
              topSeller.length > 0 ? topSeller.map((seller, i) => (
                <div className="col-md-3" key={i}>
                  <div className="top-sellerbox">
                    <div className="top-sellerimg"><a href="#"><img src={seller.profile} className="img-fluid" alt=""/></a></div>
                    <h3><a href="#">{seller.full_name}</a></h3>
                    <p>{seller.total ? seller.total+' nfts' :'0 nfts'}</p> 
                  </div>
                </div>    
                )) 
              :
              <div className="col-md-3" >
                <h2 style={{fontSize:'1.7em'}}>Seller not found</h2>
              </div>

            }
          </div>
        </div>
      </section>
      <Mainfooter />
    </div>
    
  )
}