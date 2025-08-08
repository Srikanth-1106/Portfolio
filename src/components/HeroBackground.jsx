import React from "react";
import Mountain1 from "../assets/mountain1.svg";
import Mountain2 from "../assets/mountain2.svg";
import Mountain3 from "../assets/mountain3.svg";
import Mountain5 from "../assets/mountain5.svg";
import BlurLayer from "../assets/blur-layer.png";

function HeroBackground() {
  return (
    <div className="absolute top-0 w-full h-[100svh] bg-gradient-to-b from-[#b0afb1] to-[#51afda] dark:from-[#322d6d] dark:to-[#663182]">
      <img
        src={Mountain1}
        className="absolute w-full h-[446px] top-[170px]"
        alt="Mountain1"
      />
      <img
        src={Mountain2}
        className="absolute w-full h-[464px] top-[160px]"
        alt="Mountain2"
      />
      <div className="absolute w-full h-[1503px] top-[-200px]">
        <img
          src={BlurLayer}
          alt="Blur Layer"
          className="w-full h-full object-cover"
        />
      </div>

      <img
        src={Mountain3}
        className="absolute h-[408px] top-[280px] sm:top-[350px] sm:z-auto z-5"
        alt="Mountain3"
      />

      <img
        src={Mountain5}
        className="absolute mx-auto h-[820px] md:top-[450px] top-[150px] sm:block"
        alt="Mountain5"
      />
    </div>
  );
}

export default HeroBackground;
