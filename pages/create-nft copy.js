/* pages/create-nft.js */
import * as React from "react";
import { useState } from 'react'
import { ethers } from 'ethers'
import axios from "axios";
import toast from "../components/Toast";
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import {
  marketplaceAddress
} from '../config'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';


export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [ButtonDisabled, setButtonDisabled] = useState(true)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()



  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function onChange(e) {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      var formData = new FormData();
      const file = e.target.files[0]
      formData.append('file', file);
      try {
        const response = await axios({
          url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
          method: "POST", 
          data: formData,
          maxBodyLength: "Infinity", 
          headers: {
            'pinata_api_key'        : process.env.NEXT_PUBLIC_PINATA_PUBLIC_KEY,
            'pinata_secret_api_key' : process.env.NEXT_PUBLIC_PINATA_SECRET_KEY
          },
        });
        const url = `https://infura-ipfs.io/ipfs/${response.data.IpfsHash}`;
        setFileUrl(url)
        setButtonDisabled(false)
  
        // return response.data.IpfsHash;
      }catch(e){
        console.log('Error uploading file: ', e)
      }
    }else{
      router.push('/login')
    }
  }

  async function uploadToIPFS() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      const { name, description, price } = formInput

      if (!name || !description || !price || !fileUrl) return
      /* first, upload metadata to IPFS */
    
      const data = JSON.stringify({
        name, description, price, image: fileUrl
      });

      try {
        const response = await axios({
          url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
          method: "POST", 
          data: data,
          headers: {
            'Content-Type': 'application/json', 
            'pinata_api_key'        : process.env.NEXT_PUBLIC_PINATA_PUBLIC_KEY,
            'pinata_secret_api_key' : process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1MTUwMTllYi03NTVmLTRkNGYtYTRkOS1mMmE2MmVkMzM5ZjkiLCJlbWFpbCI6InJzOTYxMzYwOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjE5ODI3ZTllODI4ZmRlZjAzMjgiLCJzY29wZWRLZXlTZWNyZXQiOiI2NTY2MWQyZTFmMjNlMDcxZmFhZWViMTQwMzBlNWZmOGQ4MWYxZWU3ZDFkNWZjMjUwZTg5OTFhYTcxOTlkNmJjIiwiaWF0IjoxNjYyMTEwNzI1fQ.R7EAt6TfKn0U42TWptpY6p4d3nvIPoCOw7NnEFNecJs'
          },
        });
        const url = `https://infura-ipfs.io/ipfs/${response.data.IpfsHash}`;
        setButtonDisabled(false)
        return url

      }catch(e){
        console.log('Error uploading file: ', e)
      }
    }else{
      router.push('/login')
    }
  }
  async function updateFormPrice(e){
    if(e.target.value == ''){
      document.querySelector('.matic_price').value = ''
      updateFormInput({ ...formInput, price: e.target.value })
    }else{
      document.querySelector('.matic_price').value = e.target.value * 1.1056186433838122
      updateFormInput({ ...formInput, price: e.target.value * 1.1056186433838122 })
    }
  }
 

  async function listNFTForSale() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(formInput)
    if(user){
      setButtonDisabled(true)
      const url = await uploadToIPFS()
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner();

      const user = JSON.parse(localStorage.getItem('user'));
      let formdata = new FormData();
      formdata.append('wallet_address', await signer.getAddress())    
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/save-wallet-address', formdata,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        console.log(response.data);
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



      /* create the NFT */
      const price = ethers.utils.parseUnits(formInput.price, 'ether')
      let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()
      let transaction = await contract.createToken(url, price, { value: listingPrice })
  
      await transaction.wait()

      const data = await contract.fetchItemsListed()

    
      let lastData = data[data.length - 1];
      console.log(lastData)
    
      // Save nft details
    
      let fd = new FormData();
      fd.append('name', formInput.name)
      fd.append('price', formInput.price)
      fd.append('description', formInput.description)
      fd.append('image', fileUrl)
      fd.append('hash_token', transaction.hash)
      fd.append('tokenID', lastData.tokenId.toNumber());
      fd.append('seller', lastData.seller);
      
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/save-user-nft', fd,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        notify("success", 'NFT created successfully!')
        const data = response.data;

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
    
      router.push('/')
    }else{
      router.push('/login')
    }
  }

  return (
    <div>
      <Mainheader />
      <section className="login-page" style= {{ background: "url(" + "assets/images/loginbg.jpg" + ")" }}>
        <section className="innerbg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Create NFT</h3>
              </div>
            </div>
          </div>
        </section>


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page-design">
                <h2>Create NFT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                <div className="loginform">
                  <form>
                    <div className="box">
                      <input type="file" onChange={onChange} name="file-5[]" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
                      <label htmlFor="file-5">
                      <figure><img id="profilepreview" src={fileUrl}/></figure>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} placeholder="Asset Name" id="name" required />
                    </div>
                    <div className="form-group col-6">
                      <input type="text" className="form-control" onChange={updateFormPrice} placeholder="Doller Price" id="" required />
                    </div>
                    <div className="form-group col-6">
                      <input type="text" className="form-control matic_price" readOnly  placeholder="Matic Price" id="price" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="5" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} required placeholder="Asset Description" id="comment"></textarea>
                    </div>
                    <div className="form-group loginbtn">
                      <input type="button" className="btn btn-info" onClick={listNFTForSale} value="Submit" disabled={ButtonDisabled ? 'disabled': ''} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mainfooter />
    </div>
    
  
  )
}