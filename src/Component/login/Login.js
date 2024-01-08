import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header';


function Login() {

  return (
    <div>
  {/* =====  LODER  ===== */}

  <div className="wrapper">
    {/* =====  HEADER START  ===== */}
    <Header/>
    {/* =====  HEADER END  ===== */}
    {/* =====  CONTAINER START  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 hidden-xs">
          <div id="category-menu" className="navbar collapse in  mb_40" aria-expanded="true" style={{}} role="button">
            <div className="nav-responsive">
              <ul className="nav  main-navigation collapse in">
                <li><a href="#">Pharmacy</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Vitamins</a></li>
                <li><a href="#">Sweating</a></li>
                <li><a href="#">Coughs &amp; Colds</a></li>
                <li><a href="#">Hair Loss</a></li>
                <li><a href="#">Weight Loss</a></li>
                <li><a href="#">Antifungals</a></li>
                <li><a href="#">Pain Relief</a></li>
                <li><a href="#">Stop Smoking</a></li>
                <li><a href="#">Skin Conditions</a></li>
                <li><a href="#">Top Brands</a></li>
              </ul>
            </div>
          </div>
          <div className="left_banner left-sidebar-widget mt_30 mb_40"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* contact  */}
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel-login">
                <div className="panel-heading">
                  <div className="row mb_20">
                    <div className="col-xs-6">
                      <a href="#" className="active" id="login-form-link">Login</a>
                    </div>
                    <div className="col-xs-6">
                      <a href="#" id="register-form-link">Register</a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="login-form" action="#" method="post">
                        <div className="form-group">
                          <input type="text" name="username" id="username1" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group text-center">
                          <input type="checkbox" tabIndex={3} className name="remember" id="remember" />
                          <label htmlFor="remember"> Remember Me</label>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                <a href="#" tabIndex={5} className="forgot-password">Forgot Password?</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <form id="register-form" action="#" method="post">
                        <div className="form-group">
                          <input type="text" name="username" id="username" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Email Address" defaultValue />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password2" tabIndex={2} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Register Now" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Single Blog  */}
  {/* End Blog   */}
  {/* =====  CONTAINER END  ===== */}
  {/* =====  FOOTER START  ===== */}
  
 <div className="footer pt_60">
    <div className="container">
      <div className="row">
        <div className="col-md-3 footer-block">
          <div className="content_footercms_right">
            <div className="footer-contact">
              <div className="footer-logo mb_40"> <NavLink to="/index2"> <img src="images/footer-logo.png" alt="HealthCare" /> </NavLink> </div>
              <ul>
                <li>B-14 Collins Street West Victoria 2386</li>
                <li>(+123) 456 789 - (+024) 666 888</li>
                <li>Contact@yourcompany.com</li>
              </ul>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-google" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-rss" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 footer-block">
          <h6 className="footer-title ptb_20">Categories</h6>
          <ul>
            <li><a href="#">Medicines</a></li>
            <li><a href="#">Healthcare</a></li>
            <li><a href="#">Mother &amp; Baby</a></li>
            <li><a href="#">Vitamins</a></li>
            <li><a href="#">Toiletries</a></li>
            <li><a href="#">Skincare</a></li>
          </ul>
        </div>
        <div className="col-md-2 footer-block">
          <h6 className="footer-title ptb_20">Information</h6>
          <ul>
            <li><NavLink to="/contactUs">Specials</NavLink></li>
            <li><a href="#">New Products</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Our Stores</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="col-md-2 footer-block">
          <h6 className="footer-title ptb_20">My Account</h6>
          <ul>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">My Orders</a></li>
            <li><a href="#">My Credit Slips</a></li>
            <li><a href="#">My Addresses</a></li>
            <li><a href="#">My Personal Info</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="ptb_20">SIGN UP OUR NEWSLETTER</h6>
          <p className="mt_10 mb_20">For get offers from our favorite brands &amp; get 20% off for next </p>
          <div className="form-group">
            <input className="mb_20" type="text" placeholder="Enter Your Email Address" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom mt_60 ptb_10">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="copyright-part">@ 2017 All Rights Reserved HealthCare</div>
          </div>
          <div className="col-sm-6">
            <div className="payment-icon text-right">
              <ul>
                <li><i className="fa fa-cc-paypal " /></li>
                <li><i className="fa fa-cc-stripe" /></li>
                <li><i className="fa fa-cc-visa" /></li>
                <li><i className="fa fa-cc-discover" /></li>
                <li><i className="fa fa-cc-mastercard" /></li>
                <li><i className="fa fa-cc-amex" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login