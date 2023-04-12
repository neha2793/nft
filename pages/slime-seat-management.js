/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState, useRef } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import {
  marketplaceAddress
} from '../config'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'



export default function SlimeSeatManagement() {
  
  const [inputField , setInputField] = useState({
    name: '',
    Description: '',
    Price: '',
    S_ID: '',

  })
  const [ButtonDisabled, setButtonDisabled] = useState(true)
  const [flag, setFlag]=useState(false)
  const [DivflagAdd, setDivFlagAdd]=useState(false)
  const [DivflagList, setDivFlagList]=useState(true)
  const [base_url, BaseUrl]=useState('')
  const [Image_path, setImages]=useState([])
  const [processing, setProcessing] = useState(null)
  const [uploading, setUploading] = useState(null)
 
  
  // IMage Object
  const [image_priview1, setImagePreview1] = useState('');
  const [image_priview2, setImagePreview2] = useState('');
  const [image_priview3, setImagePreview3] = useState('');
  const [image_priview4, setImagePreview4] = useState('');
  const [image_priview5, setImagePreview5] = useState('');

  // Image Files
  const [image_file1, setImageFile1] = useState('');
  const [image_file2, setImageFile2] = useState('');
  const [image_file3, setImageFile3] = useState('');
  const [image_file4, setImageFile4] = useState('');
  const [image_file5, setImageFile5] = useState('');
  
  // Images IDS
  const [image_ID1, setImageID1] = useState('');
  const [image_ID2, setImageID2] = useState('');
  const [image_ID3, setImageID3] = useState('');
  const [image_ID4, setImageID4] = useState('');
  const [image_ID5, setImageID5] = useState('');
  const [product_image, setProductImage] = useState('');


  // Edit
  const [DivflagEdit, setDivFlagEdit]=useState(false)
  const [data, setEditData]=useState(false)
  
 
  
  // Featured Image
  const [featured_image, setFeatured_image]=useState(false)
  const [fileUrl, setFileUrl] = useState(null)
  const [fileUrlObj, setFileUrlOBJ] = useState(null)

  
  const [filteredSlimeSeat, setFilteredSlimeSeat] = useState([]);
  const [USDPrice, setUSDPrice] = useState('');
  const dataFetchedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [FlagData, setFlagData] = useState(true);


  const router = useRouter()
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    SlimeSeatManagementList()
  }, [])

  useEffect(() => {
    if(isLoading) return;    
    if (typeof window == 'undefined') return;

    // Importing datatables.net only on the client-side
    const $ = require('jquery');
    require('datatables.net');
    require('datatables.net-dt/css/jquery.dataTables.css');
    $('#data-table-ID').DataTable();
   
  }, [isLoading]);

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function setData(data, USDPrice){
    Object.values(data).forEach(async (value, index) => {
      value.USDPrice = value.Price * USDPrice;
      console.log(USDPrice)
    });
    return data;
  }


  // Get SC Video List .....
  async function SlimeSeatManagementList() {
  
    const user = JSON.parse(localStorage.getItem('user'));
   
    if(user){
      try{
        var response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-slime-seat-list', {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user.access_token
          },
        })
        
        const data = response.data;
        BaseUrl(response.data.base_url)

        const perUSDPrice = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+1) 
        var dataWithUSD = await setData(data.data, perUSDPrice.data.USD)
        setFilteredSlimeSeat(dataWithUSD)
        setIsLoading(false)
        setFlagData(false)
      }catch( error) {
        // handle error
        console.log(error)
        if(error.response.status == 400){
          notify("error", error.response.data.error)
        }else if(error.response.status == 401){
          localStorage.removeItem("user")
          router.push('/login')
        }else{
          notify("error", 'Something went wrong please try again!')
        }
      }
    }else{
        router.push('/login')
    }
  }

  // Sc Video Input handle Here......
  const inputsHandler = (e, resolve) =>{
    const { name, value } = e.target;
   
    if(name == 'Image_path'){
      if(image_file1 == '' || image_file2 == '' || image_file3 == '' || image_file4 == '' || image_file5 == ''){
        if(e.target.files[0]){
          if(image_priview1 == '' && e.target.files[0].name.split('.')[1] == 'jpg'){

            setImagePreview1(URL.createObjectURL(e.target.files[0]));
            console.log(Image_path)
            Image_path.splice(0, 0, e.target.files[0])
            setImageFile1(e.target.files[0])

          }else if(image_priview2 == ''  && e.target.files[0].name.split('.')[1] == 'jpg'){
          
            setImagePreview2(URL.createObjectURL(e.target.files[0]));
            Image_path.splice(1, 0, e.target.files[0])
            setImageFile2(e.target.files[0])

          }else if(image_priview3 == '' &&  e.target.files[0].name.split('.')[1] == 'jpg'){  
            setImagePreview3(URL.createObjectURL(e.target.files[0]));
            Image_path.splice(2, 0, e.target.files[0])
            setImageFile3(e.target.files[0])

          }else if(image_priview4 == '' &&  e.target.files[0].name.split('.')[1] == 'jpg'){  
            setImagePreview4(URL.createObjectURL(e.target.files[0]));
            Image_path.splice(3, 0, e.target.files[0])
            setImageFile4(e.target.files[0])

          }else if(image_priview5 == '' &&  e.target.files[0].name.split('.')[1] == 'jpg'){

            setImagePreview5(URL.createObjectURL(e.target.files[0]));
            Image_path.splice(4, 0, e.target.files[0])
            setImageFile5(e.target.files[0])

          }else{
            notify("error", 'Please upload only .jpg file!')
          }
          setFlag(true)
        }
      }else{
        notify("error", 'Please upload only 5 images!')
        
      }
    }else{
      setInputField((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  // Sc Video Uploaded Here......
  async function submitButton(){
    const user = JSON.parse(localStorage.getItem('user'));
    var temp = 'logout';
    if(inputField.Description && inputField.Price && inputField.name){

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
          // NFT UPLOAD......
          const url = await uploadToIPFS()
          setProcessing('Processing...')
          const web3Modal = new Web3Modal()
          const connection = await web3Modal.connect()
          const provider = new ethers.providers.Web3Provider(connection)
          const signer = provider.getSigner();
          const user = JSON.parse(localStorage.getItem('user'));
          if(inputField.name && inputField.Price && inputField.Description){

            // Wallet Address Save
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
            const price = ethers.utils.parseUnits(inputField.Price, 'ether')
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
                setProcessing(null);
              }
              if(error.code == 'ACTION_REJECTED'){
                notify('error','Transaction rejected!')
                setProcessing(null);
              }
            }
           
          
            if(transaction){
              const data = await contract.fetchItemsListed()
              let lastData = data[data.length - 1];
              let NFTD = new FormData();
              NFTD.append('name', inputField.name)
              NFTD.append('price', inputField.Price)
              NFTD.append('string_price', lastData.price.toString())
              NFTD.append('description', inputField.Description)
              NFTD.append('image', fileUrl)
              NFTD.append('hash_token', transaction.hash)
              NFTD.append('tokenID', lastData.tokenId.toNumber());
              NFTD.append('seller', lastData.seller);
              
              var nftcreated = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/save-user-nft', NFTD,{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+user.access_token
                },
              })
          
              if(nftcreated.data){
          
                let fd = new FormData();
                $.each($(Image_path), function(i, file) {
                  fd.append('Image_path[]', file);
                });
              
                fd.append('name', inputField.name)
                fd.append('Price', inputField.Price)  
                fd.append('Description', inputField.Description)  
                fd.append('product_id', nftcreated.data.userNFT.id)
                fd.append('featured_image', featured_image)
                axios({
                  method: 'post',
                  url: process.env.NEXT_PUBLIC_BASE_URL+'/api/add-slime-seat',
                  data: fd,
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer '+user.access_token
                  },
                }).then((response)  => {
                  notify("success", 'Slime seat added successfully!')
                  setProcessing(null)
                  setInputField({
                    name:'',
                    Description:'',
                    Price:'',
                  })
                  document.getElementById('name').value = '';
                  document.getElementById('comment').value = '';
                  document.getElementById('price').value = '';
                  document.getElementById('matic_price').value = '';
                  setDivFlagList(true)
                  setDivFlagAdd(false)
                  setImages('')
                  setFileUrlOBJ(null)
                  setFileUrl(null)
                  setImagePreview1('')
                  setImagePreview2('')
                  setImagePreview3('')
                  setImagePreview4('')
                  setImagePreview5('')
                  SlimeSeatManagementList()
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
              }else{
                notify("error", 'Something went wrong please try again!')
              }
            }
            // Save nft details
          }else{
            notify("error", 'Please fill all mandatory fields!')
            setButtonDisabled(false)
          }
        }
      }else{
        router.push('/login')
      }
    }else{
      notify("error", 'Please fill all mandatory fields!')
    }
  }

  // SC Video Delete.....
  async function DeleteSlimeSeat(e){
    
    if(confirm('Are you sure?')){
      const user = JSON.parse(localStorage.getItem('user'));
      let fd = new FormData();
      fd.append('S_ID', e.currentTarget.value)

      axios({
          method: 'post',
          url: process.env.NEXT_PUBLIC_BASE_URL+'/api/slime-seat-delete',
          data: fd,
          headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer '+user.access_token
          },
      }).then((response)  => {
        notify("success", 'Slime seat deleted successfully!')
        SlimeSeatManagementList()
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
    }    
  }

  // Edit Data Show....
  function divHandleEdit(e){

    const user = JSON.parse(localStorage.getItem('user'));
    
    var s_id = e.currentTarget.value;
    var fd = new FormData()
    fd.append('S_ID', e.currentTarget.value)
    if(user){
      
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-slime-seat-wid', fd, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then(async(response)  => {
        const data = response.data;
        setEditData(data)
        setInputField(data.TBL_slime_seats)
        const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+data.TBL_slime_seats.Price)

        setUSDPrice(reponsePriceExchange.data.USD)
        setFlag(true)
        setProductImage(data.product_image)
        var imageArr = []
        
        data.TBL_Slimeseat_Images.map(function(value, index){
          if(value.Image_path ==  s_id+'_1.jpg'){
            if(value.Status == 1){
              setImagePreview1(response.data.base_url+'/'+value.Image_path);
              setImageFile1(value.Image_path)
            }
            setImageID1(value.id)
            
          }
          if(value.Image_path ==  s_id+'_2.jpg'){
            if(value.Status == 1){
              setImagePreview2(response.data.base_url+'/'+value.Image_path);
              setImageFile2(value.Image_path)
            }
            setImageID2(value.id)
          }
          if(value.Image_path ==  s_id+'_3.jpg'){
            if(value.Status == 1){
              setImagePreview3(response.data.base_url+'/'+value.Image_path);
              setImageFile3(value.Image_path)
            }
            setImageID3(value.id)
          }
          if(value.Image_path ==  s_id+'_4.jpg'){
            if(value.Status == 1){
              setImagePreview4(response.data.base_url+'/'+value.Image_path);
              setImageFile4(value.Image_path)
            }
            setImageID4(value.id)
          }
          if(value.Image_path ==  s_id+'_5.jpg'){
            if(value.Status == 1){
              setImagePreview5(response.data.base_url+'/'+value.Image_path);
              setImageFile5(value.Image_path)
            }
            setImageID5(value.id)
          }
        })
      
        var imgPath = []
        var arrIDS = []
        $.each($(data.TBL_Slimeseat_Images), function(i, data) {
          imgPath.push(data.Image_path)
          arrIDS.push(data.id)
        });

        setImages(imgPath)
        setDivFlagEdit(true)
        setDivFlagList(false)
        
      }).catch(function (error) {
        // handle error
        console.log(error)
        if(error.response.status == 400){
          notify("error", error.response.data.error)
        }else if(error.response.status == 401){
          localStorage.removeItem("user")
          router.push('/login')
        }else{
          notify("error", 'Something went wrong please try again!')
        }
      })
      
    }else{
        router.push('/login')
    }
  }

  // Update Data Show.....
  async function UpdateButton(){
    const user = JSON.parse(localStorage.getItem('user'));


    let fd = new FormData();
   
    fd.append('img_1', image_file1)
    fd.append('img_2', image_file2)
    fd.append('img_3', image_file3)
    fd.append('img_4', image_file4)
    fd.append('img_5', image_file5)
    fd.append('img_id1', image_ID1)
    fd.append('img_id2', image_ID2)
    fd.append('img_id3', image_ID3)
    fd.append('img_id4', image_ID4)
    fd.append('img_id5', image_ID5)
    fd.append('S_ID', inputField.S_ID)
   
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/update-slime-seat',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
      },
    }).then((response)  => {
      // window.location.reload();
      notify("success", 'Slime seat updated successfully!')
      setDivFlagList(true)
      setDivFlagEdit(false)
      setImagePreview1('')
      setImagePreview2('')
      setImagePreview3('')
      setImagePreview4('')
      setImagePreview5('')
      SlimeSeatManagementList()
    
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
  }

  // Image Remove
  function removeImage(e){
    console.log(e.currentTarget.id)

    if(e.currentTarget.id == 0){
      setImagePreview1('')
      setImageFile1('')

    }
    if(e.currentTarget.id == 1){
      setImagePreview2('')
      setImageFile2('')
    }
    if(e.currentTarget.id == 2){
      setImagePreview3('')
      setImageFile3('')
      
    }
    if(e.currentTarget.id == 3){
      setImagePreview4('')
      setImageFile4('')
      
    }
    if(e.currentTarget.id == 4){
      setImagePreview5('')
      setImageFile5('')
      
    }
   
  }

  function divHandle(e){
    const user = JSON.parse(localStorage.getItem('user'));
    
    if(user){
      if(user.user.is_verified == 1){
        setDivFlagAdd(true)
        setDivFlagList(false)
      }else{
        e.preventDefault()
        alert('You do not have permission to access this option!')
      }
    }
  }
  function closeDiv(){
    setDivFlagAdd(false)
    setDivFlagEdit(false)
    setDivFlagList(true)
    setImages('')
    setImagePreview1('')
    setImagePreview2('')
    setImagePreview3('')
    setImagePreview4('')
    setImagePreview5('')
    setImageFile1('')
    setImageFile2('')
    setImageFile3('')
    setImageFile4('')
    setImageFile5('')
  }

  async function updateFormPrice(e){
    if(e.target.value == ''){
      document.querySelector('.doller_price').value = '';
      setInputField({ ...inputField, Price: e.target.value })
    }else{
      var exchangePriceResponse = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+e.target.value)
      if(exchangePriceResponse){
        document.querySelector('.doller_price').value = exchangePriceResponse.data.USD
        setInputField({ ...inputField, Price:   e.target.value.toString() })
      }
    }
  }

  // Featured Images Updoad
  async function onChangeAdd(e) {
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
        console.log(url)
        setFeatured_image(file)
        setFileUrlOBJ(URL.createObjectURL(file))
        setButtonDisabled(false)
        setUploading(null)

      
      }catch(e){
        console.log('Error uploading file: ', e)
      }
    }

    // return response.data.IpfsHash;
  }

  async function uploadToIPFS() {
    const { name, Description, Price } = inputField

    if (!name || !Description || !Price || !fileUrl) return
    /* first, upload metadata to IPFS */
  
    const data = JSON.stringify({
      name, Description, Price, image: fileUrl
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
      notify("error", 'Error uploading file: ', e)
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
              <h3>Slime Seat Management</h3>
            </div>
          </div>
        </div>
      </section>
      {/* For Slime Seat Add */}
      <div className="container"  style={{display: DivflagAdd ? 'block' : 'none'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="login-page-design">
              <h2>Add Slime Seat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
              <div className="loginform" style={{    maxWidth: '710px'}}>
              
                <button type="button" className="close" data-dismiss="modal" onClick={closeDiv}>Back</button>
           
                {/* Featured Image */}

                <div className="box">
                  <input type="file" onChange={onChangeAdd} name="featured_image" id="featured_image"  className="inputfile inputfile-4 file-5" data-multiple-caption="{count} files selected" multiple />
                  <label htmlFor="featured_image">
                  <figure><img className="profilepreview" src={fileUrlObj}   /></figure>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                </div>

                {/* Other Five Images */}
                <div className="form-group">
                  <lable className="lable-design">Multiple images</lable>
                  <input type="file" onChange={inputsHandler} name="Image_path" id="file-4"  className="form-control" data-multiple-caption="{count} files selected" multiple />
                 
                </div>
                <div className="form-group">
                    
                  {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a> */}
                  <div className="preview_images">

                    
                    <div className="box">
                      <figure>
                        {
                          flag ? Boolean(image_priview1) ?  
                          <><div className="remove1 get_image_id"  id={0} onClick={removeImage} >X</div> <img id="profilepreview1" className="profile_images_preview"  src={image_priview1} /> </> : 
                          <img id="profilepreview1" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> : 
                          <img id="profilepreview1" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> 
                        } 
                      </figure>
                    </div>
                
                    <div className="box">
                      <figure>
                        {
                          flag ? Boolean(image_priview2) ?
                          <><div className="remove2 get_image_id" id={1} onClick={removeImage} >X</div><img id="profilepreview2" className="profile_images_preview" src={image_priview2} /></> : 
                          <img id="profilepreview2" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> : 
                          <img id="profilepreview2" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> 
                        } 
                      </figure>
                    </div>
                    <div className="box">
                      <figure>
                        {
                          flag ? Boolean(image_priview3) ?
                          <><div className="remove3 get_image_id" id={2} onClick={removeImage} >X</div><img id="profilepreview3" className="profile_images_preview" src={image_priview3} /></> : 
                          <img id="profilepreview3" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> : 
                          <img id="profilepreview3" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> 
                        }
                      </figure>
                    </div>
                    <div className="box">
                      <figure>
                        {
                          flag ? Boolean(image_priview4) ?
                          <><div className="remove4 get_image_id" id={3} onClick={removeImage} >X</div><img id="profilepreview4" className="profile_images_preview" src={image_priview4} /></> : 
                          <img id="profilepreview4" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> : 
                          <img id="profilepreview4" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> 
                        } 
                        </figure>
                    </div>
                    <div className="box">
                      <figure>
                        {
                          flag ? Boolean(image_priview5) ?
                          <><div className="remove5 get_image_id" id={4} onClick={removeImage} >X</div><img id="profilepreview5" className="profile_images_preview" src={image_priview5} /></> : 
                          <img id="profilepreview5" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> : 
                          <img id="profilepreview5" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/'+Image_path :  'assets/images/no-image.png'}  /> 
                        } 
                      </figure>
                    </div>
                  </div>
                  {/* <a class="next" onclick="plusSlides(1)">&#10095;</a>
                  <div style={{textAlign: 'center'}}>
                      <span class="dot" onclick="currentSlide(1)"></span>
                      <span class="dot" onclick="currentSlide(2)"></span>
                      <span class="dot" onclick="currentSlide(3)"></span>
                      <span class="dot" onclick="currentSlide(4)"></span>
                  </div> */}
                   
                </div>
                <div className="form-group">
                  <label>Name<span className="required">*</span></label>
                  <input type="text" className="form-control" onChange={inputsHandler}  id="name" required name="name" />
                </div>
               
                {/* <div className="form-group">
                  <input type="text" className="form-control" onChange={inputsHandler} placeholder="Price" id="price" required name="Price" />
                </div> */}
                <div className="row">
                <div className="col-lg-6">

                  <div className="form-group">
                    <label>Matic Price<span className="required">*</span></label>
                    <input type="text" className="form-control" onChange={updateFormPrice} id="matic_price" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Dollar Price</label>
                    <input type="text" className="form-control doller_price" readOnly id="price" />
                  </div>
                </div>

                </div>
                <div className="form-group">
                  <label>Description<span className="required">*</span></label>
                  <textarea className="form-control" rows="5" onChange={inputsHandler}  required name="Description" id="comment"></textarea>
                </div>
                <div className="form-group loginbtn">
                    <input type="button" className="btn btn-info" disabled={processing ? 'disabled' : ButtonDisabled ? 'disabled': ''} onClick={submitButton} value={uploading ? uploading : processing ? processing : 'Submit'} />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Slime Seat Edit */}
      <div className="container"  style={{display: DivflagEdit ? 'block' : 'none'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="login-page-design">
              <h2>Edit Slime Seat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
              <div className="loginform" style={{ maxWidth: '710px'}}>
              
                <button type="button" className="close" data-dismiss="modal" onClick={closeDiv}>Back</button>
                <div className="box">
                  <label htmlFor="file-5">
                  <figure><img id="profilepreview" src={product_image}   /></figure>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                </div>
                <div className="form-group">
                  <lable className="lable-design">Multiple images</lable>
                  <input type="file" onChange={inputsHandler} name="Image_path" id="file-4"  className="form-control" data-multiple-caption="{count} files selected" multiple />
                 
                </div>
                <div className="form-group">
                    
                    {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a> */}
                    <div className="preview_images">
                        <div className="box">
                            <figure>
                                {
                                  flag ? Boolean(image_priview1) ?

                                  <><div className="remove1 get_image_id" data-image={data? data.TBL_Slimeseat_Images[0]?data.TBL_Slimeseat_Images[0].id:'':''} id={0} onClick={removeImage} >X</div><img id="profilepreview1" className="profile_images_preview"  src={image_priview1}  /> </> : 
                                  <img id="profilepreview1" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> : 
                                  <img id="profilepreview1" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> 
                                } 
                            </figure>
                        </div>
                        <div className="box">
                            <figure>
                                {
                                  flag ? Boolean(image_priview2) ?

                                  <><div className="remove2 get_image_id" data-image={data? data.TBL_Slimeseat_Images[1]?data.TBL_Slimeseat_Images[1].id:'' :''} id={1} onClick={removeImage} >X</div><img id="profilepreview2" className="profile_images_preview" src={image_priview2}  /> </> : 
                                  <img id="profilepreview2" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> : 
                                  <img id="profilepreview2" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> 
                                } 
                            </figure>
                        </div>
                        <div className="box">
                            <figure>
                                {
                                  flag ? Boolean(image_priview3) ?

                                  <><div className="remove3 get_image_id" data-image={ data? data.TBL_Slimeseat_Images[2]?data.TBL_Slimeseat_Images[2].id:'':''} id={2} onClick={removeImage} >X</div><img id="profilepreview3" className="profile_images_preview" src={image_priview3}  /> </> : 
                                  <img id="profilepreview3" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> : 
                                  <img id="profilepreview3" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> 
                                }
                            </figure>
                        </div>
                        <div className="box">
                            <figure>
                                {
                                  flag ? Boolean(image_priview4) ?

                                  <><div className="remove4 get_image_id" data-image={data? data.TBL_Slimeseat_Images[3]?data.TBL_Slimeseat_Images[3].id:'':''} id={3} onClick={removeImage} >X</div><img id="profilepreview4" className="profile_images_preview" src={image_priview4}  /> </> : 
                                  <img id="profilepreview4" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> : 
                                  <img id="profilepreview4" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> 
                                } 
                            </figure>
                        </div>
                        <div className="box">
                            <figure>
                                {
                                  flag ? Boolean(image_priview5) ?

                                  <><div className="remove5 get_image_id" data-image={data?data.TBL_Slimeseat_Images[4]?data.TBL_Slimeseat_Images[4].id:'':''}  id={4} onClick={removeImage} >X</div><img id="profilepreview5" className="profile_images_preview" src={image_priview5}  /> </> : 
                                  <img id="profilepreview5" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> : 
                                  <img id="profilepreview5" className="profile_images_preview"  src={  Image_path > 0 ? base_url+'/public/'+Image_path :  'assets/images/no-image.png'}  /> 
                                } 
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                  <input type="text" readOnly className="form-control" value={inputField.name} onChange={inputsHandler} placeholder="Name" id="name" name="name" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    
                    <div className="form-group">
                      <input type="text" readOnly className="form-control" value={inputField.Price} onChange={inputsHandler} placeholder="Price" id="price" name="Price" />
                    </div>
                  </div>
                  <div className="col-lg-6">

                    <div className="form-group">
                      <input type="text" className="form-control usdPrice" readOnly value={USDPrice}  placeholder="USD Price" id="price" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" readOnly rows="5" value={inputField.Description} onChange={inputsHandler} placeholder="Description" name="Description" id="comment"></textarea>
                </div>
                <div className="form-group loginbtn">
                    <input type="button" className="btn btn-info" onClick={UpdateButton} value="Update"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Slime seat  List */}
      <div className="container" style={{display: DivflagList ? 'block' : 'none'}} >
        <div className="row video_heading">
          <div className="col-md-6">
            <h2>Slime Seat Management List</h2>
          </div>
          <div className="col-md-6 text-right">
            
            <button type="button" className="btn btn-info add_sc" onClick={divHandle}>Add Slime Seat</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive datatables-design">
              <table id="data-table-ID" className="table dt-responsive dataTable no-footer">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Matic Price</th>
                    <th>USD Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
              
                  {filteredSlimeSeat?
                  filteredSlimeSeat.map(( listValue, index ) => {
                    return (
                      
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td style={{width: '50px', minWidth:'50px'}}><div className="video_button"><img src={process.env.NEXT_PUBLIC_BASE_URL+'/public/'+listValue.featured_image} /></div></td>
                        <td style={{width: '150px', minWidth:'150px'}}>{listValue.name}</td>
                        <td style={{width: '313px', minWidth:'313px'}}>{listValue.Description}</td>

                        <td style={{width: '90px', minWidth:'90px'}}> {listValue.Price?listValue.Price+'Matic':''}</td>
                        <td style={{width: '90', minWidth:'150px'}}>{listValue.USDPrice?'$ '+listValue.USDPrice.toFixed(7):''}</td>
                        <td className ="icon-design-td" style={{ width: '225px', minWidth: '225px' }}>
                          <span>
                            <button className="icon-design icon-edit" id={listValue.S_ID} onClick={divHandleEdit} value={listValue.S_ID}>
                              <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                          </span>
                          <span>
                            <button className="icon-design icon-delete" id={listValue.S_ID} onClick={DeleteSlimeSeat} value={listValue.S_ID}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </span>
                          <span>
                            <button className="btn btn-info" id={listValue.S_ID} onClick={e => {router.push(`/map-slime-seat?id=${listValue.S_ID}`)}} value={listValue.S_ID}>
                              Map Container
                            </button>
                          </span>
                        </td>
                      
                      </tr>
                      
                    );
                  }):''}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Mainfooter />
  </div>
   
  )
}
