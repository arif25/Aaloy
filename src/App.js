import React from "react";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes, } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./Components/Assets/Scss/Common.scss";
import Contactus from "./Components/Contactus/Contactus";
import Termsandcondition from "./Components/Termsandcondition/Termsandcondition";
import Propertylisting from "./Components/Propertylisting/Propertylisting";
import Myproperty from "./Components/Propertylisting/Myproperty";
import Propertydetails from "./Components/Propertylisting/Propertydetails";
import Thankyou from "./Components/Termsandcondition/Thankyou";
import Shoppingcart from "./Components/ShoppingCart/Shoppingcart";
import Propertyadd from "./Components/Propertyadd/Propertyadd";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Contactus /> */}
      {/* <Termsandcondition /> */}
      {/* <Propertylisting /> */}
      {/* <Myproperty /> */}
      {/* <Propertydetails /> */}
      {/* <Thankyou /> */}
      {/* <Shoppingcart /> */}
      {/* <Propertyadd /> */}

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/termsandcondition" element={<Termsandcondition />} />
              <Route path="/propertylisting" element={<Propertylisting />} />
              <Route path="/myproperty" element={<Myproperty />} />
              <Route path="/propertydetails" element={<Propertydetails />} />
              <Route path="/shoppingcart" element={<Shoppingcart />} />
              <Route path="/propertyadd" element={<Propertyadd />} />
              <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
     </BrowserRouter>
    </div> 
  );
}

export default App;
