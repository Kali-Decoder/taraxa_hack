import React from "react";
import Top from "../components/LandingPageUtils/Top";
import Navbar from "../components/LandingPageUtils/Navbar";
import Home from "../components/LandingPageUtils/Home";
import Features from "../components/LandingPageUtils/Features";
import About from "../components/LandingPageUtils/About";
import Solutions from "../components/LandingPageUtils/Solutions";
import RoadMap from "../components/LandingPageUtils/RoadMap";
import Faq from "../components/LandingPageUtils/Faq";
import Footer from "../components/LandingPageUtils/Footer";
import BackGradients from "../components/LandingPageUtils/BackGradients";
const LandingPage = () => {
  return (
    <>
      <div className="-z-30 back-light transition-all">
        <Top />
        <Navbar />
        <Home />
        <Features />
        <About />
        <Solutions />
        <RoadMap />
        <Faq />
        <Footer />
        <BackGradients page="home" />
      </div>
    </>
  );
};

export default LandingPage;
