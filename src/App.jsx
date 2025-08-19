import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Marquee from "./components/Marquee";
import LandingPage from "./components/LandingPage";
import CardSection from "./components/CardSection";
import SmokeyCursor from "./components/lightswind/SmokeyCursor";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ChatBot from "./components/ChatBot";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      {/* Smokey Cursor Global */}
      <SmokeyCursor
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* ChatBot fixed outside scroll container */}
      <div
  className="chatbot-wrapper"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "-220px",
    zIndex: 10001, // higher than SmokeyCursor
  }}
>
  <ChatBot />
</div>

      {/* Main scroll container */}
      <Router>
        <NavBar />
        <div data-scroll-container ref={containerRef}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <Marquee />
                  <CardSection />
                  <ContactForm />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
