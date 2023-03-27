import React from 'react';
import Link from 'next/link'
class Mainfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user: user})
  }

  CheckApproval(e){
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user.user.is_verified == 1 ){
      e.preventDefault()
      alert('You do not have permission to access this option!')
    }
  }
  render() {
    return (
      <>
      <footer className="footer-sec">
 <div className="footer1"></div>
 <div className="footer2"></div>

  <div className="container">
     <img src="assets/images/violet-ball.png" className="img-fluid ball1" alt=""/>
  <img src="assets/images/orange-ball.png" className="img-fluid ball2" alt=""/>
  <img src="assets/images/orange-ball.png" className="img-fluid ball3" alt=""/>
  <img src="assets/images/violet-ball.png" className="img-fluid ball4" alt=""/>
  <img src="assets/images/violet-ball.png" className="img-fluid ball5" alt=""/>
  <img src="assets/images/orange-ball.png" className="img-fluid ball6" alt=""/>
    <div className="row">
     <div className="col-md-4">
      <div className="footer-brand">
      <a className="footer-logo" href="/"><img src="assets/images/logo.png" className="img-fluid" alt=""/></a>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor</p>
      </div>
     </div>
     <div className="col-md-2">
      <div className="footer-nav">
        <h2>Search</h2>
        <ul>
          <li style={{ display: this.state.user ? "block" : "none" }}>
         
            {/* <Link href="/create-nft" >
              <a>Create Your NFT</a>
            </Link> */}
            {/* <Link href="/all-nft" >
              <a>All NFTs</a>
            </Link> */}
          
            {/* <a href="#">All NFTs</a> */}
          </li>
          <li style={{ display: this.state.user ? "block" : "none" }}>
            <a href="/slime-seat-management"  >
              Slime Seat
            </a>
          </li>

          <li style={{ display: this.state.user ? "block" : "none" }}>
         
            <a href="/shipping-container-video"  >
              SC Video
            </a>
          </li> 
          <li style={{ display: this.state.user ? "block" : "none" }}>
            <Link href="/transaction-history" >
              <a>Transaction History</a>
            </Link>
          </li>

        </ul>
      </div>
     </div>
     <div className="col-md-2">
      <div className="footer-nav">
        <h2>About Us</h2>
        <ul>
          <li style={{ display: this.state.user ? "block" : "none" }}>
            {/* <Link href="/my-nft" >
              <a>My NFTs</a>
            </Link> */}
          </li>
          <li><a href="https://2kpaid.com/app/public/about">About</a></li>
          <li><a href="https://2kpaid.com/app/public/contact">Contact</a></li>
          <li><a href="faq">FAQ</a></li>
        </ul>
      </div>
     </div>
     <div className="col-md-4">
      <div className="footer-nav">
        <h2>Join Our Community </h2>
        <ul className="social-link">
        <li>
        <a href="#">
        <i className="fa fa-facebook"></i>
        </a>
        </li>
        <li>
        <a href="#">
        <i className="fa fa-twitter"></i>
        </a>
        </li>
        <li>
        <a href="#">
        <i className="fa fa-google-plus"></i>
        </a>
        </li>
        <li>
        <a href="#">
        <i className="fa fa-youtube"></i>
        </a>
        </li>
        <li>
        <a href="#">
        <i className="fa fa-instagram"></i>
        </a>
        </li>
        </ul>
      </div>
     </div>
    </div>
  </div>
  <footer className="copyright-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <p>Copyright 2023</p>
          </div>
          <div className="col-md-7">
            <ul>
              <li><a href="https://2kpaid.com/app/public/privacy_policy">Privacy Policy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="https://2kpaid.com/app/public/term_of_use">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
</footer>

      </>
    );
  }
}

export default Mainfooter;
