import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function CartPage() {
  return (
    
   <div>
  {/* =====  LODER  ===== */}
  <div className="wrapper">
    {/*   =====  HEADER START  ===== */}
  <Header />
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
              </ul>
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
                      <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10.jpg" /> <img className="img-responsive" title="iPod Classic" alt="iPod Classic" src="images/product/product10-1.jpg" /> </NavLink
                      > </div>
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
          <form encType="multipart/form-data" method="post" action="#">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a></td>
                    <td className="text-left"><NavLink to="/product">iPhone</NavLink></td>
                    <td className="text-left">product 11</td>
                    <td className="text-left">
                      <div style={{maxWidth: 200}} className="input-group btn-block">
                        <input type="text" className="form-control quantity" size={1} defaultValue={1} name="quantity" />
                        <span className="input-group-btn">
                          <button className="btn" title data-toggle="tooltip" type="submit" data-original-title="Update"><i className="fa fa-refresh" /></button>
                          <button className="btn btn-danger" title data-toggle="tooltip" type="button" data-original-title="Remove"><i className="fa fa-times-circle" /></button>
                        </span></div>
                    </td>
                    <td className="text-right">$254.00</td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <h3 className="mtb_10">What would you like to do next?</h3>
          <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
          <div className="panel-group mt_20" id="accordion">
            <div className="panel panel-default pull-left">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Use Coupon Code <i className="fa fa-caret-down" /></a></h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <label htmlFor="input-coupon" className="col-sm-4 control-label">Enter your coupon here</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="input-coupon" placeholder="Enter your coupon here" defaultValue name="coupon" />
                    <span className="input-group-btn">
                      <input type="button" className="btn" data-loading-text="Loading..." id="button-coupon" defaultValue="Apply Coupon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default pull-left">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Use Gift Voucher <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                  <label htmlFor="input-voucher" className="col-sm-4 control-label">Enter your gift voucher code here</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="input-voucher" placeholder="Enter your gift voucher code here" defaultValue name="voucher" />
                    <span className="input-group-btn">
                      <input type="button" className="btn" data-loading-text="Loading..." id="button-voucher" defaultValue="Apply Voucher" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default pull-left">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Estimate Shipping &amp; Taxes <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>Enter your destination to get a shipping estimate.</p>
                  <form className="form-horizontal">
                    <div className="form-group required">
                      <label htmlFor="input-country" className="col-sm-2 control-label">Country</label>
                      <div className="col-sm-10">
                        <select className="form-control" id="input-country" name="country_id">
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
                          <option value={205}>Syrian Arab Republic</option>
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
                          <option selected="selected" value={222}>United Kingdom</option>
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
                      <label htmlFor="input-zone" className="col-sm-2 control-label">Region / State</label>
                      <div className="col-sm-10">
                        <select className="form-control" id="input-zone" name="zone_id">
                          <option value> --- Please Select --- </option>
                          <option value={3513}>Aberdeen</option>
                          <option value={3514}>Aberdeenshire</option>
                          <option value={3515}>Anglesey</option>
                          <option value={3516}>Angus</option>
                          <option value={3517}>Argyll and Bute</option>
                          <option value={3518}>Bedfordshire</option>
                          <option value={3519}>Berkshire</option>
                          <option value={3520}>Blaenau Gwent</option>
                          <option value={3521}>Bridgend</option>
                          <option value={3522}>Bristol</option>
                          <option value={3523}>Buckinghamshire</option>
                          <option value={3524}>Caerphilly</option>
                          <option value={3525}>Cambridgeshire</option>
                          <option value={3526}>Cardiff</option>
                          <option value={3527}>Carmarthenshire</option>
                          <option value={3528}>Ceredigion</option>
                          <option value={3529}>Cheshire</option>
                          <option value={3530}>Clackmannanshire</option>
                          <option value={3531}>Conwy</option>
                          <option value={3532}>Cornwall</option>
                          <option value={3949}>County Antrim</option>
                          <option value={3950}>County Armagh</option>
                          <option value={3951}>County Down</option>
                          <option value={3952}>County Fermanagh</option>
                          <option value={3953}>County Londonderry</option>
                          <option value={3954}>County Tyrone</option>
                          <option value={3955}>Cumbria</option>
                          <option value={3533}>Denbighshire</option>
                          <option value={3534}>Derbyshire</option>
                          <option value={3535}>Devon</option>
                          <option value={3536}>Dorset</option>
                          <option value={3537}>Dumfries and Galloway</option>
                          <option value={3538}>Dundee</option>
                          <option value={3539}>Durham</option>
                          <option value={3540}>East Ayrshire</option>
                          <option value={3541}>East Dunbartonshire</option>
                          <option value={3542}>East Lothian</option>
                          <option value={3543}>East Renfrewshire</option>
                          <option value={3544}>East Riding of Yorkshire</option>
                          <option value={3545}>East Sussex</option>
                          <option value={3546}>Edinburgh</option>
                          <option value={3547}>Essex</option>
                          <option value={3548}>Falkirk</option>
                          <option value={3549}>Fife</option>
                          <option value={3550}>Flintshire</option>
                          <option value={3551}>Glasgow</option>
                          <option value={3552}>Gloucestershire</option>
                          <option value={3553}>Greater London</option>
                          <option value={3554}>Greater Manchester</option>
                          <option value={3555}>Gwynedd</option>
                          <option value={3556}>Hampshire</option>
                          <option value={3557}>Herefordshire</option>
                          <option value={3558}>Hertfordshire</option>
                          <option value={3559}>Highlands</option>
                          <option value={3560}>Inverclyde</option>
                          <option value={3561}>Isle of Wight</option>
                          <option value={3562}>Kent</option>
                          <option value={3563}>Lancashire</option>
                          <option value={3564}>Leicestershire</option>
                          <option value={3565}>Lincolnshire</option>
                          <option value={3566}>Merseyside</option>
                          <option value={3567}>Merthyr Tydfil</option>
                          <option value={3568}>Midlothian</option>
                          <option value={3569}>Monmouthshire</option>
                          <option value={3570}>Moray</option>
                          <option value={3571}>Neath Port Talbot</option>
                          <option value={3572}>Newport</option>
                          <option value={3573}>Norfolk</option>
                          <option value={3574}>North Ayrshire</option>
                          <option value={3575}>North Lanarkshire</option>
                          <option value={3576}>North Yorkshire</option>
                          <option value={3577}>Northamptonshire</option>
                          <option value={3578}>Northumberland</option>
                          <option value={3579}>Nottinghamshire</option>
                          <option value={3580}>Orkney Islands</option>
                          <option value={3581}>Oxfordshire</option>
                          <option value={3582}>Pembrokeshire</option>
                          <option value={3583}>Perth and Kinross</option>
                          <option value={3584}>Powys</option>
                          <option value={3585}>Renfrewshire</option>
                          <option value={3586}>Rhondda Cynon Taff</option>
                          <option value={3587}>Rutland</option>
                          <option value={3588}>Scottish Borders</option>
                          <option value={3589}>Shetland Islands</option>
                          <option value={3590}>Shropshire</option>
                          <option value={3591}>Somerset</option>
                          <option value={3592}>South Ayrshire</option>
                          <option value={3593}>South Lanarkshire</option>
                          <option value={3594}>South Yorkshire</option>
                          <option value={3595}>Staffordshire</option>
                          <option value={3596}>Stirling</option>
                          <option value={3597}>Suffolk</option>
                          <option value={3598}>Surrey</option>
                          <option value={3599}>Swansea</option>
                          <option value={3600}>Torfaen</option>
                          <option value={3601}>Tyne and Wear</option>
                          <option value={3602}>Vale of Glamorgan</option>
                          <option value={3603}>Warwickshire</option>
                          <option value={3604}>West Dunbartonshire</option>
                          <option value={3605}>West Lothian</option>
                          <option value={3606}>West Midlands</option>
                          <option value={3607}>West Sussex</option>
                          <option value={3608}>West Yorkshire</option>
                          <option value={3609}>Western Isles</option>
                          <option value={3610}>Wiltshire</option>
                          <option value={3611}>Worcestershire</option>
                          <option value={3612}>Wrexham</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-postcode" className="col-sm-2 control-label">Post Code</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="input-postcode" placeholder="Post Code" defaultValue name="postcode" />
                      </div>
                    </div>
                    <input type="button" className="btn pull-right" data-loading-text="Loading..." id="button-quote" defaultValue="Get Quotes" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="text-right"><strong>Sub-Total:</strong></td>
                    <td className="text-right">$210.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>Eco Tax (-2.00):</strong></td>
                    <td className="text-right">$2.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>VAT (20%):</strong></td>
                    <td className="text-right">$42.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>Total:</strong></td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form onSubmit={() => navigate('/index') }>
            <input className="btn pull-left mt_30" type="submit" defaultValue="Continue Shopping" />
          </form>
          <form onSubmit={() => navigate('/checkoutPage')}>
            <input className="btn pull-right mt_30" type="submit" defaultValue="Checkout" />
          </form>
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
    </div>
    {/* =====  CONTAINER END  ===== */}
    {/* =====  FOOTER START  ===== */}
   <Footer/>
    {/* =====  FOOTER END  ===== */}
</div>

  )
}

export default CartPage;