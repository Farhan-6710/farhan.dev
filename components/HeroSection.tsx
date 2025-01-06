import React from "react";
import MyCard from "./MyCard";
import AboutMe from "./AboutMe";
import MyWorks from "./MyWorks";

const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-custom-sm xl:grid-cols-custom-xl gap-6 text-white p-4 sm:p-6 w-full">
        <MyCard />
        <AboutMe />
        <MyWorks />
      </div>
    </div>
  );
};

export default HeroSection;
