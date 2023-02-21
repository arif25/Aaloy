import React from "react";
import "../Assets/Scss/Termsandcondition.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Termsandcondition = () => {
    return(
        <section>  
            <Header />          
            <aside className="asi-breadcrump">
                <div className="container">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">Terms and Condition</a></li>
                    </ul>
                </div>
            </aside>
            <section className="sec-termsandcondition">
                <div className="container">
                    <div className="title-termsCondition">
                        Terms of use
                    </div>
                    <div className="content-termsAndCondition">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.<br /> of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset<br /><br /> sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li>It was popularised in the 1960s with the release</li>
                            <li>the release of Letraset</li>
                            <li>It has roots in a piece of classical</li>
                            <li>Latin professor at Hampden-Sydney College in Virginia</li>
                            <li>Richard McClintock, a Latin professor</li>
                            <li>not only five centuries</li>
                        </ul>
                    </div>
                    <div className="title-termsCondition">
                        It has survived not only
                    </div>
                    <div className="content-termsAndCondition">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.<br /> of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset<br /><br /> sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
}

export default Termsandcondition;