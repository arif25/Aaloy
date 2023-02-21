import React from "react";

const Homebannercontents = () => {
    return(
        <section className="secHomebannercontents">
            <div className="container">
                <div className="titleHoemBanner">Find a home you'll <span>Love</span></div>
                <div className="listHoemBanner">
                    <ul>
                        <li>Buy</li>
                        <li>Rent</li>
                        <li>PG</li>
                        <li>Plot</li>
                        <li>Commercial</li>
                        <li>Post free PropertyAd</li>
                    </ul>
                </div>
                <div className="searchboxHoemBanner">
                    <div className="searchFormAddress">
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <input type="text" placeholder="enter city, location" />
                    </div>
                    <div className="searchFormItem">
                        <span><i className="fa fa-home" aria-hidden="true"></i></span>
                        <input type="text" placeholder="flat +1" />
                    </div>
                    <div className="searchFormBudget">
                        <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                        <select>
                            <option>1 LAKH</option>
                            <option>2 LAKH</option>
                            <option>3 LAKH</option>
                        </select>
                    </div>
                    <div className="searchFormButton">
                        <span><i className="fa fa-search" aria-hidden="true"></i></span>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homebannercontents;
