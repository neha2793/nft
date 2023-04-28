/* pages/create-nft.js */
import * as React from "react";
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import toast from "../components/Toast";
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';


export default function Signup() {
  
  const [inputField , setInputField] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password:'',
    phone_number:''
  })
  const router = useRouter()

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const inputsHandler = (e) =>{
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function submitButton(){
    let fd = new FormData();
    fd.append('name', inputField.first_name)
    fd.append('lastname', inputField.last_name)
    fd.append('email', inputField.email)
    fd.append('password', inputField.password)
    fd.append('phone_number', inputField.phone_number)
    
    await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/register', fd).then((response)  => {
      // notify("success", 'Account Create Successfully')
      const data = response.data;
      localStorage.setItem('user', JSON.stringify(response.data))
      router.push('/my-profile')
    }).catch(function (error) {
      // handle error
      console.log(error)
      if(error.response.status == 400){
        notify("error", error.response.data.error)
      }else{
        notify("error", 'Something went wrong please try again!')
      }  
    })
    
  }

  return (
    <div>
      <Mainheader />
      <section className="login-page" style= {{ background: "url(" + "/assets/images/loginbg.jpg" + ")" }}>
        <section className="innerbg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Sign Up</h3>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page-design">
                <h2>Sign Up</h2>
                <h4>Create your account</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                <div className="loginform">
                 
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" onChange={inputsHandler}  name="first_name"  placeholder="First Name" id="fname"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" onChange={inputsHandler}  name="last_name" placeholder="Last Name" id="lname"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" onChange={inputsHandler}  name="email" placeholder="Email Address" id="email"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={inputsHandler}  name="password" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={inputsHandler}  name="phone_number" placeholder="Phone Number (optional)"/>
                  </div>
                  {/* <div className="form-group forgotpassword">
                    <a href="forgot-password.html">Forgot password?</a>
                  </div> */}
                  <div className="form-group loginbtn">
                    <input type="submit" className="btn btn-info" onClick={submitButton} value="SIGN UP"/>
                  </div>
                  <div className="form-group or">
                    <h3><span>OR</span></h3>
                  </div>
                 
                  <div className="form-group googlebtn">
                    <a href="#" onClick={() => notify("success", "Success!")}><img src="" className="img-fluid" alt=""/>continue with google</a>
                  </div>
                  <div className="form-group signuplink">
                    <p>Already have an account? &nbsp;
                      {/* <a href="login.html">Log In</a> */}
                      <Link href="/login">
                        <a  >
                        Login
                        </a>
                      </Link>
                    </p>
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