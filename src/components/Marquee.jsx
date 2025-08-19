import React from 'react'
import { motion } from 'motion/react';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function Marquee() {
  const rowClass =
    'w-full py-4 bg-[#0f1525] text-white overflow-hidden';

  return (
    
    <div data-scroll
    data-scroll-speed ="-0.1"
    style={{ marginTop: '15rem' }} id="about">
    
      <div style={{ marginLeft: '5rem', marginBottom: '10rem' }}>
  <motion.h1
    initial={{ opacity: 1, y: 20 }}
   
    transition={{ duration: 0.5 , delay:2 }}
    className='font-["OrbitronBold"] text-[6rem] text-white tracking-widest'
  >
    TECH STACK I USE:
  </motion.h1>
  <div className="w-[300px] h-[4px] bg-gradient-to-r from-[#29D8FF] to-[#0ae449] rounded-full"></div>
</div>
     
      <div className={rowClass}>
       
        <div
          className="flex whitespace-nowrap"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
        >
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            <span className='text-[#334155]'>REACT</span> · <span className='text-[#29D8FF]'>REACT</span>·  <span className='text-[#334155]'>REACT</span> ·
          </h1>
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            REACT · <span className='text-[#29d8ff]'>REACT</span> · <span className='text-[#334155]'>REACT</span> ·
          </h1>
        </div>
      </div>

      <div className={rowClass}>
        <div
          className="flex whitespace-nowrap"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-3"
        >
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            <span className='text-[#334155]'>TAILWIND</span> · <span className='text-[#0ae449]'>TAILWIND</span>·  <span className='text-[#334155]'>TAILWIND</span> ·
          </h1>
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            <span className='text-[#334155]'>TAILWIND</span> · <span className='text-[#0ae449]'>TAILWIND</span> ·<span className='text-[#334155]'>TAILWIND</span>
          </h1>
        </div>
      </div>

      <div className={rowClass}>
        <div
          className="flex whitespace-nowrap"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
        >
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            <span className='text-[#334155]'>THREE.JS</span> · THREE.JS ·
          </h1>
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            <span className='text-[#334155]'>THREE.JS</span> · THREE.JS ·
          </h1>
        </div>
      </div>

      <div className={rowClass}>
        <div
          className="flex whitespace-nowrap"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-3"
        >
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
             <span className='text-[#334155]'>NODE.JS</span> · <span className='text-[#ff7e33]'>NODE.JS</span>·  <span className='text-[#334155]'>NODE.JS</span> ·
          </h1>
          <h1 className='text-[8vw] px-6 leading-[0.8] font-["UrbanistBold"]'>
            NODE.JS · NODE.JS ·
          </h1>
        </div>
        
      </div>
      <div
        className="w-full h-1/2 relative"
        style={{ backgroundColor: "#0F1525" }}
      >
        <div
          className="w-full h-40 absolute top-0 left-0 "
          style={{
            backgroundImage: "linear-gradient(to bottom, #0F1525, black)",
          }}
        ></div>
        
      </div>
      
    </div>
  );
}

export default Marquee;
