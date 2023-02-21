import React from "react";
import "../Assets/Scss/HomeServices.scss";

const HomeService = () =>{
    return(
        <section className="sec-homeService">
            <div className="container">
                <div className="titleHomePage">Property Services</div>
                <div className="bxPropertyServices">
                    <ul>
                        <li>
                            <div className="icon"><i class="fa fa-home" aria-hidden="true"></i></div>
                            <div className="SweetHome">Sweet Home</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-cube" aria-hidden="true"></i></div>
                            <div className="SweetHome">Best Service</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-credit-card" aria-hidden="true"></i></div>
                            <div className="SweetHome">Secure Payment</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                            <div className="SweetHome">Why we best</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-home" aria-hidden="true"></i></div>
                            <div className="SweetHome">Sweet Home</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                            <div className="SweetHome">Best Service</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-home" aria-hidden="true"></i></div>
                            <div className="SweetHome">Secure Payment</div>
                        </li>
                        <li>
                            <div className="icon"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                            <div className="SweetHome">Why we best</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HomeService;