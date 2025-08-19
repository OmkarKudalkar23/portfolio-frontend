import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// ✅ Reusable GitHub Icon
const GithubIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.421-.012 2.751 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);

// ✅ Classes

// ✅ Single Card Component
const ProjectCard = ({ proj }) => (
  <motion.div
  data-scroll
  whileHover={{ scale: 1.05, boxShadow: "0 0 40px 10px #00000088" }}
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 10;
    card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    card.style.boxShadow = "0 0 40px 10px #00000088";
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
    card.style.boxShadow = "0 0 0 0 #00000033";
  }}
  style={{
    margin: "0 2.5rem",
    cursor: "pointer",
    backgroundColor: "#000",
    borderRadius: "1.5rem",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* Project Title */}
  <div style={{ padding: "1rem", textAlign: "center" }}>
    <textarea
      style={{
        width: "100%",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "600",
        resize: "none",
        outline: "none",
        border: "none",
        minHeight: "2.5rem",
        maxHeight: "4rem",
      }}
      defaultValue={proj.name}
    />
  </div>

  {/* Image */}
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      padding: "1rem",
      position: "relative",
    }}
  >
    <img
      src={proj.img_url}
      alt={proj.alt}
      style={{
        width: "100%",
        objectFit: "cover",
        borderRadius: "1rem",
        maxHeight: "320px",
        height: "auto",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      }}
    />

    {/* Buttons */}
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "1rem",
        padding: "1rem",
        marginTop: "1rem",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderBottomLeftRadius: "1.5rem",
        borderBottomRightRadius: "1.5rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        <GithubIcon /> Github
      </button>
      <button
      
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          
        }}
      >
        <a href={proj.proj_url}> View Demo</a>
      </button>
    </div>
  </div>

  {/* Glow effect */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      boxShadow: "0 0 60px 10px #00000055",
      borderRadius: "1.5rem",
      opacity: 0.5,
      filter: "blur(8px)",
    }}
  />
</motion.div>

);

// ✅ Main Page
export default function MyPage() {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    // ✅ Init locomotive
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.08,
      });
    }

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgRBc0-aMmLQLPwJorv05dQM3THT8PqpuDcvy9LeFsDJ4v3mLHzjVXPjvbkIuCNRq2jmMFwvzVHdJvxovvz9NZ4c5s-dTu1tVDVr1Tke4_J0B3do5W1qyubX_xzcAr2kJteup-Bh39iZSIdvzIQEzYoJ07Y9AZ8ek9FBJluvkn3-aKpOwjymAFxuO9JzhHua1WL0VVa_BRhyX3A40qtu0UkiqwzqlQOHLMEp8JfjxxxQcMRv7-3hu5jza-uqtblLuR9qDPPK7TMC2p4rJQH6D5jLDNQ3Q&lib=MU6E5zuBsyMZxO2hdaB6BQI-d5P39dUX7"
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.data);
        if (scrollInstance.current) {
          scrollInstance.current.update(); // ✅ refresh loco after data load
        }
      });
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen bg-black"
      style={{ marginTop: "9rem" }}
    >
      {/* Header */}
      <div style={{ marginLeft: "5rem", marginBottom: "10rem" }}>
        <motion.h1
          data-scroll
          initial={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='font-["OrbitronBold"] text-[6rem] text-white tracking-widest'
        >
          MY PROJECTS:
          <div 
       
        
        className="w-[300px] h-[4px] bg-gradient-to-r from-[#29D8FF] to-[#0ae449] rounded-full"></div>
        </motion.h1>
        
      </div>
  
      {/* Cards in rows of 2 */}
      <div className="flex flex-col gap-16 px-8">
        {projects
          .reduce((rows, proj, i) => {
            if (i % 2 === 0) rows.push([proj]);
            else rows[rows.length - 1].push(proj);
            return rows;
          }, [])
          .map((row, rowIdx) => (
            <div
              className="flex gap-0 justify-center"
              key={rowIdx}
              data-scroll
              data-scroll-speed="1"
            >
              {row.map((proj) => (
                <ProjectCard key={proj.name} proj={proj} />
              ))}
            </div>
          ))}
      </div>
      <div
        className="w-full h-1/2 relative"
        style={{ backgroundColor: "#0F1525" }}
      >
        <div
          className="w-full h-40 absolute top-0 left-0 "
          style={{
            backgroundImage: "linear-gradient(to bottom,black,  #0F1525)",
          }}
        ></div>
        
      </div>
      
    </div>
  );
  
}
