import React from 'react'
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer';

// import Header from '../header/Header';

function Index2() {
  let navigate = useNavigate();
  return (
   <div>

  <div className="wrapper">
    <div id="subscribe-me" className="modal animated fade in" role="dialog" data-keyboard="true" tabIndex={-1}>
      <div className="newsletter-popup">
        <img className="offer" src="images/newsbg.jpg" alt="offer" />
        <div className="newsletter-popup-static newsletter-popup-top">
          <div className="popup-text">
            <div className="popup-title">50% <span>off</span></div>
            <div className="popup-desc">
              <div>Sign up and get 50% off your next Order</div>
            </div>
          </div>
          <form method="post">
            <div className="form-group required">
              <input type="email" name="email-popup" id="email-popup" placeholder="Enter Your Email" className="form-control input-lg" required />
              <button type="submit" className="btn btn-default btn-lg" id="email-popup-submit">Subscribe</button>
              <label className="checkme">
                <input type="checkbox" defaultValue id="checkme" />Dont show again</label>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* =====  HEADER START  ===== */}
    <header id="header">
  <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <ul className="header-top-left">
            <li className="language dropdown"> <span className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"> <img src="images/English-icon.gif" alt="img" /> English <span className="caret" /> </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#"><img src="images/English-icon.gif" alt="img" /> English</a></li>
                <li><a href="#"><img src="images/French-icon.gif" alt="img" /> French</a></li>
                <li><a href="#"><img src="images/German-icon.gif" alt="img" /> German</a></li>
              </ul>
            </li>
            <li className="currency dropdown"> <span className="dropdown-toggle" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"> USD <span className="caret" /> </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                <li><a href="#">USD</a></li>
                <li><a href="#">EUR</a></li>
                <li><a href="#">AUD</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="header-top-right text-right">
          
            <li className="account"><NavLink to="/login">My Account</NavLink></li>
            <li className="sitemap"><a href="#">Sitemap</a></li>
            <li className="cart"><NavLink to="/checkoutPage">My Cart</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header">
    <div className="container">
      <nav className="navbar">
        <div className="navbar-header mtb_20"> <NavLink className="navbar-brand" to="/index2"> <img alt="HealthCared" src="images/logo.png" /> </NavLink> </div>
        <div className="header-right pull-right mtb_50">
          <button className="navbar-toggle pull-left" type="button" data-toggle="collapse" data-target=".js-navbar-collapse"> <span className="i-bar"><i className="fa fa-bars" /></span></button>
          <div className="shopping-icon">
            <div className="cart-item " data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true" role="button">Item's : <span className="cart-qty">02</span></div>
            <div id="cart-dropdown" className="cart-menu collapse">
              <ul>
                <li>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td className="text-center"><a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a></td>
                        <td className="text-left product-name"><a href="#">MacBook Pro</a>
                          <span className="text-left price">$120.00</span>
                          <input className="cart-qty" name="product_quantity" min={1} defaultValue={1} type="number" />
                        </td>
                        <td className="text-center"><a className="close-cart"><i className="fa fa-times-circle" /></a></td>
                      </tr>
                      <tr>
                        <td className="text-center"><a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a></td>
                        <td className="text-left product-name"><a href="#">MacBook Pro</a>
                          <span className="text-left price">$20.00</span>
                          <input className="cart-qty" name="product_quantity" min={1} defaultValue={1} type="number" />
                        </td>
                        <td className="text-center"><a className="close-cart"><i className="fa fa-times-circle" /></a></td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-right"><strong>Sub-Total</strong></td>
                        <td className="text-right">$2,100.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                        <td className="text-right">$2.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>VAT (20%)</strong></td>
                        <td className="text-right">$20.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>Total</strong></td>
                        <td className="text-right">$2,122.00</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <form onSubmit={() => navigate("/cartPage")} >
                    <input className="btn pull-left mt_10" defaultValue="View cart" type="submit" />
                  </form>
                  <form  onSubmit={() => navigate("/checkoutPage")} >
                    <input className="btn pull-right mt_10" defaultValue="Checkout" type="submit" />
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-search pull-right">
            <div className="search-overlay">
              {/* Close Icon */}
              <a href="javascript:void(0)" className="search-overlay-close" />
              {/* End Close Icon */}
              <div className="container">
                {/* Search Form */}
                <form role="search" id="searchform" action="http://html.lionode.com/search" method="get">
                  <label className="h5 normal search-input-label">Enter keywords To Search Entire Store</label>
                  <input defaultValue name="q" placeholder="Search here..." type="search" />
                  <button type="submit" />
                </form>
                {/* End Search Form */}
              </div>
            </div>
            <div className="header-search"> <a id="search-overlay-btn" /> </div>
          </div>
        </div>
        <div className="collapse navbar-collapse js-navbar-collapse pull-right">
          <ul id="menu" className="nav navbar-nav">
            <li> <NavLink to="/index2">Home</NavLink></li>
            <li> <NavLink to="/categoryPage">Shop</NavLink></li>
            <li> <NavLink to="/blogPage">Blog</NavLink></li>
            <li className="dropdown mega-dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Collection </a>
              <ul className="dropdown-menu mega-dropdown-menu row">
                <li className="col-md-3">
                  <ul>
                    <li className="dropdown-header">Women's</li>
                    <li><a href="#">Unique Features</a></li>
                    <li><a href="#">Image Responsive</a></li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Newsletter Form</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Good Typography</a></li>
                  </ul>
                </li>
                <li className="col-md-3">
                  <ul>
                    <li className="dropdown-header">Man's</li>
                    <li><a href="#">Unique Features</a></li>
                    <li><a href="#">Image Responsive</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Newsletter Form</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Good Typography</a></li>
                  </ul>
                </li>
                <li className="col-md-3">
                  <ul>
                    <li className="dropdown-header">Children's</li>
                    <li><a href="#">Unique Features</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Image Responsive</a></li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Newsletter Form</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Good Typography</a></li>
                  </ul>
                </li>
                <li className="col-md-3">
                  <ul>
                    <li id="myCarousel" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="item active"> <a href="#"><img src="images/menu-banner1.jpg" className="img-responsive" alt="Banner1" /></a></div>
                        {/* End Item */}
                        <div className="item"> <a href="#"><img src="images/menu-banner2.jpg" className="img-responsive" alt="Banner1" /></a></div>
                        {/* End Item */}
                        <div className="item"> <a href="#"><img src="images/menu-banner3.jpg" className="img-responsive" alt="Banner1" /></a></div>
                        {/* End Item */}
                      </div>
                      {/* End Carousel Inner */}
                    </li>
                    {/* /.carousel */}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages </a>
              <ul className="dropdown-menu">
                <li> <NavLink to="/contactUs">Contact us</NavLink></li>
                <li> <NavLink to="/cartPage">Cart</NavLink></li>
                <li> <NavLink to="/checkoutPage">Checkout</NavLink></li>
                <li> <NavLink to="/productDetailPage">Product Detail Page</NavLink></li>
                <li> <NavLink to="/singleBlog">Single Post</NavLink></li>
              </ul>
            </li>
            <li> <NavLink to="/about">About us</NavLink></li>
          </ul>
        </div>
        {/* /.nav-collapse */}
      </nav>
    </div>
  </div>
  <div className="header-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-3">
          <div className="category">
            <div className="menu-bar" data-target="#category-menu,#category-menu-responsive" data-toggle="collapse" aria-expanded="true" role="button">
              <h4 className="category_text">Top category</h4>
              <span className="i-bar"><i className="fa fa-bars" /></span></div>
          </div>
          <div id="category-menu-responsive" className="navbar collapse " aria-expanded="true" style={{}} role="button">
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
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9">
          <div className="header-bottom-right offers">
            <div className="marquee"><span><i className="fa fa-circle" aria-hidden="true" />It's Sexual Health Week!</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Our 5 Tips for a Healthy Summer</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Sugar health at risk?</span>
              <span><i className="fa fa-circle" aria-hidden="true" />The Olay Ranges - What do they do?</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Body fat - what is it and why do we need it?</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Can a pillow help you to lose weight?</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    {/* =====  HEADER END  ===== */}
    {/* =====  CONTAINER START  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <div id="category-menu" className="navbar collapse mb_40 hidden-sm-down in" aria-expanded="true" style={{}} role="button">
            <div className="nav-responsive">
              <ul className="nav  main-navigation collapse in ">
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
          <div className="left_banner left-sidebar-widget mt_30 mb_50"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="left-cms left-sidebar-widget mb_50">
            <ul>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Shipping" />
                  <h6>Free Shipping</h6>
                  <p>Free delivery worldwide</p>
                </div>
              </li>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Order" />
                  <h6>Order Online</h6>
                  <p>Hours : 8am - 11pm</p>
                </div>
              </li>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Save" />
                  <h6>Shop And Save</h6>
                  <p>For All Spices &amp; Herbs</p>
                </div>
              </li>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Safe" />
                  <h6>Safe Shoping</h6>
                  <p>Ensure genuine 100%</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="left-special left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Top Products</h2>
            </div>
            <div id="left-special" className="owl-carousel">
              <ul className="row ">
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product9.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product9-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10-1.jpg" /> </NavLink> </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="left_banner left-sidebar-widget mb_50"> <a href="#"><img src="images/left2.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="Testimonial left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Testimonial</h2>
            </div>
            <div className="client owl-carousel text-center pt_10">
              <div className="item client-detail">
                <div className="client-avatar"> <img alt src="images/user1.jpg" /> </div>
                <div className="client-title  mt_30"><strong>joseph Lui</strong></div>
                <div className="client-designation mb_10">php Developer</div>
                <p><i className="fa fa-quote-left" aria-hidden="true" />Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
              </div>
              <div className="item client-detail">
                <div className="client-avatar"> <img alt src="images/user2.jpg" /> </div>
                <div className="client-title  mt_30"><strong>joseph Lui</strong></div>
                <div className="client-designation mb_10">php Developer</div>
                <p><i className="fa fa-quote-left" aria-hidden="true" />Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
              </div>
              <div className="item client-detail">
                <div className="client-avatar"> <img alt src="images/user3.jpg" /> </div>
                <div className="client-title  mt_30"><strong>joseph Lui</strong></div>
                <div className="client-designation mb_10">php Developer</div>
                <p><i className="fa fa-quote-left" aria-hidden="true" />Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
              </div>
            </div>
          </div>
          <div className="Tags left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Tags</h2>
            </div>
            <ul>
              <li><a href="#">business</a></li>
              <li><a href="#">clean</a></li>
              <li><a href="#">corporate</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">creative</a></li>
              <li><a href="#">ecommerce</a></li>
              <li><a href="#">modern</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">retina</a></li>
              <li><a href="#">multipurpose</a></li>
              <li><a href="#">photography</a></li>
              <li><a href="#">responsive</a></li>
            </ul>
          </div>
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="banner">
            <div className="main-banner owl-carousel">
              <div className="item"><a href="#"><img src="images/main_banner1.jpg" alt="Main Banner" className="img-responsive" /></a></div>
              <div className="item"><a href="#"><img src="images/main_banner1.jpg" alt="Main Banner" className="img-responsive" /></a></div>
            </div>
          </div>
          {/* =====  BANNER END  ===== */}
          {/* =====  SUB BANNER  STRAT ===== */}
          <div className="row">
            <div className="cms_banner mt_10">
              <div className="col-xs-6 col-sm-12 col-md-6 mt_20">
                <div id="subbanner1" className="sub-hover"> <a href="#"><img src="images/sub1.jpg" alt="Sub Banner1" className="img-responsive" /></a>
                  <div className="bannertext">
                    <h2>Full HD Camera</h2>
                    <p className="mt_10">Different Resolutions</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-12 col-md-6 mt_20">
                <div id="subbanner2" className="sub-hover"> <a href="#"><img src="images/sub2.jpg" alt="Sub Banner2" className="img-responsive" /></a>
                  <div className="bannertext">
                    <h2>smart watches</h2>
                    <p className="mt_10">Most Popular Brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =====  SUB BANNER END  ===== */}
          {/* =====  PRODUCT TAB  ===== */}
          <div id="product-tab" className="mt_40">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Home Electronics</h2>
            </div>
            <ul className="nav text-right">
              <li className="active"> <a href="#nArrivals" data-toggle="tab">New Arrivals</a> </li>
              <li><a href="#Bestsellers" data-toggle="tab">Bestsellers</a> </li>
              <li><a href="#Featured" data-toggle="tab">Featured</a> </li>
            </ul>
            <div className="tab-content clearfix box">
              <div className="tab-pane active" id="nArrivals">
                <div className="nArrivals owl-carousel">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product2-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product3.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product3-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product4-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product5-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product6-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product7-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product8-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product9.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product9-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product10.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product10-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="Bestsellers">
                <div className="Bestsellers owl-carousel">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product2-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product3.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product3-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product4-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product5-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product6-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product7-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product8-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product9.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product9-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product10.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product10-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="Featured">
                <div className="Featured owl-carousel">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product2-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product3.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product3-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product4-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product5-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product7-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product8-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product9.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product9-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product10.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product10-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                        <div className="caption product-detail text-left">
                          <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =====  PRODUCT TAB  END ===== */}
          {/* =====  SUB BANNER  STRAT ===== */}
          <div className="row">
            <div className="cms_banner mt_40 mb_50">
              <div className="col-xs-12">
                <div id="subbanner3" className="banner sub-hover"> <a href="#"><img src="images/sub3.jpg" alt="Sub Banner3" className="img-responsive" /></a> </div>
              </div>
            </div>
          </div>
          {/* =====  SUB BANNER END  ===== */}
          {/* =====  sale product  ===== */}
          <div id="sale-product">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Home Electronics</h2>
            </div>
            <div className="Specials owl-carousel">
              <div className="item product-layout product-list">
                <div className="product-thumb">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product8-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className="product-desc mt_20"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                    <div className="timer mt_80">
                      <div className="days" />
                      <div className="hours" />
                      <div className="minutes" />
                      <div className="seconds" />
                    </div>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                      <div className="compare"><a href="#"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item product-layout product-list">
                <div className="product-thumb">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product7-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className="product-desc mt_20"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                    <div className="timer mt_80">
                      <div className="days" />
                      <div className="hours" />
                      <div className="minutes" />
                      <div className="seconds" />
                    </div>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                      <div className="compare"><a href="#"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item product-layout product-list">
                <div className="product-thumb">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product6-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className="product-desc mt_20"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                    <div className="timer mt_80">
                      <div className="days" />
                      <div className="hours" />
                      <div className="minutes" />
                      <div className="seconds" />
                    </div>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                      <div className="compare"><a href="#"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =====  sale product end ===== */}
          {/* =====  SUB BANNER  STRAT ===== */}
          <div className="row">
            <div className="cms_banner mt_60 mb_50">
              <div className="col-xs-12">
                <div id="subbanner4" className="banner sub-hover"> <a href="#"><img src="images/sub4.jpg" alt="Sub Banner4" className="img-responsive" /></a>
                  <div className="bannertext"> </div>
                </div>
              </div>
            </div>
          </div>
          {/* =====  SUB BANNER END  ===== */}
          {/* =====  product ===== */}
          <div className="row">
            <div className="col-md-4">
              <div className="heading-part mb_20 ">
                <h2 className="main_title">Featured</h2>
              </div>
              <div id="featu-pro" className="owl-carousel">
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product5.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product5-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-part mb_20 ">
                <h2 className="main_title">Bestseller</h2>
              </div>
              <div id="bests-pro" className="owl-carousel">
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product2.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product2-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product8.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product8-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product2.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product2-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product3-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-part mb_20 ">
                <h2 className="main_title">New Item’s</h2>
              </div>
              <div id="new-pro" className="owl-carousel">
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product4-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product6-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product7-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product9.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product9-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10-1.jpg" /> </NavLink> </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name"><a href="#">Latin literature from 45 BC, making it over old.</a></h6>
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
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
                        <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* =====  product end  ===== */}
          {/* =====  Blog ===== */}
          <div id="Blog" className="mt_40">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Latest from the Blog</h2>
            </div>
            <div className="blog-contain box">
              <div className="blog owl-carousel ">
                <div className="item">
                  <div className="box-holder">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_01.jpg" alt="HealthCare" /> </a> </div>
                    <div className="post-info mtb_20 ">
                      <h6 className="mb_10 text-uppercase"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h6>
                      <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                      <div className="date-time">
                        <div className="day"> 11</div>
                        <div className="month">Aug</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box-holder">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_02.jpg" alt="HealthCare" /> </a></div>
                    <div className="post-info mtb_20 ">
                      <h6 className="mb_10 text-uppercase"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h6>
                      <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                      <div className="date-time">
                        <div className="day"> 11</div>
                        <div className="month">Aug</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box-holder">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_03.jpg" alt="HealthCare" /> </a></div>
                    <div className="post-info mtb_20 ">
                      <h6 className="mb_10 text-uppercase"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h6>
                      <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                      <div className="date-time">
                        <div className="day"> 11</div>
                        <div className="month">Aug</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box-holder">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_04.jpg" alt="HealthCare" /> </a></div>
                    <div className="post-info mtb_20 ">
                      <h6 className="mb_10 text-uppercase"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h6>
                      <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                      <div className="date-time">
                        <div className="day"> 11</div>
                        <div className="month">Aug</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box-holder">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_05.jpg" alt="HealthCare" /> </a></div>
                    <div className="post-info mtb_20 ">
                      <h6 className="mb_10 text-uppercase"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h6>
                      <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                      <div className="date-time">
                        <div className="day"> 11</div>
                        <div className="month">Aug</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box-holder">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_06.jpg" alt="HealthCare" /> </a></div>
                    <div className="post-info mtb_20 ">
                      <h6 className="mb_10 text-uppercase"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h6>
                      <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                      <div className="date-time">
                        <div className="day"> 11</div>
                        <div className="month">Aug</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =====  Blog end ===== */}
          </div>
        </div>
      </div>
    </div>
    {/* =====  CONTAINER END  ===== */}
     {/* =====  FOOTER START  ===== */}

     <Footer />

     {/* =====  FOOTER END  ===== */}

</div>
</div>

  )
}

export default Index2;