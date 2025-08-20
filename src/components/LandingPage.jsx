import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
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
    // ---------------- MAIN SCENE ----------------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;

    // HDRI Env
    new RGBELoader()
      .setPath("/")
      .load("pond_bridge_night_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        
      });

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms["amount"].value = 0.0015;
    composer.addPass(rgbShiftPass);

    // Helmet Model
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

    // ---------------- ORBIT OBJECTS ----------------
    const orbitObjects = [];

    const createOrbitMesh = (geometry, color, radius, speed, angleOffset) => {
      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(geometry, mat);
      scene.add(mesh);
      orbitObjects.push({ mesh, radius, speed, angle: angleOffset });
    };

    // Icosahedron
createOrbitMesh(
  new THREE.IcosahedronGeometry(0.5, 0), // radius 0.5, detail 0
  0xff0040, // color
  2.2,      // orbit radius
  0.007,    // orbit speed
  0         // initial angle
);

// Octahedron
createOrbitMesh(
  new THREE.OctahedronGeometry(0.4, 0), // radius 0.4, detail 0
  0x00ffff, // color
  2.5,      // orbit radius
  0.008,    // orbit speed
  Math.PI / 2 // initial angle
);

// Torus
createOrbitMesh(
  new THREE.TorusGeometry(0.5, 0.15, 16, 50),
  0x00ff00, // color
  3,        // orbit radius
  0.006,    // orbit speed
  Math.PI   // initial angle
);


    // ---------------- INTERACTION ----------------
    const handleMouseMove = (e) => {
      if (!modelRef.current) return;
      const rotationX = (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.14);
      const rotationY = (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.14);

      gsap.to(modelRef.current.rotation, {
        x: rotationY,
        y: rotationX,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ---------------- RESIZE ----------------
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ---------------- ANIMATION ----------------
    const animate = () => {
      requestAnimationFrame(animate);

      orbitObjects.forEach((obj) => {
        obj.angle += obj.speed;
        //Rotate karne ke liye XZ plane mein Orbit in X–Z plane
        //obj.radius i the object ki distance from the centre (i.e helmet)
        obj.mesh.position.x = Math.cos(obj.angle) * obj.radius; // X = r cos theta
        obj.mesh.position.z = Math.sin(obj.angle) * obj.radius; // Z = r sin theta 
        obj.mesh.position.y = Math.sin(obj.angle ) * 0.8 // vertical wobble
        obj.mesh.rotation.x += 0.01;
        obj.mesh.rotation.y += 0.01;
      });

      composer.render();
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main w-full bg-black">
      {/* Navbar */}
      <div className="neon-particles h-screen">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <NavBar />

      {/* 3D Helmet Scene */}
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

        {/* Overlay Image */}
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
          className="bg-red-500 z-[999] relative left-1/2 top-1/2"
        >
          Scroll Down ↓
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

export default LandingPage;