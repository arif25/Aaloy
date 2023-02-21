import React from "react";
import pro2 from "../Assets/Images/pro-2.jpg";
import iconCloseGray from "../Assets/Images/icon-close-gray.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import $ from "jquery";
import "../Assets/Scss/Propertyadd.scss";

const Propertyadd = ()=>{
    const openNearbyPopup =()=>{
        $("#secNearbypopup").fadeIn(500);
    }
    const closeNearbyPopup = ()=>{
        $("#secNearbypopup").fadeOut(500);
    }
    return (
        <>
            <Header />
            <section className="sec-propertyadd">
                <div className="container">
                    <div className="title-propertyadd">Property Add</div>
                    <div className="bx-propertyadd">
                        <form action="#">
                            <div class="user_details">
                                <div className="bx-user_details">
                                    <div className="width-50">                                    
                                        <div class="input__box">
                                            <div class="details">Full Name</div>
                                            <input type="text" placeholder="E.g: John Smith" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="bx-user_details">
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="bx-user_details">
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-50">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="bx-user_details">
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-25">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="bx-user_details">
                                    <div className="width-50">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-50">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="bx-user_details">
                                    <div className="width-50">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                    <div className="width-50">
                                        <div class="input_box">
                                            <div class="details">Phone Number</div>
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="bx-user_details">
                                    <ul>
                                        <li>
                                            <img src={pro2} />
                                        </li>
                                        <li>
                                            <img src={pro2} />
                                        </li>
                                        <li>
                                            <img src={pro2} />
                                        </li>
                                        <li>
                                            <img src={pro2} />
                                        </li>
                                        <li>
                                            <img src={pro2} />
                                        </li>
                                        <li>
                                            <img src={pro2} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="bx-user_details">
                                    <div className="upload_nearby">
                                        <div className="uploadImage">
                                            <span></span>
                                            <span>Upload image</span>
                                        </div>
                                        <div className="uploadImage nearby-facilities" onClick={openNearbyPopup}>
                                            <a href="javascript:void(0)">Nearby Facilities</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bx-user_details">
                                <div class="bx-buttons">
                                    <button>Submit</button>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
            {/* Login popup */}
            <section className="sec-loginpopup sec-NearbyPopup" id="secNearbypopup">
                <div className="opacity-loginpopup"></div>
                <div className="bx-popup">
                    <div className="close-btn-popup" onClick={closeNearbyPopup}>
                        <img src={iconCloseGray} />
                    </div>
                    <div className="title-popup">
                        <div className="bigtitle">Nearby Facilities</div>
                        <div className="titleDetails">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</div>
                    </div>
                    <div className="content-popup">
                        <div className="form-content-popup">
                            <div class="input-form-content input-nearby input-upload">
                                <input type="text" placeholder="E.g: John Smith" required />
                                <div className="upload-inputnear">icon</div>
                            </div>
                            <div class="input-form-content input-nearby input-add">
                                <input type="text" placeholder="E.g: John Smith" required />
                                <div className="plus-icon">+</div>
                            </div>
                            <div class="input-form-content input-nearby input-upload">
                                <input type="text" placeholder="E.g: John Smith" required />
                                <div className="upload-inputnear">icon</div>
                            </div>
                            <div class="input-form-content input-nearby input-add">
                                <input type="text" placeholder="E.g: John Smith" required />
                                <div className="plus-icon">D icon</div>
                            </div>
                            <div class="input-form-content">
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Propertyadd;