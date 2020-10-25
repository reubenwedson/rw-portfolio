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
        <!-- Start header -->
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
                    </div><!-- end of nav-collapse -->
                    <div className="menu-open-btn-holder">
                        <button className="menu-open-btn">
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
                </div><!-- end of container -->
            </nav>
        </header>
      <!-- end of header -->
    );
  }
}

export default Header;
