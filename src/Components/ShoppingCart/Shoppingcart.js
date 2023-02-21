import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Assets/Scss/Shoppingcart.scss";
import pro2 from "../Assets/Images/pro-2.jpg";

const Shoppingcart = ()=>{
    return(
        <section className="sec-soppingcart">             
            <Header />      
                <aside className="asi-breadcrump">
                    <div className="container">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#" className="active">Thank you</a></li>
                        </ul>
                    </div>
                </aside>
                <section className="sec-bodyShoppingCart">
                    <div className="container">
                        <div className="body-shopping">
                            <div className="bx-shoppingcart">
                                <div className="title-shopping">
                                    <div className="text-shopping">Shopping Cart</div>
                                    <div className="deselect-Price">
                                        <div className="link-deselect-items"><a href="#">Deselect All items</a></div>
                                        <div className="text-price">Price</div>
                                    </div>
                                </div>
                                <div className="bx-list-items">
                                    <ul>
                                        <li>
                                            <div className="content-list-items">
                                                <div className="check-items">
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="content-imagebox">
                                                    <img src={pro2} />
                                                </div>
                                                <div className="content-details">
                                                    <div className="content-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                                    <div className="content-instock">Only 2 left in Stock</div>
                                                    <div className="content-pattern">Pattern: 1 BHK</div>
                                                    <div className="content-qty-Del-See">
                                                        <div className="select-qty">
                                                            <select>
                                                                <option>Qty 1</option>
                                                                <option>Qty 2</option>
                                                                <option>Qty 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="item-delete">
                                                            <a href="#">Delete</a>
                                                        </div>
                                                        <div className="item-delete">
                                                            <a href="#">See more like this</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-price">$ 108338.10</div>
                                        </li>
                                        <li>
                                            <div className="content-list-items">
                                                <div className="check-items">
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="content-imagebox">
                                                    <img src={pro2} />
                                                </div>
                                                <div className="content-details">
                                                    <div className="content-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                                    <div className="content-instock">Only 2 left in Stock</div>
                                                    <div className="content-pattern">Pattern: 1 BHK</div>
                                                    <div className="content-qty-Del-See">
                                                        <div className="select-qty">
                                                            <select>
                                                                <option>Qty 1</option>
                                                                <option>Qty 2</option>
                                                                <option>Qty 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="item-delete">
                                                            <a href="#">Delete</a>
                                                        </div>
                                                        <div className="item-delete">
                                                            <a href="#">See more like this</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-price">$ 108338.10</div>
                                        </li>
                                        <li>
                                            <div className="content-list-items">
                                                <div className="check-items">
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="content-imagebox">
                                                    <img src={pro2} />
                                                </div>
                                                <div className="content-details">
                                                    <div className="content-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                                    <div className="content-instock">Only 2 left in Stock</div>
                                                    <div className="content-pattern">Pattern: 1 BHK</div>
                                                    <div className="content-qty-Del-See">
                                                        <div className="select-qty">
                                                            <select>
                                                                <option>Qty 1</option>
                                                                <option>Qty 2</option>
                                                                <option>Qty 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="item-delete">
                                                            <a href="#">Delete</a>
                                                        </div>
                                                        <div className="item-delete">
                                                            <a href="#">See more like this</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-price">$ 108338.10</div>
                                        </li>
                                    </ul>
                                    <div className="items-subtotal">
                                        Subtotal (2 items): <span>$ 17833.10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bx-your-items">
                                <div className="title-shopping">
                                    <div className="text-shopping">Your items</div>
                                </div>
                                <div className="content-your-items">
                                    <ul>
                                        <li>
                                            <div className="bx-img-content-your-item">
                                                <div className="img-your-item">
                                                    <img src={pro2} />
                                                </div>
                                                <div className="content-your-item">
                                                    <div className="address-your-item">Jadavpur (89), 108 Km ip</div>
                                                    <div className="type-your-item">2 BHK/ 1 Bathroom</div>
                                                    <div className="price-your-item">$ <span>45,000</span> | 1800 sqft</div>
                                                    <div className="booknow-your-item">Book now : 2,999</div>
                                                    <div className="postedby-your-item">Posted By Broker</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="bx-img-content-your-item">
                                                <div className="img-your-item">
                                                    <img src={pro2} />
                                                </div>
                                                <div className="content-your-item">
                                                    <div className="address-your-item">Jadavpur (89), 108 Km ip</div>
                                                    <div className="type-your-item">2 BHK/ 1 Bathroom</div>
                                                    <div className="price-your-item">$ <span>45,000</span> | 1800 sqft</div>
                                                    <div className="booknow-your-item">Book now : 2,999</div>
                                                    <div className="postedby-your-item">Posted By Broker</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="bx-img-content-your-item">
                                                <div className="img-your-item">
                                                    <img src={pro2} />
                                                </div>
                                                <div className="content-your-item">
                                                    <div className="address-your-item">Jadavpur (89), 108 Km ip</div>
                                                    <div className="type-your-item">2 BHK/ 1 Bathroom</div>
                                                    <div className="price-your-item">$ <span>45,000</span> | 1800 sqft</div>
                                                    <div className="booknow-your-item">Book now : 2,999</div>
                                                    <div className="postedby-your-item">Posted By Broker</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                        <div className="right-shopping">
                            <div className="bx-subtotal">
                                <div className="checkbox-content">
                                    <div className="checkbox-input">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="checkbox-text">
                                        Lorem Ipsum is simply dummy text of the printing and type.
                                    </div>
                                </div>
                                <div className="subtotal-price">
                                    subtotal : <span>$ 178338.10</span>
                                </div>
                                <div className="btn-subtotal">
                                    <a href="#">Proceed to Buy</a>
                                </div>
                            </div>
                            <div className="bx-explore-more-items">
                                <div className="title-more-title">More items to Explore</div>
                                <ul>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of</p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of</p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-explore-items">
                                            <img src={pro2} />
                                        </div>
                                        <div className="content-explore-items">
                                            <p>Lorem Ipsum is simply dummy text of </p>
                                            <div className="btn-explore-items">
                                                <a href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </section>
            <Footer />
        </section>
    );
}

export default Shoppingcart;