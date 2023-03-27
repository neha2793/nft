/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';


export default function MyprofileView() {
  
  const [inputField , setInputField] = useState({
    name: '',
    lastname: '',
    email: '',
    phone_number:'',
    facebook_link:'',
    twitter_link:'',
    youtube_link:'',
    bio:'',
    is_verified:'',
  })
  const [userData, setUserData] = useState('')
  const [nfts, setNfts]=useState('')
  const [collectedNfts, setCollectedNfts]=useState('')
  const [profile_image, setProfileImage]=useState('')
  const router = useRouter()
  useEffect(() => {
    UserDetail()
  }, [])

  async function UserDetail() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/my-profile',{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        const data = response.data;
        setInputField(data.user) 
        setNfts(data.user_nfts)
        setCollectedNfts(data.user_collected_nft)
        setProfileImage(data.user.profile_image)
        setUserData(data)
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
      router.push('/login')
    }
  }

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

//   const inputsHandler = (e) =>{
//     const { name, value } = e.target;
//     if(name == 'profile_image'){
//       if(e.target.files[0]){
//         setFileObject(URL.createObjectURL(e.target.files[0]));
//         setProfileImage(e.target.files[0])
//         setFlag(true)
//       }
//     }else{
//       setInputField((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
    

//   }

//   async function submitButton(){
//     const user = JSON.parse(localStorage.getItem('user'));
//     delete user.user.profile_image
    
//     // localStorage.setItem('user', JSON.stringify(response.data))

//     let fd = new FormData();
//     fd.append('phone_number', Boolean(inputField.phone_number) ?inputField.phone_number : '' )
//     fd.append('profile_image', profile_image)  
//     axios({
//         method: 'post',
//         url: process.env.NEXT_PUBLIC_BASE_URL+'/api/update-my-profile',
//         data: fd,
//         headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': 'Bearer '+user.access_token
//         },
//     }).then((response)  => {
//       notify("success", 'Profile updated successfully!')
//     //   const data = response.data;
//       setInputField(response.data.user)
//       setUserData(response.data)
//       setProfileImage(response.data.user.profile_image)
//       setFlag(false)
//       Object.assign(user.user, {profile_image: response.data.user.profile_image});
//       localStorage.setItem('user', JSON.stringify(user))
//     }).catch(function (error) {
//       // handle error
//       if(error.response.status == 400){
//         notify("error", error.response.sdata.error)
//       }else if(error.response.status == 401){
//         localStorage.removeItem("user")
//         router.push('/login')
//       }else{
//         notify("error", 'Something went wrong please try again!')
//       }  
//     })
      
    
//   }

  return (
    <div>
        <Mainheader />
            <section className="login-page" style={{background: "url(" + "assets/images/loginbg.jpg" + ")" }}>

                <section className="innerbg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Profile details</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="profilepage">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            
                                <div className="loginform profile-left-d">
                                
                                    <div className="profile-left" style={{background:"url(" + "assets/images/nftbg.jpg" + ")" }}>
                                        <div className="form-group profile-imggroup">
                                            <div className="box">
                                                {/* <input type="file" name="file-5[]" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple="" /> */}
                                                <label htmlFor="file-5">
                                                    <figure>
                                                        <img id="profilepreview" src={profile_image ? userData.base_url+'/public/'+profile_image : 'assets/images/user.png'} />
                                                        {
                                                            inputField.is_verified == 1 
                                                            ? 
                                                                <img src="assets/images/v1.png" className="verification-images"></img>
                                                            : 
                                                            inputField.is_verified == 2 
                                                            ?
                                                                <img src="assets/images/v2.png" className="verification-images"></img>
                                                            : 
                                                                <img src="assets/images/v3.png" className="verification-images"></img>
                                                        }   
                                                       
                                                    </figure>
                                                </label>
                                            </div>
                                            <div className="profileinfo">
                                                
                                                <ul className="socialslinks">
                                                    <li><a href={inputField.facebook_link}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href={inputField.twitter_link}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href={inputField.youtube_link}><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                </ul>
                                                <div className="profileinfo-ex">
                                                    <span>{inputField.email}</span>
                                                    <span>{inputField.phone_number}</span>
                                                </div>
                                                <ul>
                                                    <li><span>{userData.volumn} MATIC</span>Volume</li>
                                                    <li><span>{userData.sale}</span>Sales</li>
                                                    <li><span>{userData.nft_count}</span>Items</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                                        
                                <div className="profile-details">
                                    <h3>{inputField.name} { inputField.lastname}</h3>
                                    <h5>{inputField.bio}</h5>
                                    {/* <h5>Lorem ipsum dolor sit amet, consectetur adipisicing</h5> */}
                                        
                                    <div className="profilemynft">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#home">Created</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#menu1">Collected</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">
                                            <div id="home" className="tab-pane active">
                                                <ul>
                                                    {
                                                       nfts.length > 0 
                                                        ?  
                                                            nfts.map((val, index) => {
                                                               return (
                                                                <li key={index}>
                                                                    <a href="#">
                                                                        <i className={val.wishlist_product_id ? 'fa fa-heart':''} aria-hidden="true"></i>
                                                                        <img src={val.image} alt="" className="img-fluid" />
                                                                    </a>
                                                                </li>)
                                                            })
                                                        :
                                                        <li>No nfts Created</li>
                                                    }
                                                    <ul></ul>
                                                </ul>
                                            </div>
                                            <div id="menu1" className="tab-pane fade">
                                                <ul>
                                                    {
                                                       collectedNfts.length > 0 
                                                        ?  
                                                            collectedNfts.map((val, index) => {           
                                                               return (
                                                                <li key={index} >
                                                                    <a href="#">
                                                                        <i className={val.wishlist_product_id ? 'fa fa-heart':''} aria-hidden="true"></i>
                                                                        <img src={val.image} alt="" className="img-fluid" />
                                                                    </a>
                                                                </li>)
                                                            })
                                                        :
                                                        <li>No nfts collected</li>
                                                    }
                                                    <ul></ul>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                        
                                </div>      
                            </div>  
                        </div>
                    </div>
                    </div>
               
           
                </section>
            </section>
        <Mainfooter />
    </div>
   
  )
}