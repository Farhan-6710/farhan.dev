"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import BoxIconSvg from "./BoxIcon";
import TechStackSvg from "./TechStackSvg";
import MyTechStackMarquee from "./MyTechStackMarquee";

const AboutMe = () => {
  // Define the two h2 texts
  const texts = [
    "Solutions for web design, development, and SEO.",
    "Code That Connects People and Possibilities.",
    "Building the Web, One Pixel at a Time.",
  ];

  // State to keep track of which text is currently displayed
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    // Set an interval to change text every 5 seconds
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length); // Loop back to 0 when reaching the end
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl p-8 pb-0 h-fit">
        <div className="flex items-center gap-4 text-white font-semibold text-xl mb-6">
          <BoxIconSvg /> <h2>ABOUT ME</h2>
        </div>
        <h2 className="text-sm 2xl:text-lg mb-6">
          Since the beginning, I&apos;ve been deeply passionate about computer
          science, starting with no-code tools back in 2019. This early
          fascination led me to teach myself how to code.
        </h2>
        <h2 className="text-sm 2xl:text-lg mb-6">
          I&apos;ve had the privilege of working in a web development company,
          and now, I&apos;m eager to build innovative projects, automate tasks,
          and push the boundaries in Web & Mobile Development, Open Source, and
          Competitive Programming.
        </h2>
      </div>
      <div className="bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl h-fit">
        <div className="flex items-center gap-4 p-8 pb-6">
          <TechStackSvg />
          <h2 className="text-white font-semibold text-xl">MY TECH STACK</h2>
        </div>
        <MyTechStackMarquee />

        <div className="p-6 mt-4 mb-6">
          {/* Display one of the h2 texts with Framer Motion */}
          <motion.h2
            key={currentText} // Key will trigger re-render when state changes
            className="text-white font-semibold text-3xl font-serif"
            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }} // Start with y=20 (below) and opacity=0
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} // Animate to y=0 (original position) and opacity=1
            exit={{ y: -20, opacity: 0 }} // When exiting, move up (y=-20) and fade out
            transition={{ duration: .7 }} // Transition duration
          >
            {texts[currentText]} {/* Dynamically change text based on state */}
          </motion.h2>
        </div>
      </div>
      <div className="bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl p-8 pb-0 h-fit">
        <div className="flex items-center gap-4 text-white font-semibold text-xl mb-6">
          <BoxIconSvg /> <h2>Work Experience</h2>
        </div>
        <div className="text-sm 2xl:text-lg text-white mb-6">
          <p className="font-bold text-lg mb-2">Associate Frontend Developer</p>
          <p>Compumax LLC Private Limited | Lakdikapul, Hyderabad, India</p>
          <p className="mb-4">Aug 2023 - Present</p>
          <p>I lead a team of 6 members as a Frontend Developer at Compumax, an IT-focused company ......</p>
        </div>
      </div>
    </div>
  ); 
};

export default AboutMe;
