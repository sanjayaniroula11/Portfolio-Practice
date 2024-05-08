import React from "react";
import Skills from "./Skills";
import Contact from "./Contact";
import MyWorks from "./MyWorks";

function Hero() {
  return (
    <div className="hero-section">
      <div className="big-text">
        <div className="hero-text">
          <h1 className="font-black text-5xl heading1">I'M GLAD</h1>
          <h1 className="font-black text-5xl heading1">YOU'VE COME THIS FAR</h1>
        </div>
<div className="socials">
  <ul>
    <div className="one-social"><li>Instagram <span className="icon"><i class="ri-instagram-line"></i></span></li></div>
    <div className="one-social"><li>Facebook <span className="icon"><i class="ri-facebook-line"></i></span></li></div>
    <div className="one-social"><li>Twitter <span className="icon"><i class="ri-twitter-line"></i></span></li></div>
    <div className="one-social"><li>LinkedIn <span className="icon"><i class="ri-linkedin-line"></i></span></li></div>

  </ul>
</div>
        <h3 className="font-bold my-name">I'M SANJAYA NIROULA </h3>
        <h3 className="font-bold frontend-text">FRONTEND DEVELOPER</h3>
      </div>
      <Skills />
      <MyWorks />
      <Contact />
    </div>
  );
}

export default Hero;
