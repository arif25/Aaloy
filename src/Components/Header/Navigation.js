import React from "react";
import "../Assets/Scss/Navigation.scss";
import logo from "../../logo.svg";
import logo1 from "../Assets/Images/AALOY-logo.png";

const Navigation = () => {
    return(
        <section className="secNavigation">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src={logo1} />                    
                    </a>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">My Property</a></li>
                    <li><a href="#">Property</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Navigation;