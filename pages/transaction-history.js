/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState , useRef} from 'react'

import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';

export default function TransactionHistory() {
  
  const router = useRouter()
  const dataFetchedRef = useRef(false);
  const [FilteredTransactionHostory, setFilteredTransactionHostory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    GetTransactionHistory()
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

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function setData(data, USDPrice){
    Object.values(data).forEach(async (value, index) => {
      value.USDPrice = value.T_Amount * USDPrice;
    });
    return data;
  }

  // Get SC Video List .....
  async function GetTransactionHistory() {

  
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      try{
        var response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-transaction-history', {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user.access_token
          },
        }) 
        const data = await response.data; 

        const perUSDPrice = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+1) 
        var dataWithUSD = await setData(data.data, perUSDPrice.data.USD)
        console.log(dataWithUSD)
        setFilteredTransactionHostory(dataWithUSD);
        setIsLoading(false)
      }catch(error) {
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
      }
    }else{
      router.push('/login')
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
              <h3>Transaction History</h3>
            </div>
          </div>
        </div>
      </section>


      {/* For Slime seat  List */}
      <div className="container" >
        <div className="row video_heading">
          <div className="col-md-6">
            <h2>Transaction History list</h2>
          </div>
          <div className="col-md-6 text-right">
            
            {/* <button type="button" className="btn btn-info add_sc" >Add Slime Seat Management</button> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive datatables-design">  
              <table id="data-table-ID" className="table dt-responsive dataTable no-footer">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Matic Price</th>
                    <th>Usd Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
              
                  {FilteredTransactionHostory?
                  FilteredTransactionHostory.map(( listValue, index ) => {
                    return (
                      
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td style={{width: '120px', minWidth:'120px' }}>{listValue.Transaction_Token}</td>
                        <td style={{width: '150px', minWidth:'150px'}}>{listValue.name}</td>
                        <td style={{minWidth: '90px'}}> {listValue.T_Amount+'Matic'}</td>
                        <td style={{minWidth: '90px'}}> {listValue.USDPrice? '$ '+listValue.USDPrice.toFixed(7): 'Not Found'}</td>
                        <td >{listValue.Status}</td>
                      
                      </tr>
                      
                    );
                  }):''}
                </tbody>
              </table>
             
               
            </div>
          </div>
        </div>
      </div>
    </section>
    <Mainfooter />
  </div>
   
  )
}
