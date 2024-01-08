import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
// import Header from '../header/Header'

function CategoryPage() {
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
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
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
          <div className="filter left-sidebar-widget mb_50">
            <div className="heading-part mtb_20 ">
              <h2 className="main_title">Refinr Search</h2>
            </div>
            <div className="filter-block">
              <p>
                <label htmlFor="amount">Price range:</label>
                <input type="text" id="amount" readOnly />
              </p>
              <div id="slider-range" className="mtb_20" />
              <div className="list-group">
                <div className="list-group-item mb_10">
                  <label>Color</label>
                  <div id="filter-group1">
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Red (10)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Green (06)</label>
                    </div>
                    <div className="checkbox ">
                      <label>
                        <input defaultValue type="checkbox" /> Blue(09)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="list-group-item mb_10">
                  <label>Size</label>
                  <div id="filter-group3">
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Big (3)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Medium (2)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Small (1)</label>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn">Refine Search</button>
              </div>
            </div>
          </div>
          <div className="left_banner left-sidebar-widget mb_50"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="left-special left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Top Products</h2>
            </div>
            <div id="left-special" className="owl-carousel">
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
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="breadcrumb ptb_20">
            <h1>Products</h1>
            <ul>
              <li><NavLink to="/index2">Home</NavLink></li>
              <li className="active">Products</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="category-page-wrapper mb_30">
            <div className="col-xs-6 sort-wrapper">
              <label className="control-label" htmlFor="input-sort">Sort By :</label>
              <div className="sort-inner">
                <select id="input-sort" className="form-control">
                  <option value="ASC" selected="selected">Default</option>
                  <option value="ASC">Name (A - Z)</option>
                  <option value="DESC">Name (Z - A)</option>
                  <option value="ASC">Price (Low &gt; High)</option>
                  <option value="DESC">Price (High &gt; Low)</option>
                  <option value="DESC">Rating (Highest)</option>
                  <option value="ASC">Rating (Lowest)</option>
                  <option value="ASC">Model (A - Z)</option>
                  <option value="DESC">Model (Z - A)</option>
                </select>
              </div>
              <span><i className="fa fa-angle-down" aria-hidden="true" /></span> </div>
            <div className="col-xs-4 page-wrapper">
              <label className="control-label" htmlFor="input-limit">Show :</label>
              <div className="limit">
                <select id="input-limit" className="form-control">
                  <option value={8} selected="selected">08</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={75}>75</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <span><i className="fa fa-angle-down" aria-hidden="true" /></span> </div>
            <div className="col-xs-2 text-right list-grid-wrapper">
              <div className="btn-group btn-list-grid">
                <button type="button" id="list-view" className="btn btn-default list-view" />
                <button type="button" id="grid-view" className="btn btn-default grid-view active" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb clearfix mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb clearfix mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb clearfix mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb clearfix mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product4-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb clearfix mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product5-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product9.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product9-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product10.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product10-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product4-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
                  <div className="image product-imageblock"> <NavLink to="/productDetailPage"> <img data-name="product_image" src="images/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="images/product/product5-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div className="item">
                <div className="product-thumb  mb_30">
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
                    <p className="product-desc mt_20 mb_60"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
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
          <div className="pagination-nav text-center mt_50">
            <ul>
              <li><a href="#"><i className="fa fa-angle-left" /></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i className="fa fa-angle-right" /></a></li>
            </ul>
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

  )
}

export default CategoryPage