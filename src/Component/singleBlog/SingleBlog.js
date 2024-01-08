import React from 'react'
import { NavLink } from "react-router-dom";
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function SingleBlog() {


  return (
    <div>
   <div>{/* =====  LODER  ===== */}

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
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_03.jpg" alt="HealthCare" /></a></div>
                  </div>
                  <div className="post-info col-xs-8 ">
                    <h5> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h5>
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                  </div>
                </div>
                <div className="blog-item mb_20">
                  <div className="post-format col-xs-4">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_02.jpg" alt="HealthCare" /></a></div>
                  </div>
                  <div className="post-info col-xs-8 ">
                    <h5> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h5>
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                  </div>
                </div>
                <div className="blog-item mb_20">
                  <div className="post-format col-xs-4">
                    <div className="thumb post-img"><a href="#"> <img src="images/blog/blog_img_01.jpg" alt="HealthCare" /></a></div>
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
            <h1>Fashions fade..</h1>
            <ul>
              <li><NavLink to="/index2">Home</NavLink></li>
              <li><NavLink to="/singleBlog">Home</NavLink></li>
              <li className="active">Fashions fade....</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="row">
            <div className="blog-item listing-effect col-md-12 mb_50">
              <div className="post-format">
                <div className="thumb post-img"><a href="images/blog/blog_img_01.jpg" title="Beautiful Lady"> <img src="images/blog/blog_img_01.jpg" alt="HealthCare" /></a></div>
                <div className="post-type"> <i className="fa fa-picture-o" aria-hidden="true" /> </div>
              </div>
              <div className="post-info mtb_20 ">
                <h2 className="mb_10"> <NavLink to="/singleBlog">Unknown printer took a galley book.</NavLink> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab </p>
              </div>
              <blockquote>consectetur adipiscing elit. In rutrum odio urna, vitae ultrices mi malesuada ut. Praesent lacus erat, ultricies ut risus nec, pellentesque interdum purus. In mi justo, consectetur tincidunt sapien eget, venenatis volutpat risus. Maecenas eget pretium eros. Integer tincidunt aliquet ligula in vulputate. Ut ut justo facilisis, vulputate augue vel, vestibulum tortor. Nullam varius lacus non porttitor sodales. Vivamus ultricies est vitae pharetra convallis. Sed suscipit, nisi sit amet tempus mollis, mauris ante tempor risu</blockquote>
              etur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectet
              <div className="details mtb_20">
                <div className="date"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
              </div>
              <div className="author-about mt_50">
                <h3 className="author-about-title">About the Author</h3>
                <div className="author mtb_30">
                  <div className="author-avatar"> <img alt src="images/user1.jpg" /></div>
                  <div className="author-body">
                    <h5 className="author-name"><a href="#">Radley Lobortis</a></h5>
                    <div className="author-content mt_10">Vivamus imperdiet ex sed lobortis luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in tur pis porttitor laoreet. Quisque finibus aliquet purus. Ut et mi eu ante interdum .</div>
                  </div>
                </div>
              </div>
              <div id="comments" className="comments-area mt_50">
                <h3 className="comment-title">3 comments</h3>
                <ul className="comment-list mt_30">
                  <li className="comment">
                    <hr />
                    <article className="comment-body mtb_30">
                      <div className="comment-avatar"> <img alt src="images/user2.jpg" /> </div>
                      <div className="comment-main">
                        <h5 className="author-name"> <a href="#" className="comment-name">Radley Lobortis</a> <small className="comment-date">8 months ago</small> </h5>
                        <div className="comment-reply pull-right"> <a href="#"><i className="fa fa-reply" aria-hidden="true" /> Reply</a> </div>
                        <div className="comment-content mt_10">Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet. Quisque finibus aliquet purus.</div>
                      </div>
                    </article>
                    <hr />
                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body mtb_30">
                          <div className="comment-avatar"> <img alt src="images/user3.jpg" /> </div>
                          <div className="comment-main">
                            <h5 className="author-name"> <a href="#" className="comment-name">Lobortis Radley</a> <small className="comment-date">1 months ago</small> </h5>
                            <div className="comment-reply pull-right"> <a href="#"><i className="fa fa-reply" aria-hidden="true" /> Reply</a> </div>
                            <div className="comment-content mt_10">Dcenas euismod faucibus dolor a finibus.Maecenas euismod faucibus dolor a finibus.Maecenas euismod faucibus dolor a finibus.Maecenas euismod faucibus dolor a finibus.cenas euismod faucibus dolor a finibus.</div>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </li>
                  <li className="comment">
                    <hr />
                    <article className="comment-body mtb_30">
                      <div className="comment-avatar"> <img alt src="images/user1.jpg" /> </div>
                      <div className="comment-main">
                        <h5 className="author-name"> <a href="#" className="comment-name">Sradle Vivamus </a> <small className="comment-date">8 days ago</small> </h5>
                        <div className="comment-reply pull-right"> <a href="#"><i className="fa fa-reply" aria-hidden="true" /> Reply</a> </div>
                        <div className="comment-content mt_10">Vivamus imperdiet ex sed lobortis luctus. Aenean posuere nulla in turpis porttitor laoreet. Quisque finibus aliquet purus. Ut et mi eu ante interdum dignissim pellentesque a mi.</div>
                      </div>
                    </article>
                  </li>
                </ul>
                <div className="leave-form">
                  <h3 className="comment-title mt_50 mb_30" id="reply-title">Leave A Comment</h3>
                  {/* Comment Form */}
                  <div className="form-style" id="contact_form">
                    <div id="contact_results" />
                    <div className="row">
                      <form id="contact_body" method="post">
                        <div className="col-sm-6">
                          <input className="full-with-form" type="text" name="name" placeholder="Name" data-required="true" />
                        </div>
                        <div className="col-sm-6">
                          <input className="full-with-form" type="email" name="email" placeholder="Email Address" data-required="true" />
                        </div>
                        <div className="col-sm-12 mt_30">
                          <textarea className="full-with-form" name="message" placeholder="Message" data-required="true" defaultValue={""} />
                        </div>
                        <div className="col-sm-6">
                          <button className="btn mt_30" type="submit">Leave Comment</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Comment Form */}
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
<Footer/>
  {/* =====  FOOTER End  ===== */}
  </div>
</div>

  )
}

export default SingleBlog ;