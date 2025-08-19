
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ContactForm = () => {
  const contactRef = useRef(null);
  const locoInstance = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      locoInstance.current = new LocomotiveScroll({
        el: contactRef.current,
        smooth: true,
        multiplier: 1,
      });
    }
    return () => {
      if (locoInstance.current) {
        locoInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div
        ref={contactRef}
        data-scroll-container
      
        
      >
        <div
        data-scroll
        data-scroll-speed="-2"
        
        
        className="contact-container w-full min-h-screen flex flex-row items-center justify-evenly ">
        <form
          action="https://api.web3forms.com/submit" method="POST"
          className="contact-left flex flex-col items-start gap-10"
        >
          <div className="contact-title">
            <h2 className=" text-7xl mb-5 font-['OrbitronBold'] text-[#a363aa] ">
              Get In Touch
            </h2>
            <hr className="border-none bg-red-500 w-40 h-2 rounded-lg " />
          </div>
          <input type="hidden" name="access_key" value= "13e13312-1342-4c5b-b279-d58942322121" />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="contact-inputs bg-white w-[400px] placeholder-black h-14 border-2 outline-none px-25 text-zinc-300 rounded-2xl  focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your E mail"
            className="contact-inputs  bg-white  w-[400px] placeholder-black h-14 border-2 outline-none px-25 text-zinc-300 rounded-2xl  focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs  bg-white resize-none w-[400px] placeholder-black h-44 border-2 outline-none px-25 text-zinc-300 rounded-2xl  focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none"
            required
          ></textarea>
          <button style={{
             padding : "15px 30px",
             color : "white",
             fontSize:"16px",
             borderRadius :"50px",
             border :"none",
             background :"linear-gradient(270deg ,#ff9994 , #fa6d86)",

          }} type="submit" className="font-['Orbitron']">Submit</button>
        </form>
        <div className="contact-right">
          <img src="./src/assets/right_img.png" alt="" />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default ContactForm;
