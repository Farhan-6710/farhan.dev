"use client";

import { Github, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MyCard = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    // Set initial time after component is mounted on client
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Set the initial time immediately after the component mounts
    setCurrentTime(new Date().toLocaleTimeString());

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Check if the component has mounted
  const isClient = typeof window !== "undefined";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center w-full bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl p-6 pt-10 sm:pt-14 h-fit">
        {/* Image Section */}
        <div className="w-44 aspect-square relative rounded-full overflow-hidden flex items-center justify-center mb-6">
          <Image
            src="/Farhan-AI-beardless.png" // Replace with your image path
            alt="Profile Image"
            layout="fill"
            className="rounded-full border-x-4 border-y-2 border-white"
          />
        </div>

        {/* Name and Description Section */}
        <div className="mt-0 md:mt-4">
          <h1 className="text-3xl sm:text-4xl mb-3 md:mb-6 font-semibold text-white">
            Hello ! <br /> I&apos;m <span className="text-primary">Farhan</span>
          </h1>
          <p className="mt-2 mb-3 md:mb-6 text-lg text-gray-300">
            <span className="text-primary">Web Developer</span> with over <br />{" "}
            3+ years of experience in crafting dynamic and responsive websites.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {/* LinkedIn Button */}
            <button className="flex items-center border border-gray-700 px-3 2xl:px-4 py-3 rounded-lg hover:border-primary hover:bg-primary hover:shadow-lime hover:text-black transition-all duration-600">
              <Linkedin size={20} />
            </button>

            {/* GitHub Button */}
            <button className="flex items-center border border-gray-700 px-3 2xl:px-4 py-3 rounded-lg hover:border-primary hover:bg-primary hover:shadow-lime hover:text-black transition-all duration-600">
              <Github size={20} />
            </button>

            {/* Let's Talk Button */}
            <button className="flex items-center border px-4 py-2 rounded-lg border-primary hover:border-gray-700 hover:bg-transparent hover:text-white bg-primary shadow-lime text-black font-semibold transition-all duration-600 text-lg hover:shadow-none">
              <MessageCircle size={20} className="mr-2" />
              <span className="text-sm xl:text-lg">Let&apos;s Talk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Time Section */}
      
    </div>
  );
};

export default MyCard;
