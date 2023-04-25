/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState, useRef } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';


export default function CreateItem() {
  

  const [fileUrl, setFileUrl] = useState(null)
  const [processing, setProcessing] = useState(null)
  const [uploading, setUploading] = useState(null)
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
      if(file){
        formData.append('file', file);
        setUploading('Uploading...')
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
          setUploading(null)
    
          // return response.data.IpfsHash;
        }catch(e){
          console.log('Error uploading file: ', e)
        }
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
      document.querySelector('.doller_price').value = '';
      updateFormInput({ ...formInput, price: e.target.value })
    }else{
      var exchangePriceResponse = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+e.target.value)
      if(exchangePriceResponse){
        document.querySelector('.doller_price').value = exchangePriceResponse.data.USD
        updateFormInput({ ...formInput, price:   e.target.value.toString() })
      }
    }
  }
 
  async function listNFTForSale() {
    
    const user = JSON.parse(localStorage.getItem('user'));
    var temp = 'logout';
    if(formInput.description && formInput.price && formInput.name){
      
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

          setButtonDisabled(true)
          const url = await uploadToIPFS()
          setProcessing('Processing...')
          const web3Modal = new Web3Modal()
          const connection = await web3Modal.connect()
          const provider = new ethers.providers.Web3Provider(connection)
          const signer = provider.getSigner();
    
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
          let transaction = '';
          try {   
            transaction = await contract.createToken(url, price, { value: listingPrice })
            await transaction.wait()
          } catch (error) {
            if(error.code == '-32603'){
              notify('error','Insufficient funds for gas * price + value!')
              document.getElementById('button_disabled'+nft.id).innerHTML = 'Buy';
              document.getElementById('button_disabled'+nft.id).disabled = false;
            }
            if(error.code == 'ACTION_REJECTED'){
              notify('error','Transaction rejected!') 
              setButtonDisabled(false)
              setProcessing(null)
            }
          }
          console.log(transaction);
          if(transaction){
            
            const data = await contract.fetchItemsListed()
            let lastData = data[data.length - 1];
            // Save nft details
            console.log(lastData.price.toString())
            let fd = new FormData();
            fd.append('name', formInput.name)
            fd.append('price', formInput.price)
            fd.append('string_price', lastData.price.toString())
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
            setProcessing(null)
            router.push('/')
          }
        }
      }else{
        router.push('/login')
      }
    }else{
      notify("error", 'Please fill all mandatory fields!')
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
                      <label>Name<span className="required">*</span></label>
                      <input type="text" className="form-control" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} id="name" required />
                    </div>

                    <div className="row">
                      <div className="col-lg-6">

                        <div className="form-group">
                          <label>Matic Price<span className="required">*</span></label>
                          <input type="text" className="form-control" onChange={updateFormPrice} id="" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Dollar Price</label>
                          <input type="text" className="form-control doller_price" readOnly  id="price" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Description<span className="required">*</span></label>
                      <textarea className="form-control" rows="5" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} required id="comment"></textarea>
                    </div>
                    <div className="form-group loginbtn">
                      <input type="button" className="btn btn-info" onClick={listNFTForSale} value={uploading ? uploading : processing ? processing : 'Submit'} disabled={processing ? 'disabled' :  ButtonDisabled ? 'disabled': ''} />
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
