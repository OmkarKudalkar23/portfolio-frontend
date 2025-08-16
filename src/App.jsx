// App.jsx or your page file
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Marquee from "./components/Marquee";
import LandingPage from "./components/LandingPage";
import CardSection from "./components/CardSection";
import SmokeyCursor from "./components/lightswind/SmokeyCursor";
import ProfileCard from "./components/lightswind/ProfileCard";

/*
  ISSUE EXPLANATION:
  SmokeyCursor is only working for the LandingPage because the <canvas> it renders is likely being covered up or not spanning the entire app.
  If you render <SmokeyCursor/> *inside* a page section (like LandingPage), it will only track mouse events for that section.
  To make it global, SmokeyCursor should be rendered at the top level of your app, outside the scroll container, and styled to cover the whole viewport.
  Also, ensure its canvas is not being visually covered by other absolutely/relatively positioned elements with higher z-index.
*/

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1, // adjust scroll speed
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      Render SmokeyCursor OUTSIDE the scroll container, so it covers the whole viewport
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
      <div data-scroll-container ref={containerRef}>
        <LandingPage />
        <Marquee />
        <CardSection />
       
      </div>
    </>
  );
}
