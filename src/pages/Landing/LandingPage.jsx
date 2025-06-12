import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#121212] via-[#257406] to-[#7fe0a1] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
