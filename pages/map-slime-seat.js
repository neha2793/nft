/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState, useRef } from 'react'
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';
import queryString from 'query-string';

export default function SlimeSeatMaping() {
  
  const [show, setShow] = useState(false);
  const [html, Sethtml] = useState('');
  const [filteredSlimeSeat, setFilteredSlimeSeat] = useState([]);
  const router = useRouter()
  const dataFetchedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    MapSlimeSeatList()
  }, [])

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
  async function MapSlimeSeatList() {
   
    const user = JSON.parse(localStorage.getItem('user'));
    let params = queryString.parse(location.search)
    if(user){
      var fd = new FormData();
      fd.append('slime_seat', params.id);
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-manage-sc-list',fd,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.access_token
        },
      }).then( async (response)  => {
        const data = response.data;
        setFilteredSlimeSeat(Object.values(data.manage_sc))
        setIsLoading(false)
        setTimeout(() => {
          Object.values(data.manage_sc).map((item , index)=>{
            if(Boolean(item.SCplacement_id)){ 
              if(document.getElementById(index)){
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

  // Sc Video Uploaded Here......
  async function Submit(){
    const user = JSON.parse(localStorage.getItem('user'));
    let params = queryString.parse(location.search)
    var arr= []
    $('.checkboxs').each(function(index){
      console.log(index)
      if($('#'+index).is(':checked')){
        var checkedBoxes = $('#'+index).val();
        arr.push(checkedBoxes)
      }
    })
    let fd = new FormData();
    fd.append('SC_ID', arr)
    fd.append('Item_ID', params.id)  
    fd.append('Item_type', 'Slime Seat')  
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_BASE_URL+'/api/map-slime-seat',
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

  const inputsHandler = (index) =>{    

    var temp = [];
    filteredSlimeSeat.forEach((value, i) => {
      if(i == index){
        value.SCplacement_id = '';
      }
      temp.push(value);
    });
    setFilteredSlimeSeat(temp)

  }




  // Popup close ....
  function close(){
    setShow(false);
    Sethtml('')
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
              <table id="data-table-ID" className="table dt-responsive dataTable no-footer">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
              
                  {filteredSlimeSeat?
                  filteredSlimeSeat.map(( listValue, index ) => {
                    return (
                      
                      <tr key={index}>
                        <td style={{width: '50px'}}><input type="checkbox" defaultChecked={Boolean(listValue.SCplacement_id) } onChange={() => inputsHandler(index)} className="checkboxs" name="checkbox"   value={listValue.Sc_ID}  id={index}  /><label htmlFor={index}></label></td>
                        <td style={{width: '50px'}}>
                          <div className="video_button">
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'/public/'+listValue.Featured_Image} />
                          </div>
                        </td>
                        <td style={{width: '150px'}}> {listValue.Name}</td>
                        <td style={{width: '504px'}}>{listValue.Description}</td>
                      
                      </tr>
                      
                    );
                  }):''}
                </tbody>
              </table>
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