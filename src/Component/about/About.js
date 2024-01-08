import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function About() {
 
    return(
        <div>
        {'<!-- =====  LODER  ===== -->'}
  <div className="wrapper">
  {/* =====  HEADER START  ===== */}
    
  <Header/>

 { /* =====  HEADER END  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 hidden-xs">
          <div id="category-menu" className="navbar collapse in  mb_40" aria-expanded="true" role="button">
            <div className="nav-responsive">
              <ul className="nav  main-navigation collapse in">
                <li><a href="#">Pharmacy</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Vitamins</a></li>
                <li><a href="#">Sweating</a></li>
                <li><a href="#">Coughs & Colds</a></li>
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
        
          <div className="row">
            <div className="col-md-12">
              <figure> <img src="images/about-page-gaando.jpg" alt="#"/> </figure>
            </div>
            <div className="col-md-12">
              <div className="about-text">
                <div className="about-heading-wrap">
                  <h2 className="about-heading mb_20 mt_40 ptb_10">HealthCare Design is Best Part of <span>my Life </span></h2>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <button type="button" className="btn mt_30">HIRE ME</button>
              </div>
            </div>
          </div>
        
          <div className="row">
            <div className="col-md-6">
              <div className="heading-part mb_20 mt_40">
                <h2 className="main_title">What We Do?</h2>
              </div>
              <div className="panel-group" id="accordion">
                <div className="panel panel-default pull-left">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. What is HTML?</a> </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>HTML is a computer language devised to allow website creation. These websites can then be viewed by anyone else connected to the Internet. It is relatively easy to learn, with the basics being accessible.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default pull-left">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. What is Bootstrap?</a> </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. When I discovered Bootstrap a few years ago, responsive design was still gaining in popularity, addition to HTML, CSS and JS.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default pull-left">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. What is CSS?</a> </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.CSS handles the look and feel part of a web page. Using CSS.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="heading-part mb_20 mt_40 ">
                <h2 className="main_title">Skills</h2>
              </div>
              <div id="p_line">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}> <span className="sr-only">60% Complete</span> </div>
                  <span className="progress-type">HTML / HTML5</span> <span className="progress-completed">60%</span> </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}> <span className="sr-only">40% Complete (success)</span> </div>
                  <span className="progress-type">ASP.Net</span> <span className="progress-completed">40%</span> </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}> <span className="sr-only">20% Complete (info)</span> </div>
                  <span className="progress-type">Java</span> <span className="progress-completed">20%</span> </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}> <span className="sr-only">60% Complete (warning)</span> </div>
                  <span className="progress-type">JavaScript / jQuery</span> <span className="progress-completed">60%</span> </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> <span className="sr-only">80% Complete (danger)</span> </div>
                  <span className="progress-type">CSS / CSS3</span> <span className="progress-completed">80%</span> </div>
              </div>
            </div>
          </div>
        
          <div className="heading-part mb_10">
            <h2 className="main_title mt_50">Our Creative Team</h2>
          </div>
          <div className="team_grid box">
            <div className="team3col  owl-carousel">
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm1.jpg" alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm2.jpg" alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm3.jpg" alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm4.jpg" alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm5.jpg" alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      {/* =====  FOOTER START  ===== */}
      <Footer />
     {/* =====  FOOTER END  ===== */}  
  </div>
  )
}
export default About;