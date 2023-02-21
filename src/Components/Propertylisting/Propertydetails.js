import React from "react";
import "../Assets/Scss/Propertylisting.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import photolist1 from "../Assets/Images/pro-1.jpg";
import iconcamera from "../Assets/Images/icon-camera-black.png";

const Propertydetails = ()=> {
    return(
        <section>
            <Header />
            <aside className="asi-breadcrump">
                <div className="container">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">My Property</a></li>
                    </ul>
                </div>
            </aside>
            <aside className="asi-property-listing sec-propertyDetails">
                <div className="container">
                    <div className="title-page">
                        <h3>Property Details</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="bx-property-details">
                        <div className="left-propertyDetails">                      
                            <div className="bx-property-list">
                                <div className="photo-property">
                                    <img src={photolist1} />
                                    <div className="bxicon-camera-no">
                                        <div className="icon-camera"><img src={iconcamera} /></div>
                                        <div className="icon-photo-no">11</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-propertyDetails">  
                            <h3>Lorem ipsum dummy text</h3> 
                            <div className="content-listing"> 
                                <ul>
                                    <li><div className="cl-1">Jadavpur (89), 108 km lorem ipsum</div></li>
                                    <li><div className="cl-1">Jadavpur (89), 108 km lorem ipsum</div></li>
                                    <li><div className="cl-2">2 BHK/1 Bathroom Lorem</div></li>
                                    <li><div className="cl-2">2 BHK/1 Bathroom Lorem</div></li>
                                    <li><div className="cl-3">$ 45,000 | 1800 sqft</div></li>
                                    <li><div className="cl-3">$ 45,000 | 1800 sqft</div></li>
                                    <li><div className="cl-4">Book now : 2,999</div></li>
                                    <li><div className="cl-4">Book now : 2,999</div></li>
                                    <li><div className="cl-5">posted by broker</div></li>
                                    <li><div className="cl-5">posted by broker</div></li>
                                </ul>
                            </div>                    
                            {/* <div className="content-listing">
                                <div className="cl-1">Jadavpur (89), 108 km lorem ipsum</div>
                                <div className="cl-2">2 BHK/1 Bathroom Lorem</div>
                                <div className="cl-3">$ 45,000 | 1800 sqft</div>
                                <div className="cl-4">Book now : 2,999</div>
                                <div className="cl-5">posted by broker</div>
                                <div className="cl-6">
                                    <ul>
                                        <li><a href="#">Edit</a></li>
                                        <li><a href="#" className="active">Delete</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </aside>                 
          <Footer />
        </section>
    );
}

export default Propertydetails;