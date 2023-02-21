import React from "react";
import "../Assets/Scss/Contactus.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import photocontact from "../Assets/Images/pro-1.jpg";

const Contactus = () => {
    return(
        <>
        <Header />
        <section className="sec-contactus" >
            <aside className="asi-gmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14736.363660571635!2d88.35306525!3d22.57570275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674467183846!5m2!1sen!2sin"></iframe>
            </aside>
            <aside className="asi-breadcrump">
                <div className="container">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">Contact us</a></li>
                    </ul>
                </div>
            </aside>
            <aside className="asi-contactbx">
                <div className="container">
                    <div className="title-contact">
                        {/* <h4>lorem dummy us</h4> */}
                        <h4>Contact us</h4>
                    </div>
                    <div className="bx-contact-leftright">
                        <div className="left-contactbx">
                            <div className="content-contact">
                                <ul>
                                    <li>
                                        <div className="icon-contact">icon</div>
                                        <div className="text-contact">awer wert tf asdf wefcxswef wergvc</div>
                                    </li>
                                    <li>
                                        <div className="icon-contact">icon</div>
                                        <div className="text-contact">awer wert tf asdf wefcxswef wergvc</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="photo-contact">
                                {/* Image */}
                                <img src={photocontact} />
                            </div>
                        </div>
                        <div className="right-contactbx">
                            <form>
                                <div className="bxinput">
                                    <input type="text" name="username" placeholder="Name"/>
                                </div>
                                <div className="bxinput">
                                    <input type="text" name="email" placeholder="Email"/>
                                </div>
                                <div className="bxinput">
                                    <textarea rows="4" cols="50">Message</textarea>
                                </div>
                                <div className="bxinput">
                                    <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
        </section>        
        <Footer />
        </>
    );
}

export default Contactus;