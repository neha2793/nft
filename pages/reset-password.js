/* pages/create-nft.js */
import * as React from "react";
import { useEffect,useState } from 'react'
import axios from "axios";
import toast from "../components/Toast";
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import { useRouter } from 'next/router'

export default function forget_password() {
    const router = useRouter()
    const [formInput, updateFormInput] = useState({  password: '', confirm_password: '', email: '' })

  useEffect(() => {
    
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    updateFormInput({...formInput, email: email})
  }, [])
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function submit (){
    if(formInput.password, formInput.confirm_password){

        if(formInput.password == formInput.confirm_password){
            axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/forget-password', formInput,{
                headers: {
                'Content-Type': 'application/json',
                },
            }).then((response)  => {
                notify("success", 'Password changed successfully!')
                updateFormInput({
                    email: ''
                })
                router.push('/login')
            }).catch(function (error) {
                // handle error
                if(error.response.status == 400){
                    notify("error", error.response.data.error)
                }else{
                    notify("error", 'Something went wrong please try again!')
                }
            }) 
        }else{
            notify("error", 'Confirm password not matched!')
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
                            <h3>Reset Password</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                <div className="login-page-design">
                <h2>Reset Password</h2>
                <h4>Enter your password</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                <div className="loginform">
                <form>
                    
                    <input type="hidden" className="form-control"   id="email"/>                    
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={e => updateFormInput({ ...formInput, password: e.target.value })} placeholder="password" id="password"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={e => updateFormInput({ ...formInput, confirm_password: e.target.value })} placeholder="Confirm Password" id="confirm_password"/>
                    </div>
                    <div className="form-group loginbtn">
                        <input type="button" onClick={submit} className="btn btn-info" value="submit" />
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