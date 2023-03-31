/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';





export default function MSCVideo() {
  
  const [inputField , setInputField] = useState({
    Name: '',
    Description: '',
    Featured_Image: ''
  })
  const { SearchBar } = Search;

  const [file, setFileObject]=useState('')
  const [ManageSCList, setManageSCList]=useState([])
  const [flag, setFlag]=useState(false)
  const [Divflag, setDivFlag]=useState(false)
  const [base_url, BaseUrl]=useState('')
  const [Featured_Image, setFeaturedImage]=useState('')
  const [filteredManageShippingContainer, setFilteredManageShippingContainer] = useState([]);


  const router = useRouter()
  useEffect(() => {
    MSCVideoList()
    var table =  document.querySelector('#data-table-ID');
    table.classList.remove("table-bordered");
  }, [])

 


  // Get SC Video List .....
  async function MSCVideoList() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      var fd = new FormData();
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-manage-sc-list', fd, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        const data = response.data;
        BaseUrl(response.data.base_url)
        setManageSCList(Object.values(data.manage_sc))
        setFilteredManageShippingContainer(Object.values(data.manage_sc))
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
    fd.append('Name', inputField.Name)
    fd.append('Featured_Image', Featured_Image)  
    fd.append('Description', inputField.Description)  
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/manage-sc',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
      },
    }).then((response)  => {
      notify("success", 'Shipping container added successfully!')
      setInputField({
        Name:'',
        Description:'',
        Featured_Image:'',
      })
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
      setFlag(false)
      setFeaturedImage('')
      setDivFlag(false)
      MSCVideoList()
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

  // SC Video Delete.....
  async function DeleteSC(e){
    
    const user = JSON.parse(localStorage.getItem('user'));
    if(confirm('Are you sure?')){
      let fd = new FormData();
      fd.append('sc_id', e.currentTarget.value)

      axios({
          method: 'post',
          url: process.env.NEXT_PUBLIC_BASE_URL+'/api/manage-sc-delete',
          data: fd,
          headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer '+user.access_token
          },
      }).then((response)  => {
        notify("success", 'Shipping container deleted successfully!')
        MSCVideoList()
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
    if(user){
      if(user.user.is_verified == 1 ){
        
        setDivFlag(true)
      }else{
        e.preventDefault()
        alert('You do not have permission to access this option!')
      }
    }
  }
  function closeDiv(){
    setDivFlag(false)
  }

  // Datalist
  const columns = [
    {
      text: "#",
      dataField: 'Sc_ID',
      formatter: (cell, row, index) => index+1,
    },
    {
      text: "Images",
      dataField: 'Featured_Image',
      sort: true,
      formatter: (cell, row) => <div className="video_button">
                                  <img src={process.env.NEXT_PUBLIC_BASE_URL+'/public/'+row.Featured_Image} />
                                </div>,
      headerStyle: { minWidth: '50px' },
      style: { width: '50px' },
    },
    {
      text: "Name",
      dataField: 'Name',
      sort: true,
      formatter: (cell, row) => row.Name,
      headerStyle: { minWidth: '150px' },
      style: { width: '150px' },
    },
    {
      text: "Description",
      dataField: 'Description',
      sort: true,
      formatter: (cell, row) => row.Description,
      style:{width : '504px'},
      headerStyle:{minWidth : '504px'}
    },
    {
      text: "Action",
      dataField: 'Status',
      classes: 'icon-design-td',
      headerStyle: { minWidth: '190px' },
      style: { width: '190px' },
      formatter: (cell, row) => <><span>
                                  <button className="icon-design icon-edit" onClick={e => {router.push(`/shipping-container-edit?id=${row.Sc_ID}`)}} value={row.Sc_ID}>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                  </button>
                                </span>
                                <span>
                                  <button className="icon-design icon-delete" id={row.Sc_ID} onClick={DeleteSC} value={row.Sc_ID}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                  </button>
                                </span></>
     
    },
    
  ] 
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );
  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
     // A numeric array is also available. the purpose of above example is custom the text
  };



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
      <div className="container"  style={{display: Divflag ? 'block' : 'none'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="login-page-design">
              <h2>Add Shipping Container</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
              <div className="loginform">
              
                <button type="button" className="close" data-dismiss="modal" onClick={closeDiv}>Back</button>
                <div className="box">
                  <input type="file" onChange={inputsHandler} name="Featured_Image" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
                  <label htmlFor="file-5">
                  <figure><img id="profilepreview" src={flag ? file : Featured_Image ? base_url+'/public/'+Featured_Image :  'assets/images/sample2.jpg'}  /></figure>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"></path></svg></span></label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={inputsHandler} placeholder="Name" id="name" name="Name" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="5" onChange={inputsHandler} placeholder="Description" name="Description" id="comment"></textarea>
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
            <h2>Shipping Container List</h2>
          </div>
          <div className="col-md-6 text-right">
            
            <button type="button" className="btn btn-info add_sc" onClick={divHandle}>Add Shipping Container</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive datatables-design">
            <ToolkitProvider
                keyField="id"
                data={ filteredManageShippingContainer }
                columns={ columns }
                search
              >
                {
                  props => (
                    <div> 
                      <SearchBar { ...props.searchProps } />
                      <BootstrapTable 
                        keyField='dataField'
                        columns={columns}  
                        id = "data-table-ID"
                        tabIndexCell
                        responsive = {true}
                        defaultSortDirection="asc"
                        classes = "dt-responsive dataTable no-footer"
                        data={filteredManageShippingContainer} 
                        pagination={ paginationFactory(options) }
                        noDataIndication="No Records Found"
                        { ...props.baseProps }
                      />
                    </div>
                  )
                }
              </ToolkitProvider>
            </div>
          </div>
        </div>
      </div>

    

    </section>
    <Mainfooter />
  </div>
   
  )
}