/* pages/dashboard.js */
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import MainheaderBackend from './layout/mainheader';
// import Mainfooter from './components/layout/mainfooter';

import * as $ from 'jquery';


export default function CreatorDashboardBackend() {


    // const addBodyClass = className => document.body.classList.add('br');
    useEffect(() => {
        document.body.classList.add('top-image');



        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        console.log(width)
        const divEl = document.querySelector('#top-image');
        divEl.mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
      },[''])

    return (
        <div>
            <MainheaderBackend />


           

            
            <div class="sidebar">
            <ul>
                <li><a href="index.html" class="active"><i class="la la-user-o"></i>Dashboard</a></li>
                <li><a href="myorders.html"><i class="la la-shopping-cart"></i>My Orders</a></li>
                <li><a href="transactions.html"><i class="la la-history"></i>Transaction History</a></li>
                <li><a href="notifications.html"><i class="la la-bell"></i>Notifications</a></li>
            </ul>
            </div>


            <div class="main">
            <div class="container-fluid">

                <div class="row mb-4">
                <div class="col-md-12">
                <h2 class="pagename">Dashboard Overview</h2>
                </div>
                </div>

                <div class="row">
                <div class="col-md-4">
                    <div class="dashboard-card dashboardbg1">
                    <img src="assets/images/card1.png" class="img-fluid" alt="" />
                    <h2>154</h2>
                    <h3>Total Orders</h3>
                    </div>
                </div> 
                <div class="col-md-4">
                    <div class="dashboard-card dashboardbg2">
                    <img src="assets/images/card2.png" class="img-fluid" alt="" />
                    <h2>25</h2>
                    <h3>Total NFT Claimed</h3>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="dashboard-card dashboardbg3">
                    <img src="assets/images/card3.png" class="img-fluid" alt="" />
                    <h2>25</h2>
                    <h3>Pending NFT</h3>
                    </div>
                </div> 
                </div>

                <div class="row chartbox">
                <div class="col-md-8">
                    <div class="tabs-box">
                    <div class="widget-title">
                    <h4>Total NFT Sales</h4>
                    
                    </div>
                    <div class="widget-content"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <canvas id="earning_chart" style={{display: 'block;', width: '504px;', height: '252px;'}} class="chartjs-render-monitor" width="504" height="252"></canvas>
                
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="tabs-box notificationsbx">
                    <div class="widget-title">
                    <h4>Notifications</h4>
                    <div class="tabsnotification">
                        <ul class="notification-list">
                        <li class="notification-item">
                            <span class="user-avatar">
                            <img src="assets/images/avatar.png" class="img-fluid" alt="" />
                            </span>
                            <label class="notification-companyname">Tullopy</label>
                            <a href="#" class="userread">You have claimed your NFT</a>
                            <div class="notification-meta">
                            <small class="timestamp"><span>11 days</span><span>2 hours</span></small>
                            </div>
                        </li>
                        <li class="notification-item">
                            <span class="user-avatar">
                            <img src="assets/images/avatar.png" class="img-fluid" alt="" />
                            </span>
                            <label class="notification-companyname">Tullopy</label>
                            <a href="#" class="userread">You have claimed your NFT</a>
                            <div class="notification-meta">
                            <small class="timestamp"><span>11 days</span><span>2 hours</span></small>
                            </div>
                        </li>
                        <li class="notification-item">
                            <span class="user-avatar">
                            <img src="assets/images/avatar.png" class="img-fluid" alt="" />
                            </span>
                            <label class="notification-companyname">Tullopy</label>
                            <a href="#" class="userread">You have claimed your NFT</a>
                            <div class="notification-meta">
                            <small class="timestamp"><span>11 days</span><span>2 hours</span></small>
                            </div>
                        </li>
                        <li class="notification-item">
                            <span class="user-avatar">
                            <img src="assets/images/avatar.png" class="img-fluid" alt="" />
                            </span>
                            <label class="notification-companyname">Tullopy</label>
                            <a href="#" class="userread">You have claimed your NFT</a>
                            <div class="notification-meta">
                            <small class="timestamp"><span>11 days</span><span>2 hours</span></small>
                            </div>
                        </li>
                        
                        </ul>
                        <a href="#" class="notification-item-all">View all</a>
                    </div>
                    
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
            
        </div>
    )

}