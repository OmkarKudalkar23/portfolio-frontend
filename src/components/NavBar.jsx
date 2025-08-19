import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full left-0 px-20 py-1 mx-3 z-30 flex items-center justify-between">
      <img
        className="z-10 blend-image"
        style={{
          filter: "saturate(2) contrast(1)",
          width: "12vw",
          objectFit: "cover",
        }}
        src="/cyberpunk.png"
        alt="logo"
      />
      <div className="flex items-center gap-8 pr-10">
        {["Home", "About", "Contact"].map((item, idx, arr) => {
          
          let path = "/";
          if (item === "About") path = "/about";
          else if (item === "Contact") path = "/contact";

          return (
            <Link
              key={item}
              to={path}
              className="tracking-tight font-['OrbitronBold'] text-white text-xl font-semibold transition hover:text-blue-400 px-3 py-2"
              style={{
                transition: "text-shadow 0.3s",
                marginRight: idx === arr.length - 1 ? "3.5rem" : "0.5rem",
                marginLeft: idx === 0 ? "0" : "0.5rem",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.textShadow =
                  "0 0 8px rgba(0,191,255,0.8)")
              }
              onMouseOut={(e) => (e.currentTarget.style.textShadow = "")}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
