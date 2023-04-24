/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';


export default function Myprofile() {
  
  const [inputField , setInputField] = useState({
    id: '',
    name: '',
    lastname: '',
    email: '',
    password:'',
    phone_number:'',
    bio:'',
    facebook_link:'',
    twitter_link:'',
    youtube_link:'',
    is_verified:'',
    profile_image: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    address: '',
  })
  const [userData, setUserData] = useState('')
  const [file, setFileObject]=useState('')
  const [profile_image, setProfileImage]=useState('')
  const [flag, setFlag]=useState(false)
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

  const inputsHandler = (e) =>{
    const { name, value } = e.target;
    if(name == 'profile_image'){
      if(e.target.files[0]){
        setFileObject(URL.createObjectURL(e.target.files[0]));
        setProfileImage(e.target.files[0])
        setFlag(true)
      }
    }else{
      setInputField((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    

  }

  async function submitButton(){
    console.log(inputField.facebook_link)
    const user = JSON.parse(localStorage.getItem('user'));
    delete user.user.profile_image
    
    // localStorage.setItem('user', JSON.stringify(response.data))
    let fd = new FormData();
    fd.append('name', inputField.name)
    fd.append('lastname', inputField.lastname)
    fd.append('bio',  Boolean(inputField.bio) ? inputField.bio : '')

    fd.append('city',  Boolean(inputField.city) ? inputField.city : '')
    fd.append('state',  Boolean(inputField.state) ? inputField.state : '')
    fd.append('country',  Boolean(inputField.country) ? inputField.country : '')
    fd.append('pincode',  Boolean(inputField.pincode) ? inputField.pincode : '')
    fd.append('address',  Boolean(inputField.address) ? inputField.address : '')
    fd.append('facebook_link', Boolean(inputField.facebook_link) ? inputField.facebook_link : '')
    fd.append('twitter_link', Boolean(inputField.twitter_link )? inputField.twitter_link : '')
    fd.append('youtube_link', Boolean(inputField.youtube_link) ? inputField.youtube_link : '')
    fd.append('phone_number', Boolean(inputField.phone_number) ?inputField.phone_number : '' )
    fd.append('profile_image', profile_image)  
    axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_BASE_URL+'/api/update-my-profile',
        data: fd,
        headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
        },
    }).then((response)  => {
      notify("success", 'Profile updated successfully!')
    //   const data = response.data;
      setInputField(response.data.user)
      setUserData(response.data)
      setProfileImage(response.data.user.profile_image)
      setFlag(false)
      Object.assign(user.user, {profile_image: response.data.user.profile_image});
      localStorage.setItem('user', JSON.stringify(user))
    }).catch(function (error) {
      // handle error
      if(error.response.status == 400){
        notify("error", error.response.sdata.error)
      }else if(error.response.status == 401){
        localStorage.removeItem("user")
        router.push('/login')
      }else{
        notify("error", 'Something went wrong please try again!')
      }  
    })
      
    
  }

  async function verifyAccount(e){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      var fd = new FormData();
      fd.append('id', e.target.value);
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/verification-request', fd,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        notify("success", 'Verification request submit!')
        UserDetail()
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

  return (
    <div>
      <Mainheader />
      <section className="login-page" style= {{ background: "url(" + "/assets/images/loginbg.jpg" + ")" }}>
        <section className="innerbg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>My Profile</h3>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page-design">
                <h2>My Profile</h2>
                <h4>Update your account</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                <div className="loginform">
                    <div className="box">
                        <input type="file"  name="profile_image" id="file-5" onChange={inputsHandler}  className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
                        <label htmlFor="file-5">
                        <figure><img id="profilepreview" src={flag ? file : profile_image ? userData.base_url+'/public/'+profile_image :  'assets/images/user.png'} /></figure>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={inputsHandler}  name="name"  placeholder="First Name" value={inputField.name} id="fname" disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" onChange={inputsHandler}  name="email" placeholder="Email Address" value={inputField.email} id="email" disabled />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="city" placeholder="City" value={inputField.city } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="country" placeholder="Country" value={inputField.country } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="facebook_link" placeholder="Facebook link" value={inputField.facebook_link ? inputField.facebook_link : '' } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="youtube_link" placeholder="Youtube link" value={inputField.youtube_link ? inputField.youtube_link : '' } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="lastname" placeholder="Last Name" value={inputField.lastname} id="lname" disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="phone_number" placeholder="Phone Number (optional)" value={Boolean(inputField.phone_number) ? inputField.phone_number : '' } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="state" placeholder="State" value={inputField.state } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="pincode" placeholder="Pincode" value={inputField.pincode } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="twitter_link" placeholder="Twitter link" value={inputField.twitter_link ? inputField.twitter_link : '' } disabled={inputField.is_verified == 0 ? false : true} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={inputsHandler}  name="bio" placeholder="Bio" value={inputField.bio } disabled={inputField.is_verified == 2 ? true : false} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" onChange={inputsHandler}  name="address" placeholder="Address" value={inputField.address } disabled={inputField.is_verified == 0 ? false : true} />
                    </div>
                    {/* <div className="form-group forgotpassword">
                        <a href="forgot-password.html">Forgot password?</a>
                    </div> */}

                    <div className="row">
                      <div className="col">
                        <div className="form-group loginbtn">
                          <input type="submit" className="btn btn-info" onClick={submitButton} disabled={inputField.is_verified == 2 ? true : false} value={inputField.is_verified == 2 ? 'Verification Pending' : 'UPDATE'} />
                        </div> 
                      </div>
                      {
                        inputField.is_verified == 0 
                        ?
                          <div className="col">
                            <div className="form-group loginbtn">
                              <button className="btn btn-info"  onClick={verifyAccount} value={inputField.id}  ><i className="fas fa-badge-check"></i>Verify Account</button>
                            </div> 
                          </div>

                        : 
                        ''
                        }
                    </div>
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