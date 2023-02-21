import React from "react";
import "../Assets/Scss/Termsandcondition.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import iconThanks from "../Assets/Images/tick-thanks.png";

const Thankyou = () => {
    return(
        <section>  
            <Header />          
            <aside className="asi-breadcrump">
                <div className="container">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">Thank you</a></li>
                    </ul>
                </div>
            </aside>
            <section className="sec-termsandcondition">
                <div className="container">
                    <div className="content-Thankyou">
                        <div className="icon-thankyou">
                            <img src={iconThanks} />
                        </div>
                        <h3>Thank <span>you</span></h3>
                        <p>Lorem Ipsum is simply dummy</p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
}

export default Thankyou;