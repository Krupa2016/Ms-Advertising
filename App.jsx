import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Work from "./Work";
import BrandIdentity from "./BrandIdentity";
import EbookBrochure from "./EbookBrochure";
import Illustration from "./Illustration";
import PrintDesign from "./PrintDesign";
import UIDesign from "./UIDesign";
import Presentation from "./Presentation";
import Motion from "./MotionDesign";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import PackagingDesign from "./PackagingDesign"
import "./index.css";
import  { useEffect } from "react"; // <-- Add this import
import ContactPage from "./components/Contact/ContactPage"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Set the duration of the animation
      once: true,     // Optional: To make sure it animates only once
      offset: 200,    // Optional: Control when the animation starts
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar/> 
            <Routes>
 
             <Route path="/work" element={<Work />} />       
             <Route path="/brand-identity" element={<BrandIdentity />} />       
             <Route path="/ebooks" element={<EbookBrochure />} />      
             <Route path="/illustrations" element={<Illustration />} /> 
             <Route path="/print" element={<PrintDesign />} />
             <Route path="/uidesign" element={<UIDesign />} />
             <Route path="/presentation" element={<Presentation />} />
             <Route path="/motion" element={<Motion />} />
             <Route path="/about" element={<About />} />
             <Route path="/" element={<Home />} />
            <Route path="/packaging" element={<PackagingDesign />} />
            <Route path="/contact" element={<ContactPage />} />
            </Routes>
        <Footer/>
      </Router>
    

    </>
  )
}

export default App
