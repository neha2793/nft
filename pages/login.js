/* pages/create-nft.js */
import * as React from "react";
import { useEffect, useState } from 'react'
import axios from "axios";
import toast from "../components/Toast";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';

export default function Login() {
  const [inputField , setInputField] = useState({
    email: '',
    password:'',
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
  
    fd.append('email', inputField.email)
    fd.append('password', inputField.password)
    
    axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/login', fd).then((response)  => {
      // notify("success", 'Login Successfully')
      localStorage.setItem('user', JSON.stringify(response.data))
      router.push('/my-nft')
    }).catch(function (error) {
      // handle error
      if(error.response.status == 400){
        notify("error", error.response.data.error)
      }else if(error.response.status == 401){
        notify("error", "Please check email or password!")
      }else{
        notify("error", 'Something went wrong please try again!')
      } 
    })
    
  }
  
  return (
    <div>
      <Mainheader />
      <section className="login-page" style= {{ background: "url(" + "assets/images/loginbg.jpg" + ")" }}>
        <section className="innerbg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Login</h3>
              </div>
            </div>
          </div>
        </section>


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page-design">
                <h2>Log in</h2>
                <h4>Login to your account</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                <div className="loginform">
               
                  <div className="form-group">
                    <input type="email" name ="email" className="form-control"  onChange={inputsHandler}  placeholder="Email Address" id="email"/>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" className="form-control"  onChange={inputsHandler}  placeholder="Password" id="pwd"/>
                  </div>
                  <div className="form-group forgotpassword">
                    <Link href="/forget_password">
                      <a >
                      Forgot password?
                      </a>
                    </Link>
                    {/* <a href="forgot-password.html">Forgot password?</a> */}
                  </div>
                  <div className="form-group loginbtn">
                    <input type="submit" onClick={submitButton} className="btn btn-info" value="LOG IN"/>
                  </div>
                  <div className="form-group or">
                    <h3><span>OR</span></h3>
                  </div>
                 
                  <div className="form-group googlebtn">
                    {/* <a href="#"><img src="assets/images/google-icon.png" className="img-fluid" alt=""/>continue with google</a> */}
                    <a href="#"><img src="" className="img-fluid" alt=""/>continue with google</a>
                  </div>
                  <div className="form-group signuplink">
                    <p>Not registered? &nbsp<Link href="/signup">
                        <a >
                        sign up
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