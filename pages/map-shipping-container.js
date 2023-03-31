/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import queryString from 'query-string';
import * as $ from 'jquery';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';




export default function SCVideoMaping() {
  
  const [inputField , setInputField] = useState({
    name: '',
    description: '',
    video: '',
  })

  const [videoList, setSCVideoList]=useState([])
  const [show, setShow] = useState(false);
  const [base_url, BaseUrl]=useState('')
  const [html, Sethtml] = useState('');
  const [checked, setChecked] = useState();
  const [filteredManageShippingContainer, setFilteredManageShippingContainer] = useState([]);
  const { SearchBar } = Search;
  const router = useRouter()

  useEffect(() => {
    SCVideoList()
    var table =  document.querySelector('#data-table-ID');
    table.classList.remove("table-bordered");
  }, [])
  
  // Get SC Video List .....
  async function SCVideoList() {
    const user = JSON.parse(localStorage.getItem('user'));
    let params = queryString.parse(location.search)
    if(user){
      var fd = new FormData();
      fd.append('video_id', params.id);
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-manage-sc-list',fd,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then( async (response)  => {
        const data = response.data;
        BaseUrl(response.data.base_url)
        setSCVideoList(Object.values(data.manage_sc))
        setFilteredManageShippingContainer(Object.values(data.manage_sc))
        // setTimeout(() => {
        //   Object.values(data.manage_sc).map((item , index)=>{
           
        //     if(Boolean(item.SCplacement_id)){ 
        //       if(document.getElementById(index)){
        //         document.getElementById(index).checked = true;
        //       }
        //     }
        //   })
        // }, 200);
        
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

  const inputsHandler = (index) =>{    
   
    var temp = [];
    filteredManageShippingContainer.forEach((value, i) => {
      if(i == index){
        value.SCplacement_id = '';
      }
      temp.push(value);
    });
    setFilteredManageShippingContainer(temp)
    console.log(filteredManageShippingContainer)
  }
 


  // Sc Video Uploaded Here......
  async function Submit(){
    const user = JSON.parse(localStorage.getItem('user'));
    let params = queryString.parse(location.search)
    var arr= []
    $('.checkboxs').each(function(index){
      if($('#'+index).is(':checked')){
        var checkedBoxes = $('#'+index).val();
        arr.push(checkedBoxes)
      }
    })
    let fd = new FormData();
    fd.append('SC_ID', arr)
    fd.append('Item_ID', params.id)  
    fd.append('Item_type', 'Video')  
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/map-shipping-container-video',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
      },
    }).then((response)  => {
      if(response.data.status == 204){
        notify("success", 'Unmap shipping container successfully')
       }else{
        notify("success", 'Map shipping container  successfully')
       }
     
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

  // Popup close ....
  function close(){
    setShow(false);
    Sethtml('')
  }

  // Datalist
   const columns = [
    {
      text: "#",
      dataField: 'Sc_ID', 
      headerStyle: { minWidth: '50px' },
      style: { width: '50px' },
      formatter: (cell, row, index) => <><input type="checkbox"  value={row.Sc_ID} defaultChecked={Boolean(row.SCplacement_id) } onChange={() => inputsHandler(index)} className="checkboxs" name="checkbox"  id={index}  /><label htmlFor={index}></label></>
    },
    {
      text: "Image",
      dataField: 'Featured_Image',
      headerStyle: { minWidth: '50px' },
      style: { width: '50px' },
      formatter: (cell, row) => <><div className="video_button"><img src={process.env.NEXT_PUBLIC_BASE_URL+'/public/'+row.Featured_Image} /></div></>,
    },
    {
      text: "Name",
      dataField: 'Name',
      sort: true,
      headerStyle: { minWidth: '150px' },
      style: { width: '150px' },
    },
    {
      text: "Description",
      dataField: 'Description',
      sort: true,
      style:{width : '504px'},
      headerStyle:{minWidth : '504px'}
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
              <h3>Map Shipping Container</h3>
            </div>
          </div>
        </div>
      </section>

      {/* For Videos List */}
      <div className="container" >
        <div className="row video_heading">
          <div className="col-md-6">
            <h2>Shipping Container List</h2>
          </div>
          <div className="col-md-6 text-right">
            
            {/* <button type="button" className="btn btn-info add_sc" onClick={divHandle}>Add Shipping Container</button> */}
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
                        keyField='id'
                        id = "data-table-ID"
                        classes = "dt-responsive dataTable no-footer"
                        columns={columns}  
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
            <div className="tablebtn text-right">
              <button type="button" className="btn btn-info" onClick={Submit} >Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      <div id="modal-row" className="modal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Shipping Container</h4>
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