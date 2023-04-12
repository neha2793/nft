/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState, useRef } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';



export default function SCVideo() {
  
  const [inputField , setInputField] = useState({
    name: '',
    description: '',
    video: '',
    redirection_link:''
  })
  const [file, setFileObject]=useState('')
  const [video, setVideo]=useState('')
  const [flag, setFlag]=useState(false)
  const [Divflag, setDivFlag]=useState(false)
  const [show, setShow] = useState(false);
  const [base_url, BaseUrl]=useState('')
  const [html, Sethtml] = useState('');
  const [fileType, SetFileType] = useState('video');
  const dataFetchedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const [filteredShippingContainer, setFilteredShippingContainer] = useState([]);


  const router = useRouter()
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    SCVideoList()
  }, []);
  
  useEffect(() => {
    if(isLoading) return;    
    if (typeof window == 'undefined') return;

    // Importing datatables.net only on the client-side
    const $ = require('jquery');
    require('datatables.net');
    require('datatables.net-dt/css/jquery.dataTables.css');
    $('#data-table-ID').DataTable();
   
  }, [isLoading]);

  // Get SC Video List .....
  function SCVideoList() {
   
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-sc-video',{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then( async(response)  => {
        const data = response.data;
        BaseUrl(response.data.base_url)
        setFilteredShippingContainer(Object.values(data.sc_videos))
        setIsLoading(false)
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
    if(name == 'video'){ 

      if(e.target.files[0]){
        if(e.target.files[0].type.split('/')[0] == 'video'){
          SetFileType('video')
        }else{
          SetFileType('image')
        }  
        setFileObject(URL.createObjectURL(e.target.files[0]));
        setVideo(e.target.files[0])
      }
    }else{
      setInputField((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    setFlag(true)
    

  }

  // Sc Video Uploaded Here......
  async function submitButton(){
    const user = JSON.parse(localStorage.getItem('user'));
    let fd = new FormData();
    fd.append('name', inputField.name)
    fd.append('video', video)  
    fd.append('description', inputField.description)  
    fd.append('redirection_link', inputField.redirection_link)
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/sc-video',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
      },
    }).then((response)  => {
      notify("success", 'Shipping container video added successfully!')
      setInputField({
        name:'',
        description:'',
        video:'',
        redirection_link:''
      })
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
      document.getElementById('profilepreview').src = '';
      setFlag(false)
      setDivFlag(false)
      SCVideoList()
      SetFileType('video')
      setFileObject('')
      setVideo('')
    }).catch(function (error) {
      // handle error
      console.log(error)
      if(error.response.status == 400){
        notify("error", error.response.data.error)
      }else if(error.response.status == 401){
        localStorage.removeItem("user")
        router.push('/login')
      }else if(error.response.status == 413){
        notify("error", 'File size too large!')

      }else{
        notify("error", 'Something went wrong please try again!')
      }  
    })
  }

  // SC Video Delete.....
  async function DeleteSC(e){
    
    const user = JSON.parse(localStorage.getItem('user'));
    if(confirm('Are you sure?')){
      let fd = new FormData();
      fd.append('sc_id', e.currentTarget.value)
  
      axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_BASE_URL+'/api/sc-video-delete',
        data: fd,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        notify("success", 'Shipping container video deleted successfully!')
        SCVideoList()
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

  function divHandle(e){

    const user = JSON.parse(localStorage.getItem('user'));
    if(user.user.is_verified == 1 && user){
      setDivFlag(true)
    }else{
      e.preventDefault()
      alert('You do not have permission to access this option!')
    }
  }

  function closeDiv(){
    setDivFlag(false)
  }

  // Popup close ....
  function close(){
    setShow(false);
    Sethtml('')
  }

  function popUpClick(e){
    setShow(true)
    Sethtml(
      <div>
        <video width="320" height="240" src={e.currentTarget.name}   controls autoPlay >
        </video>
      </div>
    );
  }

  

  return (
    <div>
    <Mainheader />
    <section className="login-page" style= {{ background: "url(" + "assets/images/loginbg.jpg" + ")" }}>
      <section className="innerbg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Shipping Container Video</h3>
            </div>
          </div>
        </div>
      </section>

      {/* For video upload */}
      <div className="container"  style={{display: Divflag ? 'block' : 'none'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="login-page-design">
              <h2>Add Shipping Container video</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
              <div className="loginform">
              
                <button type="button" className="close" data-dismiss="modal" onClick={closeDiv}>Back</button>
                <div className="box">
                  <input type="file" onChange={inputsHandler} name="video" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
                  <label htmlFor="file-5">
                  <figure>
                    {fileType == 'video'?

                      <video id="profilepreview" data-id={flag} data-value={file}  data-sc={video} src={flag ? file : video} />
                      :
                      <img id="profilepreview" data-id={flag} data-value={file}  data-sc={video}   src={flag ? file : video}></img>
                    
                    }
                  </figure>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={inputsHandler} placeholder="Name" id="name" name="name" />
                </div>
                {fileType == 'image'?

                  <>
                    <div className="form-group">
                      <input type="text" className="form-control" onChange={inputsHandler} placeholder="Redirection link" id="redirection_link" name="redirection_link" />
                    </div>
                  </>
                  :
                  <></>
              
                
                }
                <div className="form-group">
                    <textarea className="form-control" rows="5" onChange={inputsHandler} placeholder="Description" name="description" id="comment"></textarea>
                </div>
                <div className="form-group loginbtn">
                    <input type="button" className="btn btn-info" onClick={submitButton} value="Submit"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Videos List */}
      <div className="container" style={{display: Divflag ? 'none' : 'block'}} >
        <div className="row video_heading">
          <div className="col-md-6">
            <h2>Shipping Container Video List</h2>
          </div>
          <div className="col-md-6 text-right">
            
            <button type="button" className="btn btn-info add_sc" onClick={divHandle}>Add SC Video</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive datatables-design">
              <table id="data-table-ID" className="table dt-responsive dataTable no-footer">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Video</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
              
                  {filteredShippingContainer?
                  filteredShippingContainer.map(( listValue, index ) => {
                    return (
                      
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td style={{width: '50px', minWidth:'50px'}}>
                          {listValue.type == 'Video' ?  
                            <div className="video_button">
                              <i className="fa fa-play-circle" aria-hidden="true"></i>
                              <input type="button" onClick={popUpClick}  value="" className="fa fa-play-circle"  name={base_url+'/public/'+ listValue.video} /> 
                              <div>
                                <video width="320" height="240">
                                  <source src={listValue.video ? process.env.NEXT_PUBLIC_BASE_URL+'/public/'+ listValue.video :''} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              </div>
                            
                          :
                            <div className="video_button">
                              <img src={listValue.video ? base_url+'/'+ listValue.video :''} className="zoom" />
                            </div>
                          }
                        </td>
                        <td style={{width: '150px',minWidth: '150px'}}> {listValue.name}</td>
                        <td style={{width: '504px', minWidth: '504px'}}>{listValue.description}</td>
                        <td className="icon-design-td" style={{minWidth: '190px',width: '190px' }}>
                          <span>
                            <button className="icon-design icon-delete" id={listValue.id} onClick={DeleteSC} value={listValue.id}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </span>
                          <span>
                            <button className="btn btn-info" id={listValue.id} onClick={e => {router.push(`/map-shipping-container?id=${listValue.id}`)}} value={listValue.id}>
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

      {/* Video Popup */}
      <div id="modal-row" className="modal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Shipping Container Video</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={close}>&times;</button>
            </div>
            <div className="modal-body">
              {html}
            </div>

          </div>
        </div>
      </div>

    </section>
    <Mainfooter />
  </div>
   
  )


}