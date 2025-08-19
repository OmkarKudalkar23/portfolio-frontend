import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <>
    <section
      id="about-section"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0f1525] px-8 py-20 gap-30"
      style={{ scrollMarginTop: "8rem" }}
    >
      <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-16 flex items-center justify-center">
        

        <motion.div
          className="w-[24vw] h-[45vh] rounded-full overflow-hidden shadow-2xl border-4 border-[#29D8FF] bg-[#181e2a] flex items-center justify-center"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 40px #29D8FF88" }}
        >
          <motion.img
            src="/src/assets/omkar1jpg.jpg"
            alt="Your portrait"
            className="object-cover w-full h-full "
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.13 }}
          />
        </motion.div>
      </div>
      {/* Text Section */}
      <div className="max-w-2xl text-white flex flex-col gap-6">
        <h2 className="font-['OrbitronBold'] text-7xl mb-4 md:mb-6 text-[#29D8FF] tracking-wider">
          About Me
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#29D8FF] to-[#0ae449] rounded-full mb-6 md:mb-8"></div>
        <p className="text-2xl leading-relaxed text-zinc-300 mb-2 md:mb-4">
          {/* Edit this text to describe yourself */}
          Hi! I'm <span className="text-[#0ae449] font-semibold">Omkar Kudalkar</span>, a passionate developer with a love for building interactive and visually stunning web experiences. My expertise includes React, Tailwind CSS, Three.js, and Node.js. I enjoy solving complex problems and bringing creative ideas to life through code.
        </p>
        <p className="text-2xl leading-relaxed text-zinc-400">
          When I'm not coding, you can find me exploring new technologies, gaming, or working on side projects. I'm always eager to learn and collaborate on exciting ventures!
        </p>
      </div>
    
    </section>
    <div className="w-full flex flex-col gap-22 mt-32 px-10 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-32 py-10">
        {/* Text Left */}
        <motion.div
          className="flex-1  mb-8 md:mb-0 md:ml-24"
          style={{ marginLeft: "6rem" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="font-['OrbitronBold'] text-6xl text-[#fa6d86] mb-6">
            🚀 Top 10 in MegaHack
          </h3>
          <p 
          style={{
            marginTop :"2rem"
          }}
          className="text-4xl text-zinc-300 mb-4">
           Came under Top-10 at  <span className="text-[#29D8FF] font-['Urbanist']">MegaHack 5.0</span> for building an AI-powered web app that helps students learn interactively.
          </p>
          <p 
          style={{
            marginTop:"2rem"
          }}
          className="text-2xl text-zinc-400">
            Collaborated with a team of 4, implemented real-time features using React and Node.js, and presented to a panel of industry experts.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            marginRight :"6.4rem"
          }}
        >
          <img
            src="/src/assets/megahack.jpg"
            alt="Hackathon Trophy"
            className="w-[560px] h-[370px] object-cover rounded-3xl shadow-2xl border-4 border-[#fa6d86] bg-[#181e2a] mx-auto"
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-20 md:gap-32 py-10">
        <motion.div
          className="flex-1 text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginRight: "6rem" }}
        >
          <h3 className="font-['OrbitronBold'] text-6xl text-[#0ae449] mb-6">
            🌟Rank 15 at IEEE SPIT Codehunt
          </h3>
          <p 
          style={{
            marginTop :"2rem"
          }}
          className="text-3xl text-zinc-300 mb-4">
          Out of 120 Teams at <span className="text-[#29D8FF] font-semibold">Competitve Programming Competition</span> at SPIT By solving 3/4 problems on hackerank 
          </p>
          <p className="text-lg text-zinc-400">
            My pull requests were merged into the main branch, and I actively participate in code reviews and community discussions.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginLeft: "2rem" }}
        >
          <img
            src="/src/assets/spit.jpg"
            alt="Open Source Contribution"
            className="w-[560px] h-[370px] object-cover rounded-3xl shadow-2xl border-4 border-[#0ae449] bg-[#181e2a] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  
  </>
  );
};

export default About;
