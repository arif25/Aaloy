import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/Scss/Navigation.scss";
import logo from "../../logo.svg";
import logo1 from "../Assets/Images/AALOY-logo.png";

const Navigation = () => {
    
    return(
        <div>
            <section className="secNavigation">
                <div class="navbar navbar-inverse">
                    <div class="container">
                        <div class="navbar-header">
                            <button class="navbar-toggle" data-target="#mobile_menu" data-toggle="collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                            <a href="#" class="navbar-brand">
                            <div className="logo">
                                <NavLink to='/'>
                                    <img src={logo1} alt="" />                    
                                </NavLink>
                            </div>
                            </a>
                        </div>
                        <div class="navbar-collapse collapse" id="mobile_menu">
                            <ul class="nav navbar-nav">
                                <li class="active"><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/termsandcondition'>About us</NavLink></li>
                                <li><a href="#" class="dropdown-toggle" data-toggle="dropdown">Property <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><NavLink to='/myproperty'>Property</NavLink></li>
                                        <li><NavLink to='/propertylisting'>My Property</NavLink></li>
                                        <li><NavLink to='/propertydetails'>Property Details</NavLink></li>
                                        <li><NavLink to='/propertyadd'>Property Add</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to='/shoppingcart'>Shopping Cart</NavLink></li>
                                <li><NavLink to='/contactus'>Contact us</NavLink></li>
                                <li><NavLink to='/thankyou'>Thankyou</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>     
    );
}

export default Navigation;