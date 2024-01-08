import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function CheckoutPage() {
   return (
    <div>
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
          <div className="left_banner left-sidebar-widget mb_50 mt_30"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="left-special left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Top Products</h2>
            </div>
            <div id="left-special" className="owl-carousel">
              <ul className="row ">
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product1.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product1-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product2.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product2-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="row ">
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product5.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product5-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="row ">
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product8.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product8-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="row ">
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product9.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product9-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product1.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product1-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating">
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                      </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="breadcrumb ptb_20">
            <h1>Shopping Cart</h1>
            <ul>
              <li><NavLink to="/index2">Home</NavLink></li>
              <li className="active">Shopping Cart</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="panel-group mt_20" id="accordion">
            <div className="panel panel-default  ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Step 1: Checkout Options <i className="fa fa-caret-down" /></a></h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3>New Customer</h3>
                      <p>Checkout Options:</p>
                      <div className="radio">
                        <label>
                          <input type="radio" defaultChecked="checked" defaultValue="register" name="account" /> Register Account</label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" defaultValue="guest" name="account" /> Guest Checkout</label>
                      </div>
                      <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                      <input type="button" className="btn mt_20" data-loading-text="Loading..." id="button-account" defaultValue="Continue" />
                    </div>
                    <div className="col-sm-6">
                      <h3>Returning Customer</h3>
                      <p>I am a returning customer</p>
                      <div className="form-group">
                        <label htmlFor="input-email" className="control-label">E-Mail</label>
                        <input type="text" className="form-control" id="input-email" placeholder="E-Mail" defaultValue name="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-password" className="control-label">Password</label>
                        <input type="password" className="form-control" id="input-password" placeholder="Password" defaultValue name="password" />
                        <input type="button" className="btn mt_20" data-loading-text="Loading..." id="button-login" defaultValue="Login" />
                        <a className="pt_30" href="#">Forgotten Password</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Step 2: Billing Details <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="radio">
                      <label>
                        <input type="radio" defaultChecked="checked" defaultValue="existing" name="payment_address" data-id="payment-existing" /> I want to use an existing address</label>
                    </div>
                    <div id="payment-existing">
                      <select className="form-control" name="address_id">
                        <option selected="selected" value={4}>dasd, adsasd, Al Hasakah, Syrian Arab Republic</option>
                      </select>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" defaultValue="new" name="payment_address" data-id="payment-new" /> I want to use a new address</label>
                    </div>
                    <br />
                    <div id="payment-new" style={{display: 'none'}}>
                      <div className="form-group required">
                        <label htmlFor="input-payment-firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-firstname" placeholder="First Name" defaultValue name="firstname" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-lastname" placeholder="Last Name" defaultValue name="lastname" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-payment-company" className="col-sm-2 control-label">Company</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-company" placeholder="Company" defaultValue name="company" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-address-1" className="col-sm-2 control-label">Address 1</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-address-1" placeholder="Address 1" defaultValue name="address_1" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-payment-address-2" className="col-sm-2 control-label">Address 2</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-address-2" placeholder="Address 2" defaultValue name="address_2" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-city" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-city" placeholder="City" defaultValue name="city" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-payment-postcode" className="col-sm-2 control-label">Post Code</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-postcode" placeholder="Post Code" defaultValue name="postcode" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-country" className="col-sm-2 control-label">Country</label>
                        <div className="col-sm-10">
                          <select className="form-control" id="input-payment-country" name="country_id">
                            <option value> --- Please Select --- </option>
                            <option value={244}>Aaland Islands</option>
                            <option value={1}>Afghanistan</option>
                            <option value={2}>Albania</option>
                            <option value={3}>Algeria</option>
                            <option value={4}>American Samoa</option>
                            <option value={5}>Andorra</option>
                            <option value={6}>Angola</option>
                            <option value={7}>Anguilla</option>
                            <option value={8}>Antarctica</option>
                            <option value={9}>Antigua and Barbuda</option>
                            <option value={10}>Argentina</option>
                            <option value={11}>Armenia</option>
                            <option value={12}>Aruba</option>
                            <option value={252}>Ascension Island (British)</option>
                            <option value={13}>Australia</option>
                            <option value={14}>Austria</option>
                            <option value={15}>Azerbaijan</option>
                            <option value={16}>Bahamas</option>
                            <option value={17}>Bahrain</option>
                            <option value={18}>Bangladesh</option>
                            <option value={19}>Barbados</option>
                            <option value={20}>Belarus</option>
                            <option value={21}>Belgium</option>
                            <option value={22}>Belize</option>
                            <option value={23}>Benin</option>
                            <option value={24}>Bermuda</option>
                            <option value={25}>Bhutan</option>
                            <option value={26}>Bolivia</option>
                            <option value={245}>Bonaire, Sint Eustatius and Saba</option>
                            <option value={27}>Bosnia and Herzegovina</option>
                            <option value={28}>Botswana</option>
                            <option value={29}>Bouvet Island</option>
                            <option value={30}>Brazil</option>
                            <option value={31}>British Indian Ocean Territory</option>
                            <option value={32}>Brunei Darussalam</option>
                            <option value={33}>Bulgaria</option>
                            <option value={34}>Burkina Faso</option>
                            <option value={35}>Burundi</option>
                            <option value={36}>Cambodia</option>
                            <option value={37}>Cameroon</option>
                            <option value={38}>Canada</option>
                            <option value={251}>Canary Islands</option>
                            <option value={39}>Cape Verde</option>
                            <option value={40}>Cayman Islands</option>
                            <option value={41}>Central African Republic</option>
                            <option value={42}>Chad</option>
                            <option value={43}>Chile</option>
                            <option value={44}>China</option>
                            <option value={45}>Christmas Island</option>
                            <option value={46}>Cocos (Keeling) Islands</option>
                            <option value={47}>Colombia</option>
                            <option value={48}>Comoros</option>
                            <option value={49}>Congo</option>
                            <option value={50}>Cook Islands</option>
                            <option value={51}>Costa Rica</option>
                            <option value={52}>Cote D'Ivoire</option>
                            <option value={53}>Croatia</option>
                            <option value={54}>Cuba</option>
                            <option value={246}>Curacao</option>
                            <option value={55}>Cyprus</option>
                            <option value={56}>Czech Republic</option>
                            <option value={237}>Democratic Republic of Congo</option>
                            <option value={57}>Denmark</option>
                            <option value={58}>Djibouti</option>
                            <option value={59}>Dominica</option>
                            <option value={60}>Dominican Republic</option>
                            <option value={61}>East Timor</option>
                            <option value={62}>Ecuador</option>
                            <option value={63}>Egypt</option>
                            <option value={64}>El Salvador</option>
                            <option value={65}>Equatorial Guinea</option>
                            <option value={66}>Eritrea</option>
                            <option value={67}>Estonia</option>
                            <option value={68}>Ethiopia</option>
                            <option value={69}>Falkland Islands (Malvinas)</option>
                            <option value={70}>Faroe Islands</option>
                            <option value={71}>Fiji</option>
                            <option value={72}>Finland</option>
                            <option value={74}>France, Metropolitan</option>
                            <option value={75}>French Guiana</option>
                            <option value={76}>French Polynesia</option>
                            <option value={77}>French Southern Territories</option>
                            <option value={126}>FYROM</option>
                            <option value={78}>Gabon</option>
                            <option value={79}>Gambia</option>
                            <option value={80}>Georgia</option>
                            <option value={81}>Germany</option>
                            <option value={82}>Ghana</option>
                            <option value={83}>Gibraltar</option>
                            <option value={84}>Greece</option>
                            <option value={85}>Greenland</option>
                            <option value={86}>Grenada</option>
                            <option value={87}>Guadeloupe</option>
                            <option value={88}>Guam</option>
                            <option value={89}>Guatemala</option>
                            <option value={256}>Guernsey</option>
                            <option value={90}>Guinea</option>
                            <option value={91}>Guinea-Bissau</option>
                            <option value={92}>Guyana</option>
                            <option value={93}>Haiti</option>
                            <option value={94}>Heard and Mc Donald Islands</option>
                            <option value={95}>Honduras</option>
                            <option value={96}>Hong Kong</option>
                            <option value={97}>Hungary</option>
                            <option value={98}>Iceland</option>
                            <option value={99}>India</option>
                            <option value={100}>Indonesia</option>
                            <option value={101}>Iran (Islamic Republic of)</option>
                            <option value={102}>Iraq</option>
                            <option value={103}>Ireland</option>
                            <option value={254}>Isle of Man</option>
                            <option value={104}>Israel</option>
                            <option value={105}>Italy</option>
                            <option value={106}>Jamaica</option>
                            <option value={107}>Japan</option>
                            <option value={257}>Jersey</option>
                            <option value={108}>Jordan</option>
                            <option value={109}>Kazakhstan</option>
                            <option value={110}>Kenya</option>
                            <option value={111}>Kiribati</option>
                            <option value={113}>Korea, Republic of</option>
                            <option value={253}>Kosovo, Republic of</option>
                            <option value={114}>Kuwait</option>
                            <option value={115}>Kyrgyzstan</option>
                            <option value={116}>Lao People's Democratic Republic</option>
                            <option value={117}>Latvia</option>
                            <option value={118}>Lebanon</option>
                            <option value={119}>Lesotho</option>
                            <option value={120}>Liberia</option>
                            <option value={121}>Libyan Arab Jamahiriya</option>
                            <option value={122}>Liechtenstein</option>
                            <option value={123}>Lithuania</option>
                            <option value={124}>Luxembourg</option>
                            <option value={125}>Macau</option>
                            <option value={127}>Madagascar</option>
                            <option value={128}>Malawi</option>
                            <option value={129}>Malaysia</option>
                            <option value={130}>Maldives</option>
                            <option value={131}>Mali</option>
                            <option value={132}>Malta</option>
                            <option value={133}>Marshall Islands</option>
                            <option value={134}>Martinique</option>
                            <option value={135}>Mauritania</option>
                            <option value={136}>Mauritius</option>
                            <option value={137}>Mayotte</option>
                            <option value={138}>Mexico</option>
                            <option value={139}>Micronesia, Federated States of</option>
                            <option value={140}>Moldova, Republic of</option>
                            <option value={141}>Monaco</option>
                            <option value={142}>Mongolia</option>
                            <option value={242}>Montenegro</option>
                            <option value={143}>Montserrat</option>
                            <option value={144}>Morocco</option>
                            <option value={145}>Mozambique</option>
                            <option value={146}>Myanmar</option>
                            <option value={147}>Namibia</option>
                            <option value={148}>Nauru</option>
                            <option value={149}>Nepal</option>
                            <option value={150}>Netherlands</option>
                            <option value={151}>Netherlands Antilles</option>
                            <option value={152}>New Caledonia</option>
                            <option value={153}>New Zealand</option>
                            <option value={154}>Nicaragua</option>
                            <option value={155}>Niger</option>
                            <option value={156}>Nigeria</option>
                            <option value={157}>Niue</option>
                            <option value={158}>Norfolk Island</option>
                            <option value={112}>North Korea</option>
                            <option value={159}>Northern Mariana Islands</option>
                            <option value={160}>Norway</option>
                            <option value={161}>Oman</option>
                            <option value={162}>Pakistan</option>
                            <option value={163}>Palau</option>
                            <option value={247}>Palestinian Territory, Occupied</option>
                            <option value={164}>Panama</option>
                            <option value={165}>Papua New Guinea</option>
                            <option value={166}>Paraguay</option>
                            <option value={167}>Peru</option>
                            <option value={168}>Philippines</option>
                            <option value={169}>Pitcairn</option>
                            <option value={170}>Poland</option>
                            <option value={171}>Portugal</option>
                            <option value={172}>Puerto Rico</option>
                            <option value={173}>Qatar</option>
                            <option value={174}>Reunion</option>
                            <option value={175}>Romania</option>
                            <option value={176}>Russian Federation</option>
                            <option value={177}>Rwanda</option>
                            <option value={178}>Saint Kitts and Nevis</option>
                            <option value={179}>Saint Lucia</option>
                            <option value={180}>Saint Vincent and the Grenadines</option>
                            <option value={181}>Samoa</option>
                            <option value={182}>San Marino</option>
                            <option value={183}>Sao Tome and Principe</option>
                            <option value={184}>Saudi Arabia</option>
                            <option value={185}>Senegal</option>
                            <option value={243}>Serbia</option>
                            <option value={186}>Seychelles</option>
                            <option value={187}>Sierra Leone</option>
                            <option value={188}>Singapore</option>
                            <option value={189}>Slovak Republic</option>
                            <option value={190}>Slovenia</option>
                            <option value={191}>Solomon Islands</option>
                            <option value={192}>Somalia</option>
                            <option value={193}>South Africa</option>
                            <option value={194}>South Georgia &amp; South Sandwich Islands</option>
                            <option value={248}>South Sudan</option>
                            <option value={195}>Spain</option>
                            <option value={196}>Sri Lanka</option>
                            <option value={249}>St. Barthelemy</option>
                            <option value={197}>St. Helena</option>
                            <option value={250}>St. Martin (French part)</option>
                            <option value={198}>St. Pierre and Miquelon</option>
                            <option value={199}>Sudan</option>
                            <option value={200}>Suriname</option>
                            <option value={201}>Svalbard and Jan Mayen Islands</option>
                            <option value={202}>Swaziland</option>
                            <option value={203}>Sweden</option>
                            <option value={204}>Switzerland</option>
                            <option selected="selected" value={205}>Syrian Arab Republic</option>
                            <option value={206}>Taiwan</option>
                            <option value={207}>Tajikistan</option>
                            <option value={208}>Tanzania, United Republic of</option>
                            <option value={209}>Thailand</option>
                            <option value={210}>Togo</option>
                            <option value={211}>Tokelau</option>
                            <option value={212}>Tonga</option>
                            <option value={213}>Trinidad and Tobago</option>
                            <option value={255}>Tristan da Cunha</option>
                            <option value={214}>Tunisia</option>
                            <option value={215}>Turkey</option>
                            <option value={216}>Turkmenistan</option>
                            <option value={217}>Turks and Caicos Islands</option>
                            <option value={218}>Tuvalu</option>
                            <option value={219}>Uganda</option>
                            <option value={220}>Ukraine</option>
                            <option value={221}>United Arab Emirates</option>
                            <option value={222}>United Kingdom</option>
                            <option value={223}>United States</option>
                            <option value={224}>United States Minor Outlying Islands</option>
                            <option value={225}>Uruguay</option>
                            <option value={226}>Uzbekistan</option>
                            <option value={227}>Vanuatu</option>
                            <option value={228}>Vatican City State (Holy See)</option>
                            <option value={229}>Venezuela</option>
                            <option value={230}>Viet Nam</option>
                            <option value={231}>Virgin Islands (British)</option>
                            <option value={232}>Virgin Islands (U.S.)</option>
                            <option value={233}>Wallis and Futuna Islands</option>
                            <option value={234}>Western Sahara</option>
                            <option value={235}>Yemen</option>
                            <option value={238}>Zambia</option>
                            <option value={239}>Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-zone" className="col-sm-2 control-label">Region / State</label>
                        <div className="col-sm-10">
                          <select className="form-control" id="input-payment-zone" name="zone_id">
                            <option value> --- Please Select --- </option>
                            <option selected="selected" value={3121}>Al Hasakah</option>
                            <option value={3122}>Al Ladhiqiyah</option>
                            <option value={3123}>Al Qunaytirah</option>
                            <option value={3124}>Ar Raqqah</option>
                            <option value={3125}>As Suwayda</option>
                            <option value={3126}>Dara</option>
                            <option value={3127}>Dayr az Zawr</option>
                            <option value={3128}>Dimashq</option>
                            <option value={3129}>Halab</option>
                            <option value={3130}>Hamah</option>
                            <option value={3131}>Hims</option>
                            <option value={3132}>Idlib</option>
                            <option value={3133}>Rif Dimashq</option>
                            <option value={3134}>Tartus</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="buttons clearfix">
                      <div className="pull-right">
                        <input type="button" className="btn" data-loading-text="Loading..." id="button-payment-address" defaultValue="Continue" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Step 3: Delivery Details <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="radio">
                      <label>
                        <input type="radio" defaultChecked="checked" defaultValue="existing" name="shipping_address" /> I want to use an existing address</label>
                    </div>
                    <div id="shipping-existing">
                      <select className="form-control" name="address_id">
                        <option selected="selected" value={4}>adsasd, Al Hasakah, Syrian Arab Republic</option>
                      </select>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" defaultValue="new" name="shipping_address" /> I want to use a new address</label>
                    </div>
                    <br />
                    <div id="shipping-new" style={{display: 'none'}}>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-firstname" placeholder="First Name" defaultValue name="firstname" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-lastname" placeholder="Last Name" defaultValue name="lastname" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-shipping-company" className="col-sm-2 control-label">Company</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-company" placeholder="Company" defaultValue name="company" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-address-1" className="col-sm-2 control-label">Address 1</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-address-1" placeholder="Address 1" defaultValue name="address_1" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-shipping-address-2" className="col-sm-2 control-label">Address 2</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-address-2" placeholder="Address 2" defaultValue name="address_2" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-city" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-city" placeholder="City" defaultValue name="city" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-shipping-postcode" className="col-sm-2 control-label">Post Code</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-postcode" placeholder="Post Code" defaultValue={123456} name="postcode" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-country" className="col-sm-2 control-label">Country</label>
                        <div className="col-sm-10">
                          <select className="form-control" id="input-shipping-country" name="country_id">
                            <option value> --- Please Select --- </option>
                            <option value={244}>Aaland Islands</option>
                            <option value={1}>Afghanistan</option>
                            <option value={2}>Albania</option>
                            <option value={3}>Algeria</option>
                            <option value={4}>American Samoa</option>
                            <option value={5}>Andorra</option>
                            <option value={6}>Angola</option>
                            <option value={7}>Anguilla</option>
                            <option value={8}>Antarctica</option>
                            <option value={9}>Antigua and Barbuda</option>
                            <option value={10}>Argentina</option>
                            <option value={11}>Armenia</option>
                            <option value={12}>Aruba</option>
                            <option value={252}>Ascension Island (British)</option>
                            <option value={13}>Australia</option>
                            <option value={14}>Austria</option>
                            <option value={15}>Azerbaijan</option>
                            <option value={16}>Bahamas</option>
                            <option value={17}>Bahrain</option>
                            <option value={18}>Bangladesh</option>
                            <option value={19}>Barbados</option>
                            <option value={20}>Belarus</option>
                            <option value={21}>Belgium</option>
                            <option value={22}>Belize</option>
                            <option value={23}>Benin</option>
                            <option value={24}>Bermuda</option>
                            <option value={25}>Bhutan</option>
                            <option value={26}>Bolivia</option>
                            <option value={245}>Bonaire, Sint Eustatius and Saba</option>
                            <option value={27}>Bosnia and Herzegovina</option>
                            <option value={28}>Botswana</option>
                            <option value={29}>Bouvet Island</option>
                            <option value={30}>Brazil</option>
                            <option value={31}>British Indian Ocean Territory</option>
                            <option value={32}>Brunei Darussalam</option>
                            <option value={33}>Bulgaria</option>
                            <option value={34}>Burkina Faso</option>
                            <option value={35}>Burundi</option>
                            <option value={36}>Cambodia</option>
                            <option value={37}>Cameroon</option>
                            <option value={38}>Canada</option>
                            <option value={251}>Canary Islands</option>
                            <option value={39}>Cape Verde</option>
                            <option value={40}>Cayman Islands</option>
                            <option value={41}>Central African Republic</option>
                            <option value={42}>Chad</option>
                            <option value={43}>Chile</option>
                            <option value={44}>China</option>
                            <option value={45}>Christmas Island</option>
                            <option value={46}>Cocos (Keeling) Islands</option>
                            <option value={47}>Colombia</option>
                            <option value={48}>Comoros</option>
                            <option value={49}>Congo</option>
                            <option value={50}>Cook Islands</option>
                            <option value={51}>Costa Rica</option>
                            <option value={52}>Cote D'Ivoire</option>
                            <option value={53}>Croatia</option>
                            <option value={54}>Cuba</option>
                            <option value={246}>Curacao</option>
                            <option value={55}>Cyprus</option>
                            <option value={56}>Czech Republic</option>
                            <option value={237}>Democratic Republic of Congo</option>
                            <option value={57}>Denmark</option>
                            <option value={58}>Djibouti</option>
                            <option value={59}>Dominica</option>
                            <option value={60}>Dominican Republic</option>
                            <option value={61}>East Timor</option>
                            <option value={62}>Ecuador</option>
                            <option value={63}>Egypt</option>
                            <option value={64}>El Salvador</option>
                            <option value={65}>Equatorial Guinea</option>
                            <option value={66}>Eritrea</option>
                            <option value={67}>Estonia</option>
                            <option value={68}>Ethiopia</option>
                            <option value={69}>Falkland Islands (Malvinas)</option>
                            <option value={70}>Faroe Islands</option>
                            <option value={71}>Fiji</option>
                            <option value={72}>Finland</option>
                            <option value={74}>France, Metropolitan</option>
                            <option value={75}>French Guiana</option>
                            <option value={76}>French Polynesia</option>
                            <option value={77}>French Southern Territories</option>
                            <option value={126}>FYROM</option>
                            <option value={78}>Gabon</option>
                            <option value={79}>Gambia</option>
                            <option value={80}>Georgia</option>
                            <option value={81}>Germany</option>
                            <option value={82}>Ghana</option>
                            <option value={83}>Gibraltar</option>
                            <option value={84}>Greece</option>
                            <option value={85}>Greenland</option>
                            <option value={86}>Grenada</option>
                            <option value={87}>Guadeloupe</option>
                            <option value={88}>Guam</option>
                            <option value={89}>Guatemala</option>
                            <option value={256}>Guernsey</option>
                            <option value={90}>Guinea</option>
                            <option value={91}>Guinea-Bissau</option>
                            <option value={92}>Guyana</option>
                            <option value={93}>Haiti</option>
                            <option value={94}>Heard and Mc Donald Islands</option>
                            <option value={95}>Honduras</option>
                            <option value={96}>Hong Kong</option>
                            <option value={97}>Hungary</option>
                            <option value={98}>Iceland</option>
                            <option value={99}>India</option>
                            <option value={100}>Indonesia</option>
                            <option value={101}>Iran (Islamic Republic of)</option>
                            <option value={102}>Iraq</option>
                            <option value={103}>Ireland</option>
                            <option value={254}>Isle of Man</option>
                            <option value={104}>Israel</option>
                            <option value={105}>Italy</option>
                            <option value={106}>Jamaica</option>
                            <option value={107}>Japan</option>
                            <option value={257}>Jersey</option>
                            <option value={108}>Jordan</option>
                            <option value={109}>Kazakhstan</option>
                            <option value={110}>Kenya</option>
                            <option value={111}>Kiribati</option>
                            <option value={113}>Korea, Republic of</option>
                            <option value={253}>Kosovo, Republic of</option>
                            <option value={114}>Kuwait</option>
                            <option value={115}>Kyrgyzstan</option>
                            <option value={116}>Lao People's Democratic Republic</option>
                            <option value={117}>Latvia</option>
                            <option value={118}>Lebanon</option>
                            <option value={119}>Lesotho</option>
                            <option value={120}>Liberia</option>
                            <option value={121}>Libyan Arab Jamahiriya</option>
                            <option value={122}>Liechtenstein</option>
                            <option value={123}>Lithuania</option>
                            <option value={124}>Luxembourg</option>
                            <option value={125}>Macau</option>
                            <option value={127}>Madagascar</option>
                            <option value={128}>Malawi</option>
                            <option value={129}>Malaysia</option>
                            <option value={130}>Maldives</option>
                            <option value={131}>Mali</option>
                            <option value={132}>Malta</option>
                            <option value={133}>Marshall Islands</option>
                            <option value={134}>Martinique</option>
                            <option value={135}>Mauritania</option>
                            <option value={136}>Mauritius</option>
                            <option value={137}>Mayotte</option>
                            <option value={138}>Mexico</option>
                            <option value={139}>Micronesia, Federated States of</option>
                            <option value={140}>Moldova, Republic of</option>
                            <option value={141}>Monaco</option>
                            <option value={142}>Mongolia</option>
                            <option value={242}>Montenegro</option>
                            <option value={143}>Montserrat</option>
                            <option value={144}>Morocco</option>
                            <option value={145}>Mozambique</option>
                            <option value={146}>Myanmar</option>
                            <option value={147}>Namibia</option>
                            <option value={148}>Nauru</option>
                            <option value={149}>Nepal</option>
                            <option value={150}>Netherlands</option>
                            <option value={151}>Netherlands Antilles</option>
                            <option value={152}>New Caledonia</option>
                            <option value={153}>New Zealand</option>
                            <option value={154}>Nicaragua</option>
                            <option value={155}>Niger</option>
                            <option value={156}>Nigeria</option>
                            <option value={157}>Niue</option>
                            <option value={158}>Norfolk Island</option>
                            <option value={112}>North Korea</option>
                            <option value={159}>Northern Mariana Islands</option>
                            <option value={160}>Norway</option>
                            <option value={161}>Oman</option>
                            <option value={162}>Pakistan</option>
                            <option value={163}>Palau</option>
                            <option value={247}>Palestinian Territory, Occupied</option>
                            <option value={164}>Panama</option>
                            <option value={165}>Papua New Guinea</option>
                            <option value={166}>Paraguay</option>
                            <option value={167}>Peru</option>
                            <option value={168}>Philippines</option>
                            <option value={169}>Pitcairn</option>
                            <option value={170}>Poland</option>
                            <option value={171}>Portugal</option>
                            <option value={172}>Puerto Rico</option>
                            <option value={173}>Qatar</option>
                            <option value={174}>Reunion</option>
                            <option value={175}>Romania</option>
                            <option value={176}>Russian Federation</option>
                            <option value={177}>Rwanda</option>
                            <option value={178}>Saint Kitts and Nevis</option>
                            <option value={179}>Saint Lucia</option>
                            <option value={180}>Saint Vincent and the Grenadines</option>
                            <option value={181}>Samoa</option>
                            <option value={182}>San Marino</option>
                            <option value={183}>Sao Tome and Principe</option>
                            <option value={184}>Saudi Arabia</option>
                            <option value={185}>Senegal</option>
                            <option value={243}>Serbia</option>
                            <option value={186}>Seychelles</option>
                            <option value={187}>Sierra Leone</option>
                            <option value={188}>Singapore</option>
                            <option value={189}>Slovak Republic</option>
                            <option value={190}>Slovenia</option>
                            <option value={191}>Solomon Islands</option>
                            <option value={192}>Somalia</option>
                            <option value={193}>South Africa</option>
                            <option value={194}>South Georgia &amp; South Sandwich Islands</option>
                            <option value={248}>South Sudan</option>
                            <option value={195}>Spain</option>
                            <option value={196}>Sri Lanka</option>
                            <option value={249}>St. Barthelemy</option>
                            <option value={197}>St. Helena</option>
                            <option value={250}>St. Martin (French part)</option>
                            <option value={198}>St. Pierre and Miquelon</option>
                            <option value={199}>Sudan</option>
                            <option value={200}>Suriname</option>
                            <option value={201}>Svalbard and Jan Mayen Islands</option>
                            <option value={202}>Swaziland</option>
                            <option value={203}>Sweden</option>
                            <option value={204}>Switzerland</option>
                            <option selected="selected" value={205}>Syrian Arab Republic</option>
                            <option value={206}>Taiwan</option>
                            <option value={207}>Tajikistan</option>
                            <option value={208}>Tanzania, United Republic of</option>
                            <option value={209}>Thailand</option>
                            <option value={210}>Togo</option>
                            <option value={211}>Tokelau</option>
                            <option value={212}>Tonga</option>
                            <option value={213}>Trinidad and Tobago</option>
                            <option value={255}>Tristan da Cunha</option>
                            <option value={214}>Tunisia</option>
                            <option value={215}>Turkey</option>
                            <option value={216}>Turkmenistan</option>
                            <option value={217}>Turks and Caicos Islands</option>
                            <option value={218}>Tuvalu</option>
                            <option value={219}>Uganda</option>
                            <option value={220}>Ukraine</option>
                            <option value={221}>United Arab Emirates</option>
                            <option value={222}>United Kingdom</option>
                            <option value={223}>United States</option>
                            <option value={224}>United States Minor Outlying Islands</option>
                            <option value={225}>Uruguay</option>
                            <option value={226}>Uzbekistan</option>
                            <option value={227}>Vanuatu</option>
                            <option value={228}>Vatican City State (Holy See)</option>
                            <option value={229}>Venezuela</option>
                            <option value={230}>Viet Nam</option>
                            <option value={231}>Virgin Islands (British)</option>
                            <option value={232}>Virgin Islands (U.S.)</option>
                            <option value={233}>Wallis and Futuna Islands</option>
                            <option value={234}>Western Sahara</option>
                            <option value={235}>Yemen</option>
                            <option value={238}>Zambia</option>
                            <option value={239}>Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-zone" className="col-sm-2 control-label">Region / State</label>
                        <div className="col-sm-10">
                          <select className="form-control" id="input-shipping-zone" name="zone_id">
                            <option value> --- Please Select --- </option>
                            <option selected="selected" value={3121}>Al Hasakah</option>
                            <option value={3122}>Al Ladhiqiyah</option>
                            <option value={3123}>Al Qunaytirah</option>
                            <option value={3124}>Ar Raqqah</option>
                            <option value={3125}>As Suwayda</option>
                            <option value={3126}>Dara</option>
                            <option value={3127}>Dayr az Zawr</option>
                            <option value={3128}>Dimashq</option>
                            <option value={3129}>Halab</option>
                            <option value={3130}>Hamah</option>
                            <option value={3131}>Hims</option>
                            <option value={3132}>Idlib</option>
                            <option value={3133}>Rif Dimashq</option>
                            <option value={3134}>Tartus</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="buttons clearfix">
                      <div className="pull-right">
                        <input type="button" className="btn" data-loading-text="Loading..." id="button-shipping-address" defaultValue="Continue" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsefour">Step 4: Delivery Method  <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapsefour" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>Please select the preferred shipping method to use on this order.</p>
                  <p><strong>Flat Rate</strong></p>
                  <div className="radio">
                    <label>
                      <input type="radio" defaultChecked="checked" defaultValue="flat.flat" name="shipping_method" /> Flat Shipping Rate - $5.00</label>
                  </div>
                  <p><strong>Add Comments About Your Order</strong></p>
                  <p>
                    <textarea className="form-control" rows={8} name="comment" defaultValue={""} />
                  </p>
                  <div className="buttons">
                    <div className="pull-right">
                      <input type="button" className="btn mt_20" data-loading-text="Loading..." id="button-shipping-method" defaultValue="Continue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsefive">Step 5: Payment Method  <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapsefive" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>Please select the preferred payment method to use on this order.</p>
                  <div className="radio">
                    <label>
                      <input type="radio" defaultChecked="checked" defaultValue="cod" name="payment_method" /> Cash On Delivery </label>
                  </div>
                  <p><strong>Add Comments About Your Order</strong></p>
                  <p>
                    <textarea className="form-control" rows={8} name="comment" defaultValue={""} />
                  </p>
                  <div className="buttons">
                    <div className="pull-right mt_20">I have read and agree to the <a className="agree" href="#"><b>Terms &amp; Conditions</b></a>
                      <input type="checkbox" defaultValue={1} name="agree" /> &nbsp;
                      <input type="button" className="btn" data-loading-text="Loading..." id="button-payment-method" defaultValue="Continue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsesix">Step 6: Confirm Order <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapsesix" className="panel-collapse collapse">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <td className="text-left">Product Name</td>
                          <td className="text-left">Model</td>
                          <td className="text-right">Quantity</td>
                          <td className="text-right">Unit Price</td>
                          <td className="text-right">Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left"><a href="http://localhost/opc001/index.php?route=product/product&product_id=46">Sony VAIO</a></td>
                          <td className="text-left">Product 19</td>
                          <td className="text-right">1</td>
                          <td className="text-right">$1,000.00</td>
                          <td className="text-right">$1,000.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="text-right" colSpan={4}><strong>Sub-Total:</strong></td>
                          <td className="text-right">$1,000.00</td>
                        </tr>
                        <tr>
                          <td className="text-right" colSpan={4}><strong>Flat Shipping Rate:</strong></td>
                          <td className="text-right">$5.00</td>
                        </tr>
                        <tr>
                          <td className="text-right" colSpan={4}><strong>Total:</strong></td>
                          <td className="text-right">$1,005.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="buttons">
                    <div className="pull-right">
                      <input type="button" data-loading-text="Loading..." className="btn" id="button-confirm" defaultValue="Confirm Order" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="brand_carouse" className="ptb_30 text-center">
        <div className="type-01">
          <div className="heading-part mb_20 ">
            <h2 className="main_title">Brand Logo</h2>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="brand owl-carousel ptb_20">
                <div className="item text-center"> <a href="#"><img src="images/brand/brand1.png" alt="Disney" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand2.png" alt="Dell" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand3.png" alt="Harley" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand4.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand5.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand6.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand7.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand8.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="images/brand/brand9.png" alt="Canon" className="img-responsive" /></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* =====  CONTAINER END  ===== */}
    {/* =====  FOOTER START  ===== */}
   <Footer/>
    {/* =====  FOOTER END  ===== */}
  </div>
</div>

    
    </div>
  )
}

export default CheckoutPage