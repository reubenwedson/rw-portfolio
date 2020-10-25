import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    // if(this.props.data){
    //   var hostedAndEditedByMe = this.props.data.hostedAndEditedByMe.map(function(hostedAndEditedByMe){
    //     var projectImage = 'images/portfolio/'+hostedAndEditedByMe.image;
    //     return <div key={hostedAndEditedByMe.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={hostedAndEditedByMe.url} title={hostedAndEditedByMe.title} target="_blank"  rel="noopener noreferrer">
    //            <img alt={hostedAndEditedByMe.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{hostedAndEditedByMe.title}</h5>
    //                  <p>{hostedAndEditedByMe.category}</p>
    //               </div>
    //             </div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    //   var shotAndEditedByMe = this.props.data.shotAndEditedByMe.map(function(shotAndEditedByMe){
    //     var projectImage = 'images/portfolio/'+shotAndEditedByMe.image;
    //     return <div key={shotAndEditedByMe.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={shotAndEditedByMe.url} title={shotAndEditedByMe.title} target="_blank"  rel="noopener noreferrer">
    //            <img alt={shotAndEditedByMe.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{shotAndEditedByMe.title}</h5>
    //                  <p>{shotAndEditedByMe.category}</p>
    //               </div>
    //             </div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    //   var shotByMe = this.props.data.shotByMe.map(function(shotByMe){
    //     var projectImage = 'images/portfolio/'+shotByMe.image;
    //     return <div key={shotByMe.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={shotByMe.url} title={shotByMe.title} target="_blank"  rel="noopener noreferrer">
    //            <img alt={shotByMe.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{shotByMe.title}</h5>
    //                  <p>{shotByMe.category}</p>
    //               </div>
    //             </div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    //     var producedByMe = this.props.data.producedByMe.map(function(producedByMe){
    //     var projectImage = 'images/portfolio/'+producedByMe.image;
    //     return <div key={producedByMe.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={producedByMe.url} title={producedByMe.title} target="_blank"  rel="noopener noreferrer">
    //            <img alt={producedByMe.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{producedByMe.title}</h5>
    //                  <p>{producedByMe.category}</p>
    //               </div>
    //             </div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    // }

    return (
        <section id="protfolio" className="gallery-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12 sortable-gallery">
                        <div className="gallery-filters">
                            <div className="section-title">
                                <span>Portfolio</span>
                                <h2>Work I Have Done</h2>
                            </div>
                            <ul>
                                <li><a data-filter="*" href="#" className="current">All</a></li>
                                <li><a data-filter=".Web-Design" href="#">Web Design</a></li>
                                <li><a data-filter=".Print-Design" href="#">Print Design</a></li>
                                <li><a data-filter=".Web-Application" href="#">Web Application</a></li>
                                <li><a data-filter=".Photography" href="#">Photography</a></li>
                            </ul>
                        </div>
                        <div className="gallery-container gallery-fancybox masonry-gallery">
                            <div className="grid Print-Design Web-Application Photography">
                                <a href="../assets/images/gallery/img-1.jpg" className="fancybox" data-fancybox-group="gall-1">
                                    <img src="../assets/images/gallery/img-1.jpg" alt className="img img-responsive" />
                                        <div className="icon">
                                            <i className="ti-plus"/>
                                        </div>
                                </a>
                            </div>
                            <div className="grid Web-Design Print-Design Web-Application">
                                <a href="../assets/images/gallery/img-2.jpg" className="fancybox" data-fancybox-group="gall-1">
                                    <img src="../assets/images/gallery/img-2.jpg" alt className="img img-responsive" />
                                        <div className="icon">
                                            <i className="ti-plus"/>
                                        </div>
                                </a>
                            </div>
                            <div className="grid Print-Design Photography">
                                <a href="../assets/images/gallery/img-3.jpg" className="fancybox" data-fancybox-group="gall-1">
                                    <img src="../assets/images/gallery/img-3.jpg" alt className="img img-responsive" />
                                        <div className="icon">
                                            <i className="ti-plus"/>
                                        </div>
                                </a>
                            </div>
                            <div className="grid Web-Design Web-Application">
                                <a href="../assets/images/gallery/img-4.jpg" className="fancybox" data-fancybox-group="gall-1">
                                    <img src="../assets/images/gallery/img-4.jpg" alt className="img img-responsive" />
                                        <div className="icon">
                                            <i className="ti-plus"/>
                                        </div>
                                </a>
                            </div>
                            <div className="grid Print-Design Photography">
                                <a href="../assets/images/gallery/img-5.jpg" className="fancybox" data-fancybox-group="gall-1">
                                    <img src="../assets/images/gallery/img-5.jpg" alt className="img img-responsive" />
                                        <div className="icon">
                                            <i className="ti-plus"/>
                                        </div>
                                </a>

                            </div>
                            <div className="grid Web-Design Print-Design Photography Web-Application">
                                <a href="../assets/images/gallery/img-6.jpg" className="fancybox" data-fancybox-group="gall-1">
                                    <img src="../assets/images/gallery/img-6.jpg" alt className="img img-responsive" />
                                        <div className="icon">
                                            <i className="ti-plus"/>
                                        </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
  }
}

export default Portfolio;
