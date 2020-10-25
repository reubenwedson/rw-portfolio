import React, { Component } from 'react';

class Header extends Component {
  render() {

    // if(this.props.data){
    //   var name = this.props.data.name;
    //   var occupation= this.props.data.occupation;
    //   var description= this.props.data.description;
      // var city= this.props.data.address.city;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
    // }

    return (
        <>
        <header id="header" className="site-header header-style-1">
            <nav className="navigation navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="open-btn">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="index-2.html"><img src="../assets/images/logo.png" alt /></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse navigation-holder">
                        <button className="close-navbar"><i className="ti-close"/></button>
                        <button className="close-navbar-2"><i className="ti-close"/></button>
                        <ul className="nav navbar-nav">
                            <li className="home"><a href="#home"><img src="../assets/images/home/img-1.jpg" alt="" /></a></li>
                            <li className="about"><a href="#about"><img src="../assets/images/home/img-6.jpg" alt="" /></a></li>
                            <li className="service"><a href="#service"><img src="../assets/images/home/img-4.jpg" alt="" /></a></li>
                            <li className="protfolio"><a href="#protfolio"><img src="../assets/images/home/img-5.jpg" alt="" /></a></li>
                            <li className="blog"><a href="#blog"><img src="../assets/images/home/img-2.jpg" alt="" /></a></li>
                            <li className="contact"><a href="#contact"><img src="../assets/images/home/img-3.jpg" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="menu-open-btn-holder">
                        <button className="menu-open-btn">
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>

      <section className="hero hero-slider-wrapper hero-style-1">
          <div className="hero-slider">
              <div className="slide">
                  <div className="slider-image">
                      <img src="assets/images/slider/slide-2.jpg" alt className="slider-bg" />
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col col-md-7 col-sm-10 slide-caption">
                              <div className="slide-subtitle">
                                  <h4>I Am Aliza Anne</h4>
                              </div>
                              <div className="slide-title">
                                  <h2>Creative Designer</h2>
                              </div>
                              <div className="btns">
                                  <a href="#contact" className="theme-btn go-contact-area">Contact Me</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copy"><p>Creative Designer And Developer</p></div>
          <div className="social-links">
              <ul>
                  <li><a href="#"><i className="ti-facebook"/></a></li>
                  <li><a href="#"><i className="ti-twitter-alt"/></a></li>
                  <li><a href="#"><i className="ti-linkedin"/></a></li>
                  <li><a href="#"><i className="ti-pinterest"/></a></li>
              </ul>
          </div>
      </section>
            </>
    );
  }
}

export default Header;
