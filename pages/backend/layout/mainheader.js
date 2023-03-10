import React from 'react';
import Link from 'next/link'
import logo from "../../assetsbackend/images/logo.png";
import one from "../../assetsbackend/images/myprofile2.png";
import { useRouter } from 'next/router'
import "../../_app2.js"







class Mainheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};
    
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user: user})
    
    
  }
  
  
  render() {
    return (
       
      <>
        <div class="header-sec">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-dark">
                  <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" class="img-fluid" alt="" /></a>  
                  <div class="mobilemenu" id="mobilemenu">
                    <span></span>
                  </div>
                  <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto navsecul-design" id="myNavbar"> 
                      
                      <li class="nav-item dropdown notifications">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                          <i class="la la-bell"></i>
                        </a>
                          <div class="dropdown-menu">
                            <div class="notifications-heading">
                              <h5>Notifications</h5><a href="#">Mark all as read</a>
                            </div> 
                            <ul>
                              <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></li>
                              <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></li>
                              <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></li>
                              <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></li>
                              <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</a></li>
                            </ul>                 
                            <div class="viewall">
                              <a href="#">View all notification</a>
                            </div>
                          </div>
                        </li>
                      <li class="nav-item dropdown profiledrop">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false">
                          <span>Tullopy</span><img src="assets/images/myprofile2.png" class="img-fluid" alt="" />
                        </a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">Dashboard</a>
                          <a class="dropdown-item" href="#">View Profile</a>
                          <a class="dropdown-item" href="#">Logout</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
      </>
    
    );
  }
}
  
export default Mainheader;
  