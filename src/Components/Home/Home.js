import React from "react";
import Header from "../Header/Header";
import Homebanner from "./HomeBanner";
import HomeWatchVideo from "./HomeWatchVideo";
import Searchlocations from "./SearchLocations";
import "../Assets/Scss/HomePage.scss";
import HomePWProperties from "./HomePWProperties";
import HomeService from "./HomeServices";
import HomeBestProperties from "./HomeBestProperties";
import Footer from "../Footer/Footer";

const Home = () => {
    return(
        <>
            <Header />
            <Homebanner />
            <Searchlocations />
            <HomeWatchVideo />
            <HomePWProperties />
            <HomeService />
            <HomeBestProperties />
            <Footer />
        </>
    );
}

export default Home;