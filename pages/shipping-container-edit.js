/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import queryString from 'query-string';




export default function MSCVideo() {
  
  const [inputField , setInputField] = useState({
    Name: '',
    Description: '',
    Featured_Image: '',
    Sc_ID: ''
  })

  const [file, setFileObject]=useState('')
  const [flag, setFlag]=useState(false)
  const [base_url, BaseUrl]=useState('')
  const [Featured_Image, setFeaturedImage]=useState('')
  const [SCdata, setData]=useState('')



  const router = useRouter()
  useEffect(() => {
    GetMSC()
  }, [])


  // Get SC GetMSC .....
  async function GetMSC() {
    const user = JSON.parse(localStorage.getItem('user'));
    let params = queryString.parse(location.search)
    var fd = new FormData()
    fd.append('sc_id', params.id)
    if(user){
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-manage-sc', fd,  {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token,
        },
       
      }).then((response)  => {
        const data = response.data;
        BaseUrl(response.data.base_url)
      
        setFeaturedImage(data.manage_sc.Featured_Image)
        setInputField(data.manage_sc)
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

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  // Sc Video Input handle Here......
  const inputsHandler = (e, resolve) =>{
    const { name, value } = e.target;
    if(name == 'Featured_Image'){      
        if(e.target.files[0]){
            setFileObject(URL.createObjectURL(e.target.files[0]));
            setFeaturedImage(e.target.files[0])
            setFlag(true)
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
    let fd = new FormData();
    fd.append('sc_id', inputField.Sc_ID)
    fd.append('Name', inputField.Name)
    fd.append('Featured_Image', Featured_Image)  
    fd.append('Description', inputField.Description)  
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/update-manage-sc',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
      },
    }).then((response)  => {
      notify("success", 'Shipping Container updated successfully')
      const data = response.data;
      setFeaturedImage(data.manage_sc.Featured_Image)
      setInputField(data.manage_sc)
    //   setFlag(false)
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
  }

  

  


  return (
    <div>
    <Mainheader />
    <section className="login-page" style= {{ background: "url(" + "assets/images/loginbg.jpg" + ")" }}>
      <section className="innerbg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Shipping Container</h3>
            </div>
          </div>
        </div>
      </section>

      {/* For video upload */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="login-page-design">
              <h2>Edit Shipping Container</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
              <div className="loginform">
              
                <div className="box">
                  <input type="file" onChange={inputsHandler} name="Featured_Image" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
                  <label htmlFor="file-5">
                  <figure><img id="profilepreview" src={flag ? file : Featured_Image ? base_url+'/'+Featured_Image :  'assets/images/sample2.jpg'}  /></figure>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" value={inputField.Name} onChange={inputsHandler} placeholder="Name" id="name" name="Name" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" value={inputField.Description} rows="5" onChange={inputsHandler} placeholder="Description" name="Description" id="comment"></textarea>
                </div>
                <div className="form-group loginbtn">
                    <input type="button" className="btn btn-info" onClick={submitButton} value="Submit"/>
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