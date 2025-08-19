// LandingPage.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import NavBar from "./NavBar";

const LandingPage = () => {
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;

    new RGBELoader()
      .setPath("/")
      .load("pond_bridge_night_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      });

    // Postprocessing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms["amount"].value = 0.0015;
    composer.addPass(rgbShiftPass);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      "/DamagedHelmet.gltf",
      (gltf) => {
        modelRef.current = gltf.scene;
        scene.add(modelRef.current);
      },
      undefined,
      (error) => console.error("Error loading GLTF model:", error)
    );

    // Mouse rotation
    const handleMouseMove = (e) => {
      if (!modelRef.current) return;
      const rotationX =
        (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.14);
      const rotationY =
        (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.14);

      gsap.to(modelRef.current.rotation, {
        x: rotationY,
        y: rotationX,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive NavBar wrapper styles
  // For your own screen (e.g., desktop), keep original size.
  // For smaller screens, adjust padding, font size, etc.
  // You can further tweak breakpoints as needed.
  return (
    <div 
    data-scroll
    data-scroll-speed = "-2"
    className="main w-full bg-black">
      {/* Navbar */}
      <div className="neon-particles h-screen">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Responsive NavBar wrapper */}
      <div
        className="
          w-full
          z-50
          fixed
          top-0
          left-0
          flex
          justify-center
          items-center
          pointer-events-none
        "
        style={{
          // This ensures the NavBar stays at the top and is always visible
        }}
      >
        <div
          className={`
            pointer-events-auto
            w-full
            max-w-7xl
            px-8
            py-4
            ${/* On small screens, reduce padding and font size */""}
            sm:px-4 sm:py-2
          `}
          style={{
            // Desktop: keep original size, mobile: scale down
            // You can further adjust these values as needed
          }}
        >
          
        </div>
      </div>

      {/* 3D Scene */}
      <div className="w-full h-screen overflow-hidden relative flex items-center justify-center">
        <canvas id="draw" ref={canvasRef}></canvas>

        {/* Glow */}
        <div
          className="absolute"
          style={{
            zIndex: 0,
            width: "30vw",
            height: "50vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="rounded-full bg-blue-500"
            style={{
              width: "100%",
              height: "100%",
              filter: "blur(120px)",
              opacity: 0.7,
            }}
          ></div>
        </div>

        {/* Helmet Image */}
        <img
          className="glitch-img absolute z-20 blend-image"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "saturate(2) contrast(1)",
            width: "60vw",
            height: "70vh",
            objectFit: "cover",
          }}
          src="/cyberomkar.png"
          alt=""
        />

      </div>
      <div className="absolute w-full">
<button
  id="scrollBtn"
  onClick={handleScroll}
  className="fixed top-210 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce z-[9999]"
>
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-zinc-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


      </div>
      
      {/* Section Below */}
      <div
        className="w-full h-1/2 relative"
        style={{ backgroundColor: "#0F1525" }}
      >
        <div
          className="w-full h-40 absolute top-0 left-0 "
          style={{
            backgroundImage: "linear-gradient(to bottom, black, #0F1525)",
          }}
        ></div>
        
      </div>
      
    </div>
  );
};

export default LandingPage;
