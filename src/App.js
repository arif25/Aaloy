import React from "react";
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
      <Propertyadd />
    </div> 
  );
}

export default App;
