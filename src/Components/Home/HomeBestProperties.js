import React from "react";
import Slider from "react-slick";
import HomePWP from "../Assets/Images/pro-1.jpg";
import HomePWP2 from "../Assets/Images/pro-2.jpg";
import "../Assets/Scss/HomeBestProperties.scss";

const HomeBestProperties = ()=>{

    var sliderBestProperties = {
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
        <section className="sec-BestProperties">
        <div className="container">
            <div className="titleHomePage">Best Properties</div>
            <div className="sliderPWProperties">

                <Slider {...sliderBestProperties}>
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
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
                                <div className="PTContentPWP">2 BHK/1 Bathroom</div>
                                <div className="PVContentPWP"><strong>45,000 | 1800 sqft</strong></div>
                                <div className="BNContentPWP"><strong>Book now : 2,999</strong></div>
                                <div className="contentBestProperties">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="bxBtnViewDetails">
                                <a href="#">View Details</a>                                    
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        </div>
        </section>
    );
}

export default HomeBestProperties;