import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/Scss/Navigation.scss";
import logo from "../../logo.svg";
import logo1 from "../Assets/Images/AALOY-logo.png";

const Navigation = () => {
    return(
        <section className="secNavigation">
            <div className="container">
                <div className="logo">
                    <NavLink to='/'>
                        <img src={logo1} />                    
                    </NavLink>
                </div>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/termsandcondition'>About us</NavLink></li>
                    <li><NavLink to='/propertylisting'>My Property</NavLink></li>
                    <li><NavLink to='/myproperty'>Property</NavLink></li>
                    <li><NavLink to='/propertydetails'>Blogs</NavLink></li>
                    <li><NavLink to='/contactus'>Contact us</NavLink></li>

                    <li><NavLink to='/shoppingcart'>page1</NavLink></li>
                    <li><NavLink to='/propertyadd'>page2</NavLink></li>
                    <li><NavLink to='/thankyou'>page3</NavLink></li>
                </ul>
            </div>
        </section>
    );
}

export default Navigation;