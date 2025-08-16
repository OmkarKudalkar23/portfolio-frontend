import GlowingCards, { GlowingCard } from "./lightswind/GlowingCards";
import { motion } from "motion/react";

export default function MyPage() {
  // Button style: slightly reduced width, increased height
  const buttonClass =
    "w-2/5 py-10 text-2xl rounded-2xl font-bold bg-[#29D8FF] text-white shadow-md hover:bg-[#1bb3d6] transition flex-1 flex items-center justify-center";
  const buttonClassAlt =
    "w-2/5 py-10 text-2xl rounded-2xl font-bold bg-[#0ae449] text-white shadow-md hover:bg-[#08b63a] transition flex-1 flex items-center justify-center";

  // Card bottom section style to ensure full coverage
  const cardBottomClass =
    "flex w-full h-1/4 min-h-[120px] items-center justify-center gap-8 px-8 pb-8 pt-8 bg-[#181c24]";

  return (
    <div className="w-full min-h-screen bg-black" style={{ marginTop: '9rem' }} >
      {/* Row 1 - moves left */}
      <div style={{ marginLeft: '5rem', marginBottom: '10rem' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay:1 }}
          className='font-["OrbitronBold"] text-[6rem] text-white tracking-widest'
        >
          TECH STACK I USE:
        </motion.h1>
        <div className="w-[300px] h-[4px] bg-gradient-to-r from-[#29D8FF] to-[#0ae449] rounded-full"></div>
      </div>
      <div className="flex flex-col gap-12 px-16">
        {/* Row 1 */}
        <div className="flex gap-12">
          {/* Card 1 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px #29D8FF88",
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateY = ((x - centerX) / centerX) * 10;
              const rotateX = -((y - centerY) / centerY) * 10;
              card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              card.style.boxShadow = "0 0 40px 10px #29D8FF88";
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
              card.style.boxShadow = "0 0 0 0 #29D8FF00";
            }}
            className="flex-1 bg-[#181c24] rounded-3xl overflow-hidden relative min-h-[400px] max-h-[500px] flex flex-col items-center justify-between transition-all duration-300"
            style={{
              marginRight: "1.5rem",
              minWidth: 0,
              boxShadow: "0 0 0 0 #29D8FF00",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-3/4 flex items-center justify-center bg-gradient-to-b from-[#29D8FF33] to-[#0ae44922]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="React"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={cardBottomClass}>
              <button className={buttonClass}>
                View Github
              </button>
              <button className={buttonClassAlt}>
                See Demo
              </button>
            </div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{
              boxShadow: "0 0 60px 10px #29D8FF55",
              borderRadius: "1.5rem",
              opacity: 0.5,
              filter: "blur(8px)",
            }} />
          </motion.div>
          {/* Card 2 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px #29D8FF88",
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateY = ((x - centerX) / centerX) * 10;
              const rotateX = -((y - centerY) / centerY) * 10;
              card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              card.style.boxShadow = "0 0 40px 10px #29D8FF88";
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
              card.style.boxShadow = "0 0 0 0 #29D8FF00";
            }}
            className="flex-1 bg-[#181c24] rounded-3xl overflow-hidden relative min-h-[400px] max-h-[500px] flex flex-col items-center justify-between transition-all duration-300"
            style={{
              marginLeft: "1.5rem",
              minWidth: 0,
              boxShadow: "0 0 0 0 #29D8FF00",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-3/4 flex items-center justify-center bg-gradient-to-b from-[#29D8FF33] to-[#0ae44922]">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                alt="Node.js"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={cardBottomClass}>
              <button className={buttonClass}>
                View Github
              </button>
              <button className={buttonClassAlt}>
                See Demo
              </button>
            </div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{
              boxShadow: "0 0 60px 10px #29D8FF55",
              borderRadius: "1.5rem",
              opacity: 0.5,
              filter: "blur(8px)",
            }} />
          </motion.div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-12">
          {/* Card 3 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px #29D8FF88",
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateY = ((x - centerX) / centerX) * 10;
              const rotateX = -((y - centerY) / centerY) * 10;
              card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              card.style.boxShadow = "0 0 40px 10px #29D8FF88";
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
              card.style.boxShadow = "0 0 0 0 #29D8FF00";
            }}
            className="flex-1 bg-[#181c24] rounded-3xl overflow-hidden relative min-h-[400px] max-h-[500px] flex flex-col items-center justify-between transition-all duration-300"
            style={{
              marginRight: "1.5rem",
              minWidth: 0,
              boxShadow: "0 0 0 0 #29D8FF00",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-3/4 flex items-center justify-center bg-gradient-to-b from-[#29D8FF33] to-[#0ae44922]">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="MongoDB"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={cardBottomClass}>
              <button className={buttonClass}>
                View Github
              </button>
              <button className={buttonClassAlt}>
                See Demo
              </button>
            </div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{
              boxShadow: "0 0 60px 10px #29D8FF55",
              borderRadius: "1.5rem",
              opacity: 0.5,
              filter: "blur(8px)",
            }} />
          </motion.div>
          {/* Card 4 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px #29D8FF88",
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateY = ((x - centerX) / centerX) * 10;
              const rotateX = -((y - centerY) / centerY) * 10;
              card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              card.style.boxShadow = "0 0 40px 10px #29D8FF88";
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
              card.style.boxShadow = "0 0 0 0 #29D8FF00";
            }}
            className="flex-1 bg-[#181c24] rounded-3xl overflow-hidden relative min-h-[400px] max-h-[500px] flex flex-col items-center justify-between transition-all duration-300"
            style={{
              marginLeft: "1.5rem",
              minWidth: 0,
              boxShadow: "0 0 0 0 #29D8FF00",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-3/4 flex items-center justify-center bg-gradient-to-b from-[#29D8FF33] to-[#0ae44922]">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                alt="Express.js"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={cardBottomClass}>
              <button className={buttonClass}>
                View Github
              </button>
              <button className={buttonClassAlt}>
                See Demo
              </button>
            </div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{
              boxShadow: "0 0 60px 10px #29D8FF55",
              borderRadius: "1.5rem",
              opacity: 0.5,
              filter: "blur(8px)",
            }} />
          </motion.div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-12">
          {/* Card 5 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px #29D8FF88",
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateY = ((x - centerX) / centerX) * 10;
              const rotateX = -((y - centerY) / centerY) * 10;
              card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              card.style.boxShadow = "0 0 40px 10px #29D8FF88";
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
              card.style.boxShadow = "0 0 0 0 #29D8FF00";
            }}
            className="flex-1 bg-[#181c24] rounded-3xl overflow-hidden relative min-h-[400px] max-h-[500px] flex flex-col items-center justify-between transition-all duration-300"
            style={{
              marginRight: "1.5rem",
              minWidth: 0,
              boxShadow: "0 0 0 0 #29D8FF00",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-3/4 flex items-center justify-center bg-gradient-to-b from-[#29D8FF33] to-[#0ae44922]">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                alt="JavaScript"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={cardBottomClass}>
              <button className={buttonClass}>
                View Github
              </button>
              <button className={buttonClassAlt}>
                See Demo
              </button>
            </div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{
              boxShadow: "0 0 60px 10px #29D8FF55",
              borderRadius: "1.5rem",
              opacity: 0.5,
              filter: "blur(8px)",
            }} />
          </motion.div>
          {/* Card 6 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px #29D8FF88",
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateY = ((x - centerX) / centerX) * 10;
              const rotateX = -((y - centerY) / centerY) * 10;
              card.style.transform = `perspective(800px) scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              card.style.boxShadow = "0 0 40px 10px #29D8FF88";
            }}
            onMouseLeave={e => {
              const card = e.currentTarget;
              card.style.transform = "perspective(800px) scale(1) rotateY(0deg) rotateX(0deg)";
              card.style.boxShadow = "0 0 0 0 #29D8FF00";
            }}
            className="flex-1 bg-[#181c24] rounded-3xl overflow-hidden relative min-h-[400px] max-h-[500px] flex flex-col items-center justify-between transition-all duration-300"
            style={{
              marginLeft: "1.5rem",
              minWidth: 0,
              boxShadow: "0 0 0 0 #29D8FF00",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-3/4 flex items-center justify-center bg-gradient-to-b from-[#29D8FF33] to-[#0ae44922]">
              <img
                src="https://images.unsplash.com/photo-1468449032589-876ed4b3eefa?auto=format&fit=crop&w=600&q=80"
                alt="CSS"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={cardBottomClass}>
              <button className={buttonClass}>
                View Github
              </button>
              <button className={buttonClassAlt}>
                See Demo
              </button>
            </div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{
              boxShadow: "0 0 60px 10px #29D8FF55",
              borderRadius: "1.5rem",
              opacity: 0.5,
              filter: "blur(8px)",
            }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}