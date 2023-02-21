import React, {Component} from "react";
import Slider from "react-slick";
import banner1 from "../Assets/Images/banner-1.jpg";
import "../Assets/Scss/SearchLocations.scss";

const Searchlocations = () => {

    var sliderSBLocations = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };

    return(
        <section className="sec-searchlocations">
            <div className="container">
                <div className="titleSearchBylocations">Search by location</div>
                <div className="sliderSBLocations">

                    <Slider {...sliderSBLocations}>
                        <div>
                            <div className="bannerItemLocations">
                                <div className="location-name">Jadavpur</div>
                                <div className="location-distance">1224 km</div>
                                <div className="location-rank">56</div>
                                <div className="location-more">more 
                                    <span>
                                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemLocations">
                                <div className="location-name">Jadavpur</div>
                                <div className="location-distance">1224 km</div>
                                <div className="location-rank">56</div>
                                <div className="location-more">more 
                                    <span>
                                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemLocations">
                                <div className="location-name">Jadavpur</div>
                                <div className="location-distance">1224 km</div>
                                <div className="location-rank">56</div>
                                <div className="location-more">more 
                                    <span>
                                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemLocations">
                                <div className="location-name">Jadavpur</div>
                                <div className="location-distance">1224 km</div>
                                <div className="location-rank">56</div>
                                <div className="location-more">more 
                                    <span>
                                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemLocations">
                                <div className="location-name">Jadavpur</div>
                                <div className="location-distance">1224 km</div>
                                <div className="location-rank">56</div>
                                <div className="location-more">more 
                                    <span>
                                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemLocations">
                                <div className="location-name">Jadavpur</div>
                                <div className="location-distance">1224 km</div>
                                <div className="location-rank">56</div>
                                <div className="location-more">more 
                                    <span>
                                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default Searchlocations;


