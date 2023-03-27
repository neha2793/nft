import React from 'react';
import Link from 'next/link'
import { Navigate } from "react-router-dom";



class Mainheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      redirect: ''
    };
   
  }
  componentDidMount() {
    
    
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user: user})
    
  }
  
  Logout(){
    const user = JSON.parse(localStorage.getItem('user'));
    var base_url = window.location.origin;
    console.log(base_url+'/login')

    if(user){
      localStorage.removeItem("user");
      window.location.replace(base_url+'/login');     
    }
  }
 

  profileTab(e){
    e.stopPropagation();
    var nfttb = document.querySelector('#nft-tb')
    if(nfttb.classList.contains('active-tab')){
      nfttb.classList.remove("active-tab");
    }
    var profile = document.querySelector('#profile-tb')
    if(profile.classList.contains('active-tab')){
      profile.classList.remove("active-tab");
    }else{
      profile.classList.add("active-tab");
    }

  }
  nftTab(e){
    e.stopPropagation();

    var profile = document.querySelector('#profile-tb')
    if(profile.classList.contains('active-tab')){
      profile.classList.remove("active-tab");
    }
    var nfttb = document.querySelector('#nft-tb')
    if(nfttb.classList.contains('active-tab')){
      nfttb.classList.remove("active-tab");
    }else{
      nfttb.classList.add("active-tab");
    }
  }

  CheckApproval(e){
   
    const user = JSON.parse(localStorage.getItem('user'));
    
    if(user.user.is_verified == 0 || user.user.is_verified == 2){
      e.preventDefault()
      alert('You do not have permission to access this option!')
    }
  }



  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    return (
      <>
       <header className="header-sec">
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
    <nav className="navbar navbar-expand-lg navbar-dark">
    <Link href="/" >
      <a className="navbar-brand" ><img src = "assets/images/logo.png" className="img-fluid" alt=""/></a>
    </Link>
   
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ml-auto" id="myNavbar">
        
        {/* <li className="nav-item">
          <a className="nav-link" href="#">discover</a>
        </li> */}
        <li className="nav-item">
          {
            this.state.user ? 
            (
             ''
            ) : (
              <Link href="/login" >
                <a className="nav-link" >Create Your NFT</a>
              </Link>
            )
          }
         
        
        </li> 
        {/* <li className="nav-item" style={{ display: this.state.user ? "block" : "none" }}>
         
          <Link href="/purchased-nfts" >
            <a className="nav-link" >Purchased NFTs</a>
          </Link>
        </li>  */}
        <li className="nav-item" style={{ display: this.state.user ? "block" : "none" }}>
          <a href="/shipping-container" className="nav-link"  >
            Shipping Container
          </a>
        </li>
        <li className="nav-item" style={{ display: this.state.user ? "block" : "none" }}>
          <Link href="/all-nft" >
            <a className="nav-link">Explore</a>
          </Link>
        </li>

        <li className="nav-item dropdown dropdown-d" style={{ display: this.state.user ? "block" : "none" }}>
          
          <a className="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown">
            {/* <img src="assets/images/1.jpg" className="img-fluid" alt=""/><span>Nick</span> */}
            <img src={this.state.user ? this.state.user.user.profile_image != null ? this.state.user.base_url+'/public/'+this.state.user.user.profile_image :'assets/images/user.png' : 'assets/images/user.png'} className="img-fluid" alt=""/><span>{this.state.user ? this.state.user.user.name : ''}</span>
          </a>
          
          {/* <div className="dropdown-menu">
            <Link href="/my-profile"><a className="dropdown-item" href="#">My Profile</a></Link>
            <a className="dropdown-item" href="#" onClick={this.Logout}>Log out</a>
          </div> */}
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">My Profile</a>
            <ul>
              <li onClick={this.profileTab} ><a className="dropdown-item" href="#"><i className="fa fa-user" aria-hidden="true"></i>Profile info<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul id="profile-tb" className='' style={{display:'none'}}>
                  <li><a className="dropdown-item" href="/view-profile">Profile View</a></li>
                  <li><Link href="/my-profile"><a className="dropdown-item" href="#">Profile Edit</a></Link></li>
                </ul>
              </li>
              <li onClick={(e) => {this.nftTab(e)}} ><a className="dropdown-item"  href="#"><img src="assets/images/nft.png"></img>My NFTs<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul  id="nft-tb" style={{display:'none'}}>
                  <li><a className="dropdown-item" href='/create-nft' onClick={this.CheckApproval}>Create NFT</a></li>
                  <li><a className="dropdown-item" href="/my-nft" >Minted</a></li>
                  <li><a className="dropdown-item" href="/purchased-nfts">Purchased</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</a></li>
            </ul>
            <a className="dropdown-item" href="#" onClick={this.Logout}>Log out</a>
          </div>
        </li>    

      </ul>
    </div>  

    </nav>
    </div>
    </div>
    </div>
    
</header>
      </>
    );
  }
}

export default Mainheader;
