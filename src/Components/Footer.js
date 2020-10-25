import React, { Component } from 'react';

class Footer extends Component {
  render() {

    // if(this.props.data){
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   })
    // }

    return (
        <!-- footer-area start -->
        <div className="footer-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <a href="#"><img src="../assets/images/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-menu">
                            <ul className="d-flex " >
                                <li><a href="#"><i className="ti-twitter"/></a></li>
                                <li><a href="#"><i className="ti-dribbble"/></a></li>
                                <li><a href="#"><i className="ti-facebook"/></a></li>
                                <li><a href="#"><i className="ti-linkedin"/></a></li>
                                <li><a href="#"><i className="ti-skype"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-sub">
                            <p><i className="fa fa-copyright"/>copyright2019<span> website by themepresss</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <!-- footer-area end -->
    );
  }
}

export default Footer;
