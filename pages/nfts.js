/* pages/index.js */
import * as React from "react";
import { ethers } from 'ethers'
import toast from "../components/Toast";
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import Link from 'next/link'
import Select from 'react-select'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import { useRouter } from 'next/router'

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'




export default function Home() {
  const router = useRouter()
  const [nfts, setNfts] = useState([])
  const [show, setShow] = useState(false);
  const [html, Sethtml] = useState('');
  const [baseURL, setBaseUrl] = useState('');
  const [rndmNumber, setRndmNumber] = useState('');
  const [loading, setLoading] = useState(false);
  

  const checkedArr = [];

  const options = [
    { value: 'by_user', label: 'By User' },
    { value: 'by_custom', label: 'By Custom' },
  ]
  var wltAdr = []

  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  

  async function  users(e){
  
    if(e.value == 'by_user'){
      
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){

        var formData = new FormData();
        formData.append('by_user', e.value);
  
  
        // const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-users', formData);
  
  
        axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-users' ,{
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user.access_token
          },
        }).then((response)  => {
          const data = response.data.user;
          setShow(true);
          Sethtml(
            <div>
              <ul className="nft_users">
                {data.map((user, key) => {
                  return (
                    <li key={key}>
                      <input className="abc" id={user.id} value={user.id} name="ids[]"  data-id={user.id} onChange={handleChange} type="checkbox" /><label htmlFor={user.id}> {user.name}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
          );
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

  }
  function close(){
    setShow(false);
  }
  async function handleChange(event) {
   
    const user = JSON.parse(localStorage.getItem('user'));
    if (event.target.checked) {
      checkedArr.push(event.target.value);
      var fd = new FormData();
      fd.append('ids[]', checkedArr);
      
      // setLoading(true)
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-user-nft-collections', fd ,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        wltAdr.push(event.target.value)
        loadNFTs(response.data.userNFTCollection, response.data.wallet_address, response.data.flag);
      }).catch(function (error) {
        // handle error
        if(error.response.status == 400){
          notify("error", error.response.data.error)
        }else if(error.response.status == 401){
          localStorage.removeItem("user")
          router.push('/login')
        } else{
            notify("error", 'Something went wrong please try again!')
        }
      })
    } else {
      let index = checkedArr.findIndex(a => a === event.target.value);
      checkedArr.splice(index,1);
      var fd = new FormData();
      fd.append('ids[]', checkedArr);
      // const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-user-nft-collections',fd);
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-user-nft-collections', fd ,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        if(checkedArr.length > 0){
          wltAdr.push(event.target.value)
          loadNFTs(response.data.userNFTCollection, response.data.wallet_address, response.data.flag);
        }else{
          wltAdr.push(event.target.value)
          loadNFTs(response.data.userNFTCollection, response.data.wallet_address);
        }
      }).catch(function (error) {
        // handle error
        if(error.response.status == 400){
          notify("error", error.response.data.error)
        }else if(error.response.status == 401){
          localStorage.removeItem("user")
          router.push('/login')
        } else{
            notify("error", 'Something went wrong please try again!')
        }
      })
     
    }
   
    
  };

  async function loadNFTs(nftCollection, wallet_address, flag) {
   
    /* create a generic provider and query for unsold market items */
    // Check auth
    
    setLoading(true) 
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com")
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
    const data = await contract.fetchMarketItems()
    
    var wallet_addresses = [];
    var wallet_response = '';
    
    const itemsss = await Promise.all(data.map(async (i, index) => {
      wallet_addresses.push(i.seller);

    }))
   
    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */

    // For user image

    const user = JSON.parse(localStorage.getItem('user'));  
    if(user){
      let fd = new FormData
      fd.append('wallet_address', wallet_addresses)
      wallet_response =  await  axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/nft-profile-image', fd ,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      })
      const userNFT = wallet_response.data.user_nft.reverse()
      const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+1)
      setBaseUrl(wallet_response.data.base_url)
      if(nftCollection != undefined && flag == 'backend'){
        
        if(nftCollection.length > 0){ 

          const items = await Promise.all(nftCollection.map(async (i, index) => {
            

            if(wallet_address.includes(i.seller)){
              console.log(i);
              var profileImage = '';
              wallet_response.data.profilesData.forEach(value => {
                if(value.wallet_address == i.seller){
                  profileImage = value.profile_image
                }
              });
              const tokenUri = await contract.tokenURI(i.tokenID)
              const USDPrice = i.price * reponsePriceExchange.data.USD;

              if(reponsePriceExchange){
                if(tokenUri.split('/')[2] ==  'infura-ipfs.io'){
                  var getwayURL = 'https://gateway.moralisipfs.com/ipfs/'+tokenUri.split('/')[4]
                  const meta = await axios.get(getwayURL)
                  let price = ethers.utils.formatUnits(i.string_price, 'ether')
                  console.log(i.string_price)
                  let item = {
                    price,
                    DollarPrice:USDPrice,
                    tokenId: i.tokenID,
                    seller: i.seller,
                    image: meta.data.image,
                    name: meta.data.name,
                    description: meta.data.description,
                    pImage : profileImage,
                    TokenID : i.tokenID,
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
        }else{
          console.log('No NFT')
          setNfts([])
          setLoadingState('loaded')
        }


      }else{
        console.log('Without filter')
        const items = await Promise.all(userNFT.map(async (i, index) => {
          var profileImage = '';
          wallet_response.data.profilesData.forEach(value => {
            if(value.wallet_address == i.seller){
              profileImage = value.profile_image
            }
          });
          const tokenUri = await contract.tokenURI(i.tokenID)
          const USDPrice = i.price * reponsePriceExchange.data.USD;
          // const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+i.price)

          if(reponsePriceExchange){
            if(tokenUri.split('/')[2] ==  'infura-ipfs.io'){
              var getwayURL = 'https://ipfs.io/ipfs/'+tokenUri.split('/')[4]
              const meta = await axios.get(getwayURL) 
            
              if(meta.data != undefined){
                
                let price = ethers.utils.formatUnits(i.string_price, 'ether')
              
                let item = {
                  price,
                  DollarPrice:USDPrice,
                  tokenId: i.tokenID,
                  seller: i.seller,
                  image: meta.data.image,
                  name: meta.data.name,
                  description: meta.data.description,
                  pImage : profileImage,
                  TokenID : i.tokenID,
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
    }else{
      router.push('/login')
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

      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
  
      /* user will be prompted to pay the asking proces to complete the transaction */
      const price = ethers.utils.parseUnits(nft.price, 'ether') 
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price
      }) 
      await transaction.wait()
      let fd = new FormData();
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
        notify("success", 'Buy NFT successfully')
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
          <div className="col-md-6">
            <h2 className="heading">All NFTs<div className="divider"></div></h2>
          </div>
          <div className="col-md-6">
            <div className='select-nfts'>
              <Select options={options} onChange={users} id="long-value-select" instanceId="long-value-select" />
            </div>
          </div>
        </div>
        <div className="">
          
          <div className="row myfvtrow">
          <h1 className="py-10 px-20 text-3xl"  >No items in marketplace</h1>
          </div>
        </div>
      </div>
    
    </section>
    <div id="modal-row" className="modal" style={{ display: show ? "block" : "none" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          
          <div className="modal-header">
            <h4 className="modal-title">Users</h4>
            <button type="button" className="close" data-dismiss="modal" onClick={close}>&times;</button>
          </div>

          <div className="modal-body">
            {html}
          </div>

        </div>
      </div>
    </div>
    <Mainfooter />
  </div>
  )
  return (
   
    <div>
     
           <Mainheader />
          <section className="latestnft">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="heading">All NFTs<div className="divider"></div></h2>
                </div>
                <div className="col-md-6">
                  <div className='select-nfts'>
                    <Select options={options} onChange={users} id="long-value-select" instanceId="long-value-select" />
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="loader-container">
                  <div className="spinner"></div>
                </div>
                
              ) : (
                <div className="">
                  {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4"> */}
                  <div className="row myfvtrow">
                    {
                    nfts.map((nft, i) => (
                       
                      nft?<div key={i} className="col-sm-6 col-md-4 col-lg-3 myfvt">      
                    {/* <div className="col-sm-6 col-md-4 col-lg-3 myfvt"> */}
                      <div className="nftbox">
                        <div className="nftbox-img">
                          <a href="#"><img src={nft.image} className="img-fluid" alt=""/></a>
                          <div className="counter"><span>717 : 6 : 32 : 34</span></div>
                        </div>
                        <div className="nftbox-desc">
                          <div className="nftbox-desc-img">
                            {/* <div className="nftbox-user"><a href="#"><img src="assets/images/user.png" className="img-fluid" alt=""/></a></div> */}
                            <div className="nftbox-user"><a href="#"><img src={nft.pImage ?baseURL+ '/'+ nft.pImage : 'assets/images/user.png' } className="img-fluid" alt=""/></a></div>
                            <span><a  onClick={() => wishlist(nft.wishlist_id, nft.id)} id={nft.wishlist_id}  ><i className={nft.wishlist == 1 ? 'fa fa-heart-o active':'fa fa-heart-o'} aria-hidden="true"></i></a></span>
                          </div>

                          <h3><a href="#">{nft.name}</a></h3>
                          <h5 className="rate">$ {nft.DollarPrice.toFixed(7)}</h5>
                          <button className="btn btn-info" onClick={() => buyNft(nft)} data-id={nft.TokenID}>Buy</button>
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
  
          <div id="modal-row" className="modal" style={{ display: show ? "block" : "none" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                
                <div className="modal-header">
                  <h4 className="modal-title">Users</h4>
                  <button type="button" className="close" data-dismiss="modal" onClick={close}>&times;</button>
                </div>
  
                <div className="modal-body">
                  {html}
                </div>
  
              </div>
            </div>
          </div>
          <Mainfooter />
        </div>
     
    
  
  )
}