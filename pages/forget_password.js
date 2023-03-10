/* pages/create-nft.js */
import * as React from "react";
import { useState } from 'react'
import axios from "axios";
import toast from "../components/Toast";
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';

export default function forget_password() {
  
  const [formInput, updateFormInput] = useState({  email: '' })
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function submit (){
    if(formInput.email){
      document.getElementById("submit_btn").disabled = true;
        axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/forget-password', formInput,{
            headers: {
            'Content-Type': 'application/json',
            },
        }).then((response)  => {
            notify("success", 'Reset password email has been sent!')
            updateFormInput({
                email: ''
            })
            document.getElementById('email').value = '';
            document.getElementById("submit_btn").disabled = false;
            
        }).catch(function (error) {
            // handle error
            if(error.response.status == 400){
                notify("error", error.response.data.error)
            }else{
                notify("error", 'Something went wrong please try again!')
            }
            document.getElementById("submit_btn").disabled = false;
        }) 
    }else{
      notify("error", 'Email is required!')
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
      <h3>Forgot Password</h3>
      </div>
    </div>
  </div>
</section>


<div className="container">
    <div className="row">
      <div className="col-md-12">
      <div className="login-page-design">
      <h2>Forgot Password</h2>
      <h4>Enter your email to reset your password</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
      <div className="loginform">
      <form>
        <div className="form-group">
          <input type="email" className="form-control" onChange={e => updateFormInput({ ...formInput, email: e.target.value })} placeholder="Email Address" id="email"/>
        </div>
        <div className="form-group loginbtn">
        <input type="button" id="submit_btn" onClick={submit} className="btn btn-info" value="submit"/>
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