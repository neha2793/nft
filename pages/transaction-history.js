/* pages/create-nft.js */
import * as React from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from "../components/Toast";
import { useEffect, useState , useRef} from 'react'

import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';







export default function TransactionHistory() {
  
  const { SearchBar } = Search;
  const router = useRouter()
  const dataFetchedRef = useRef(false);
  const [FilteredTransactionHostory, setFilteredTransactionHostory] = useState([]);
  const [Flag, setFlag] = useState(false);

 
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    GetTransactionHistory()
    var table =  document.querySelector('#data-table-ID');
    table.classList.remove("table-bordered");

  }, [FilteredTransactionHostory])

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

  // Datalist
  const columns = [
    {
      text: "#",
      dataField: 'id',
      formatter: (cell, row, index) => index+1,
      
    },
    {
      text:  "Transaction ID",
      dataField: 'Transaction_Token',
      sort: true,
      headerStyle: { minWidth: '120px' },
      style: { width: '120px' },
      formatter: (cell, row) => row.Transaction_Token
    },
    {
      text: "Name",
      dataField: 'name',
      sort: true,
      headerStyle: { minWidth: '150px' },
      style: { width: '150px' },
      formatter: (cell, row) => row.name
    },
    {
      text: "Matic Price",
      dataField: 'T_Amount',
      sort: true,
      headerStyle: { minWidth: '90px' },
      formatter: (cell, row) => row.T_Amount+'Matic'
    },
    {
      text: "USD Price",
      dataField: 'USDPrice',
      sort: true,
      headerStyle: { minWidth: '90px' },
      formatter: (cell, row) =>row.USDPrice? '$ '+row.USDPrice.toFixed(7): 'Not Found'
    },
    {
      text: "Status",
      dataField: 'Status',
      sort: true,
      formatter: (cell, row) => row.Status
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
              <ToolkitProvider
                  keyField="id"
                  data={ FilteredTransactionHostory }
                  columns={ columns }
                  search
                >
                  {
                    props => (
                      <div> 
                        <SearchBar { ...props.searchProps }
                        />
                        <BootstrapTable 
                          keyField='id'
                          id = "data-table-ID"
                          classes = "dt-responsive dataTable no-footer"
                          columns={columns} 
                          data={FilteredTransactionHostory} 
                          pagination={ paginationFactory(options) }
                          noDataIndication={ "No Records Found"}
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
