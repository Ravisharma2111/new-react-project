import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';


function ProductDetailPage() {


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
          <div className="left-special left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Top Products</h2>
            </div>
            <div id="left-special" className="owl-carousel">
              <ul className="row ">
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
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="breadcrumb ptb_20">
            <h1>New LCDScreen...</h1>
            <ul>
              <li><NavLink href="index2">Home</NavLink></li>
              <li><NavLink href="productDetailPage">Products</NavLink></li>
              <li className="active">New LCDS...</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="row mt_10 ">
            <div className="col-md-6">
              <div><a className="thumbnails"> <img data-name="product_image" src="images/product/product1.jpg" alt /></a></div>
              <div id="product-thumbnail" className="owl-carousel">
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product1.jpg" data-fancybox="group1"> <img src="images/product/product1.jpg" alt /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product2.jpg" data-fancybox="group1"> <img src="images/product/product2.jpg" alt /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product3.jpg" data-fancybox="group1"> <img src="images/product/product3.jpg" alt /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product4.jpg" data-fancybox="group1"> <img src="images/product/product4.jpg" alt /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product5.jpg" data-fancybox="group1"> <img src="images/product/product5.jpg" alt /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product6.jpg" data-fancybox="group1"> <img src="images/product/product6.jpg" alt /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="images/product/product7.jpg" data-fancybox="group1"> <img src="images/product/product7.jpg" alt /></a></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 prodetail caption product-thumb">
              <h4 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h4>
              <div className="rating">
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
              </div>
              <span className="price mb_20"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
              </span>
              <hr />
              <ul className="list-unstyled product_info mtb_20">
                <li>
                  <label>Brand:</label>
                  <span> <a href="#">Apple</a></span></li>
                <li>
                  <label>Product Code:</label>
                  <span> product 20</span></li>
                <li>
                  <label>Availability:</label>
                  <span> In Stock</span></li>
              </ul>
              <hr />
              <p className="product-desc mtb_30"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..</p>
              <div id="product">
                <div className="form-group">
                  <div className="row">
                    <div className="Sort-by col-md-6">
                      <label>Sort by</label>
                      <select name="product_size" id="select-by-size" className="selectpicker form-control">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <div className="Color col-md-6">
                      <label>Color</label>
                      <select name="product_color" id="select-by-color" className="selectpicker form-control">
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Orange</option>
                        <option>White</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="qty mt_30 form-group2">
                  <label>Qty</label>
                  <input name="product_quantity" min={1} defaultValue={1} type="number" />
                </div>
                <div className="button-group mt_30">
                  <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                  <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                  <div className="compare"><a href="#"><span>Compare</span></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="exTab5" className="mtb_30">
                <ul className="nav nav-tabs">
                  <li className="active"> <a href="#1c" data-toggle="tab">Overview</a> </li>
                  <li><a href="#2c" data-toggle="tab">Reviews (1)</a> </li>
                  <li><a href="#3c" data-toggle="tab">Solution</a> </li>
                </ul>
                <div className="tab-content mt_20">
                  <div className="tab-pane active" id="1c">
                    <p>CLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.</p>
                  </div>
                  <div className="tab-pane" id="2c">
                    <form className="form-horizontal">
                      <div id="review" />
                      <h4 className="mt_20 mb_30">Write a review</h4>
                      <div className="form-group required">
                        <div className="col-sm-12">
                          <label className="control-label" htmlFor="input-name">Your Name</label>
                          <input name="name" defaultValue id="input-name" className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-sm-12">
                          <label className="control-label" htmlFor="input-review">Your Review</label>
                          <textarea name="text" rows={5} id="input-review" className="form-control" defaultValue={""} />
                          <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-md-6">
                          <label className="control-label">Rating</label>
                          <div className="rates"><span>Bad</span>
                            <input name="rating" defaultValue={1} type="radio" />
                            <input name="rating" defaultValue={2} type="radio" />
                            <input name="rating" defaultValue={3} type="radio" />
                            <input name="rating" defaultValue={4} type="radio" />
                            <input name="rating" defaultValue={5} type="radio" />
                            <span>Good</span></div>
                        </div>
                        <div className="col-md-6">
                          <div className="buttons pull-right">
                            <button className="btn btn-md btn-link">Continue</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="3c">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.applied clearfix to the tab-content to rid of the gap between the tab and the content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="heading-part text-center">
                <h2 className="main_title mt_50">Related Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-layout  product-grid related-pro  owl-carousel mb_50">
              <div className="item">
                <div className="product-thumb">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product2-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating">
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                    </div>
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
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product3.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product3-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating">
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                    </div>
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
                  <div className="image product-imageblock"> <NavLink to = "/productDetailPage"> <img data-name="product_image" src="images/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product4-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating">
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                    </div>
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
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product6-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating">
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                    </div>
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
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product7-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating">
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                    </div>
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
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product8-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                    <div className="rating">
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                      <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
                    </div>
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
    <Footer />
    {/* =====  FOOTER END  ===== */}
  </div>
</div>

  )
}

export default ProductDetailPage