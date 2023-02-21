import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Assets/Scss/Propertylisting.scss";
import photolist1 from "../Assets/Images/pro-1.jpg";
import iconcamera from "../Assets/Images/icon-camera-black.png";

const Myproperty = ()=> {
    return (        
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
            <aside className="asi-property-listing asi-myproperty">
                <div className="container">
                    <div className="title-page">
                        <h3>My Property</h3>
                    </div>
                    <div className="bx-property-listing">
                        <ul>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">11</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bx-waiting-forapproval">
                                            <div className="waiting-forapproval">
                                                Waiting for<br /> admin approval
                                            </div>
                                        </div>
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">13</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">09</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bx-waiting-forapproval">
                                            <div className="waiting-forapproval">
                                                Waiting for<br /> admin approval
                                            </div>
                                        </div>
                                        <div className="bx-waiting-forapproval">
                                            <div className="waiting-forapproval">
                                                Waiting for<br /> admin approval
                                            </div>
                                        </div>
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">20</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">11</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bx-waiting-forapproval">
                                            <div className="waiting-forapproval">
                                                Waiting for<br /> admin approval
                                            </div>
                                        </div>
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">32</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">11</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bx-waiting-forapproval">
                                            <div className="waiting-forapproval">
                                                Waiting for<br /> admin approval
                                            </div>
                                        </div>
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">11</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bx-property-list">
                                    <div className="photo-property">
                                        <img src={photolist1} />
                                        <div className="bxicon-camera-no">
                                            <div className="icon-camera"><img src={iconcamera} /></div>
                                            <div className="icon-photo-no">11</div>
                                        </div>
                                    </div>
                                    <div className="content-listing">
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
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </div>
            </aside>                    
          <Footer />
        </section>
    );
}

export default Myproperty;