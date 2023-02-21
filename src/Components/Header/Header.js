import React from "react";
import '../Assets/Scss/Header.scss';
import downchevron from "../Assets/Images/down-chevron.png";
import iconCloseGray from "../Assets/Images/icon-close-gray.png";
import Navigation from "./Navigation";
import $ from "jquery";

const Header = () => {
    const openLogin =()=>{
        $("#secLoginpopup").fadeIn(500);
        $("#secRegister").fadeOut(500);
    }
    const closeLoginPopup = ()=>{
        $("#secLoginpopup").fadeOut(500);
    }
    const openRegister = ()=>{        
        $("#secRegister").fadeIn(500);
        $("#secLoginpopup").fadeOut(500);
    }
    const closeRegisterPopup = ()=>{
        $("#secRegister").fadeOut(500);
    }
    return(
        <>
            <section className="secheadtop">
                <div className="container">
                    <div className="btnstopPostproperty">
                        <div className="btnsheadtop">
                            <ul>
                                <li>
                                    <div className="btnprime">
                                        <span>Prime </span>
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </li>
                                <li>
                                    <div className="btnlogin" onClick={openLogin}>
                                        <span>Login </span>
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                        <div className="postproperty"><span>Post Property</span> <span className="postfree">Free</span></div>
                    </div>
                </div>
            </section>
            <section className="secNav">
                <Navigation />
            </section>
            {/* Login popup */}
            <section className="sec-loginpopup" id="secLoginpopup">
                <div className="opacity-loginpopup"></div>
                <div className="bx-popup">
                    <div className="close-btn-popup" onClick={closeLoginPopup}>
                        <img src={iconCloseGray} />
                    </div>
                    <div className="title-popup">
                        <div className="bigtitle">User login</div>
                        <div className="titleDetails">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</div>
                    </div>
                    <div className="content-popup">
                        <div className="form-content-popup">
                            <div class="input-form-content">
                                <input type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div class="input-form-content">
                                <input type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div class="input-form-content">
                                <button>Sign in</button>
                            </div>
                            <div class="input-form-content account-confirm">
                                <p>Don't have an account? <a href="javascript:void(0)" onClick={openRegister}>Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Register popup */}
            <section className="sec-loginpopup sec-RegisterPopup" id="secRegister">
                <div className="opacity-loginpopup"></div>
                <div className="bx-popup">
                    <div className="close-btn-popup" onClick={closeRegisterPopup}>
                        <img src={iconCloseGray} />
                    </div>
                    <div className="title-popup">
                        <div className="bigtitle">Create your account</div>
                        <div className="titleDetails">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</div>
                    </div>
                    <div className="content-popup">
                        <div className="form-content-popup">
                            <div class="input-form-content">
                                <input type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div class="input-form-content">
                                <input type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div class="input-form-content">
                                <input type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div class="input-form-content">
                                <input type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div class="input-form-content">
                                <button>Sign Up</button>
                            </div>
                            <div class="input-form-content account-confirm">
                                <p>Already have an account? <a href="javascript:void(0)" onClick={openLogin}>Log in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Header;