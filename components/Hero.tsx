"use client";

import Image from "next/image";
import { CustomButton, CustomCarousel } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title typing">
          Find, play or 
        </h1>
        <h1 className="hero__title typing">
          host events!
        </h1>

        <p className="hero__subtitle">
          Warcities is a platform to work with your team, play tournaments and organize events 
          with your favorite games.
        </p>

        <CustomButton
          title="Get Started..."
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container pt-36 padding-x ">
        <div className="hero__image img-slide">
          <CustomCarousel
            src1="/image1.jpg"
            src2="/image2.jpg"
            src3="/image3.jpg"
            src4="/image4.png"
            src5="/hero.png"
          />
        </div>
        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
