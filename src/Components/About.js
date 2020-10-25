import React, { Component } from 'react';

class About extends Component {
  render() {

    // if(this.props.data){
    //   var name = this.props.data.name;
    //   var profilepic= "images/"+this.props.data.image;
    //   // var bio = this.props.data.bio;
    //   var street = this.props.data.address.street;
    //   var city = this.props.data.address.city;
    //   var state = this.props.data.address.state;
    //   var zip = this.props.data.address.zip;
    //   var phone= this.props.data.phone;
    //   var email = this.props.data.email;
    //   var resumeDownload = this.props.data.resumedownload;
    // }

    return (
        <!-- about-area start -->
        <div id="about" className="about-area">
            <div className="border"/>
            <div className="container">
                <div className="about-item">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="assets/images/about/img-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>About Me</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem IpsumThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                                <a href="#" className="theme-btn">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <!-- about-area end -->
  );
  }
}

export default About;
