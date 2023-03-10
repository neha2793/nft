/* pages/_app.js */
import * as ReactAll from "react";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import '../styles/globals.css'
import queryString from 'query-string';

// import './assetss/css/bootstrap.min.css';
// import './assetss/css/style.css';
// import './assetss/css/responsive.css';
// import './assetss/css/font-awesome.min.css';



import { ToastContainer } from "react-toastify";
import toast from "../components/Toast";
import "react-toastify/dist/ReactToastify.css";

// For Backend 


import "./assetsbackend/css/bootstrap.min.css"

import './assetsbackend/css/style.css';
import './assetsbackend/css/responsive.css';
import './assetsbackend/css/font-awesome.min.css';
import './assetsbackend/css/daterangepicker.css';
import './assetsbackend/css/line-awesome.min.css';






function MyApp({ Component, pageProps }) {

  const notify = ReactAll.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  
  return (
    <div>
      
      
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
   
      {/* <Mainfooter/> */}
    </div>
  )
}

export default MyApp