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


export default function MapMSCVideo() {
  
  const [inputField , setInputField] = useState({
    Name: '',
    Description: '',
    Featured_Image: ''
  })

  const { SearchBar } = Search;
  const [ManageSCList, setManageSCList]=useState([])
  const [base_url, BaseUrl]=useState('')
  const [filteredMapManageShippingContainer, setFilteredMapManageShippingContainer] = useState([]);

  const router = useRouter()
  useEffect(() => {
    MSCVideoList()
    var table =  document.querySelector('#data-table-ID');
    table.classList.remove("table-bordered");
  }, [])

  const inputsHandler = (index) =>{    
    
    var temp = [];
    filteredMapManageShippingContainer.forEach((value, i) => {
      if(i == index){
        value.SCplacement_id = '';
      }
      temp.push(value);
    });
    setFilteredMapManageShippingContainer(temp)
  }

 


  // Get SC Video List .....
  async function MSCVideoList() {
    const user = JSON.parse(localStorage.getItem('user'));
    let params = queryString.parse(location.search)

    if(user){
      var fd = new FormData();
      fd.append('item_id', params.id);
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-manage-sc-list',fd , {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then((response)  => {
        const data = response.data;
        BaseUrl(response.data.base_url)
       
        setManageSCList(Object.values(data.manage_sc))  
        setFilteredMapManageShippingContainer(Object.values(data.manage_sc))
        setTimeout(() => {
          Object.values(data.manage_sc).map((item , index)=>{
            if(Boolean(item.SCplacement_id)){
              if( document.getElementById(index)){
                document.getElementById(index).checked = true;
              }
            }
          })
        }, 200);
       
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

  // Datalist
   const columns = [
    {
      text: "#",
      dataField: 'Sc_ID',
      headerStyle: { minWidth: '50px' },
      style: { width: '50px' },
      formatter: (cell, row, index) => <><input type="checkbox" defaultChecked={Boolean(row.SCplacement_id) } onChange={() => inputsHandler(index)} className="checkboxs" name="checkbox"   value={row.Sc_ID}  id={index}  /><label htmlFor={index}></label></>
    },
    {
      text: "Image",
      dataField: 'Featured_Image',
      formatter: (cell, row) => <><div className="video_button"><img src={process.env.NEXT_PUBLIC_BASE_URL+'/public/'+row.Featured_Image} /></div></>,
      headerStyle: { minWidth: '50px' },
      style: { width: '50px' },
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
   };

  

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
    fd.append('Item_type', 'Product')  
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/map-manage-shipping-container',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+user.access_token
      },
    }).then((response)  => {
      if(response.data.status == 204){
        notify("success", 'Unmap shipping container successfully')
       }else{
        notify("success", 'Map shipping container successfully')
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
      <div className="container"  >
        <div className="row video_heading">
          <div className="col-md-6">
            <h2>Shipping Container List</h2>
          </div>
         
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive datatables-design">
              <ToolkitProvider
                  keyField="id"
                  data={ filteredMapManageShippingContainer }
                  columns={ columns }
                  search
                >
                {
                  props => (
                    <div> 
                      <SearchBar { ...props.searchProps } />
                      <BootstrapTable 
                        keyField='id'
                        columns={columns}  
                        id = "data-table-ID"
                        classes = "dt-responsive dataTable no-footer"
                        data={filteredMapManageShippingContainer} 
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

    

    </section>
    <Mainfooter />
  </div>
   
  )
}