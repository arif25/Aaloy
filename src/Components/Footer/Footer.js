import React from "react";
import "../Assets/Scss/Footer.scss";
import logogoogle from "../Assets/Images/logo-google-play.png";
import logoappstore from "../Assets/Images/logo-app-store.png";
import iconfacebook from "../Assets/Images/icon-facebook.png";

import iconTwitter from "../Assets/Images/icon-twitter.png";
import iconLinkedin from "../Assets/Images/icon-linkedin.png";
import iconYoutube from "../Assets/Images/icon-youtube.png";
import iconInstagram from "../Assets/Images/icon-instagram.png";

const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="footer-about-propertieslink">
                    <div className="aboutcontent">
                        <h4>About us</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <aside className="asi-social-download-app">
                            <div className="btns-download-app">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src={logogoogle} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={logoappstore} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-btns">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src={iconfacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={iconTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={iconLinkedin} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={iconYoutube} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={iconInstagram} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div className="propertieslink">
                        <div className="content-projects-india">
                            <h4>Properties in india</h4>
                            <div>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">is simply dummy text</a>
                                <a href="#">of the printing and</a>
                                <a href="#">typesetting industry</a>
                                <a href="#">standard dummy text ever</a>
                                <a href="#">when an unknown printer</a>
                            </div>
                        </div>
                        <div className="content-projects-india content-new-projects-india">
                            <h4>Properties in india</h4>
                            <div>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">is simply dummy text</a>
                                <a href="#">of the printing and</a>
                                <a href="#">typesetting industry</a>
                                <a href="#">standard dummy text ever</a>
                                <a href="#">when an unknown printer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="sec-footer-links">
                <div className="container">
                    <ul>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Unsubscribe</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Sales Enquiry</a></li>
                        <li><a href="#">Buy our Services</a></li>
                    </ul>
                </div>
            </section>
            <section className="sec-desclaimer">
                <div className="container">
                    <p>Desclaimer: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now</p>
                </div>
            </section>
            <section className="sec-copyright">
                <div className="container">
                    <p>will be distracted by the readable content of a page <a href="#">when looking</a></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;