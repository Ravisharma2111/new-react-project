import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Components/Footer';

import Header from '../../Components/Header';

function BlogPage() {
    return(
        <div>
  <div className="wrapper">
    {/* =====  HEADER START  ===== */}
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
          <div className="left_banner left-sidebar-widget mt_30 mb_40"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="blog-category left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Blog Category</h2>
            </div>
            <ul>
              <li><a href="#">Appliances</a></li>
              <li><a href="#">Mobile Phones</a></li>
              <li><a href="#">Tablet PC &amp; Accessories</a></li>
              <li><a href="#">Consumer Electronics</a></li>
              <li><a href="#">Computers &amp; Networking</a></li>
              <li><a href="#">Electrical &amp; Tools</a></li>
              <li><a href="#">Apparel</a></li>
              <li><a href="#">Bags &amp; Shoes</a></li>
              <li><a href="#">Toys &amp; Hobbies</a></li>
              <li><a href="#">Watches &amp; Jewelry</a></li>
              <li><a href="#">Home &amp; Garden</a></li>
              <li><a href="#">Health &amp; Beauty</a></li>
              <li><a href="#">Outdoors &amp; Sports</a></li>
            </ul>
          </div>
          <div className="left-blog left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Latest Post</h2>
            </div>
            <div id="left-blog">
              <div className="row ">
                <div className="blog-item mb_20">
                  <div className="post-format col-xs-4">
                    <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_01.jpg" alt="HealthCare" /></NavLink></div>
                  </div>
                  <div className="post-info col-xs-8 ">
                    <h5> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h5>
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                  </div>
                </div>
                <div className="blog-item mb_20">
                  <div className="post-format col-xs-4">
                    <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_02.jpg" alt="HealthCare" /></NavLink></div>
                  </div>
                  <div className="post-info col-xs-8 ">
                    <h5> <NavLink to ="/singleBlog">Unknown printer took a galley book.</NavLink> </h5>
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                  </div>
                </div>
                <div className="blog-item mb_20">
                  <div className="post-format col-xs-4">
                    <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_03.jpg" alt="HealthCare" /></NavLink></div>
                  </div>
                  <div className="post-info col-xs-8 ">
                    <h5> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h5>
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="breadcrumb ptb_20">
            <h1>Blog</h1>
            <ul>
              <li><NavLink to="index2">Home</NavLink></li>
              <li className="active">Blog</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="row">
            <div className="three-col-blog text-left">
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_04.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_05.jpg" alt="HealthCare" /></ NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_06.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_07.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_08.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_01.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_02.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/singleBlog"> <img src="images/blog/blog_img_03.jpg" alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/singleBlog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-nav text-center mtb_20">
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
    </div>
  </div>
  {/* =====  CONTAINER END  ===== */}
  {/* =====  FOOTER START  ===== */}
  <Footer/>
  {/* =====  FOOTER END  ===== */}
 
</div>
    )
}

export default BlogPage;