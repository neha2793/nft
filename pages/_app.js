/* pages/_app.js */
import * as ReactAll from "react";
import React, { useEffect, useState } from "react";
import '../styles/globals.css'
import './assetss/css/bootstrap.min.css';
import './assetss/css/style.css';
import './assetss/css/responsive.css';
import './assetss/css/font-awesome.min.css';

import { useRouter } from 'next/router'
import { ToastContainer } from "react-toastify";
import toast from "../components/Toast";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {

  const notify = ReactAll.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  const router = useRouter()
   
  useEffect(() => {
    // window.$ = window.jquery = require('jquery');
    // window.dt = require('datatables.net');
   
  }, [])
  
  return (
    <div>
       <React.StrictMode>
       <Component {...pageProps} />
       <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      </React.StrictMode>
      {/* <Mainfooter/> */}
      <script type="text/javascript"src="https://code.jquery.com/jquery-3.5.1.js"> </script>
      <script type="text/javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"> </script>
      <link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css" />

      <script src="./assets/js/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="./assets/js/bootstrap.min.js"></script>
      <script src='https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'></script>
      <script src='https://npmcdn.com/moralis/dist/moralis.js'></script>

    </div>
  )
}

export default MyApp