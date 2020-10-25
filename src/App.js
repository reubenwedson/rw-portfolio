import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
        <!-- start page-wrapper -->
        <div className="page-wrapper" id="home">
          <!-- start page-loader -->
          <div className="preloader">
            <div className="spinner">
              <div className="dot1"/>
              <div className="dot2"/>
            </div>
          </div>
          <!-- end page-loader -->
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/*<Testimonials data={this.state.resumeData.testimonials}/>*/}
        {/*<Contact data={this.state.resumeData.main}/>*/}
        <Footer data={this.state.resumeData.main}/>
      </div>
        <!-- end of page-wrapper -->
    );
  }
}

export default App;
