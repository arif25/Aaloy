import React, {Component} from "react";
import Slider from "react-slick";
import "../Assets/Scss/HomePWProperties.scss";
import HomePWP from "../Assets/Images/pro-1.jpg";
import HomePWP2 from "../Assets/Images/pro-2.jpg";
import HomeRate from "../Assets/Images/rate.png";

const HomePWProperties = () =>{

    var sliderHomePWProperties = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <section className="sec-HomePWProperties">
            <div className="container">
                <div className="titleHomePage">Popular owner Properties</div>
                <div className="sliderPWProperties">

                    <Slider {...sliderHomePWProperties}>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP2} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP2} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP2} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bannerItemPWProperties">
                                <div className="bxImgPWProperties">
                                    <div className="bxImgPWD">
                                        <img src={HomePWP2} />
                                        <div className="likeImgPWD"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                        <div className="location-rank">New</div>
                                        <div className="NOImgPWD"><i class="fa fa-camera" aria-hidden="true"></i> <span>11</span></div>
                                    </div>
                                </div>
                                <div className="bxContentPWProperties">
                                    <div className="titleContentPWP"><strong>Jadavpur (89),</strong> 108 Km</div>
                                    <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                    <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                    <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                    <div className="PBContentPWP">Book now : 2,999</div>
                                    <div className="bxBtnsContentPWP">
                                        <div className="btnBookNow">
                                            <a href="#">Book now</a>
                                        </div>
                                        <div className="btnCallBack">
                                            <a href="#">Call Back</a>
                                        </div>
                                        <div className="btnRequestForVisit">
                                            <a href="#" className="active">Request for visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </section>
    );
} 

export default HomePWProperties;