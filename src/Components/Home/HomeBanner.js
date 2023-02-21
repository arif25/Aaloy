import React, {Component} from "react";
import Slider from "react-slick";
import "../Assets/Scss/Homebanner.scss";
import "../Assets/Scss/SearchHomebanner.scss";
import banner1 from "../Assets/Images/banner-1.jpg";
import Homebannercontents from "./Homebannercontent";

const Homebanner = () => {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
      return ( 
        <section className="secHomeBanner">
            <div className="bxSearchBanner">
               <Homebannercontents />
            </div>
            <div className="bxHomeBanner">     
            <div className="opacityHomeBanner"></div>  
              <Slider {...settings}>
                <div>
                  <img src={banner1} />
                </div>
                <div>
                  <img src={banner1} />
                </div>
                <div>
                  <img src={banner1} />
                </div>
              </Slider>
            </div>        
        </section>
      )
}

export default Homebanner;