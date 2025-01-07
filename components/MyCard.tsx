"use client";

import { Github, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MyCard = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);  // State to track if component has mounted

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

  useEffect(() => {
    setIsMounted(true);  // Set isMounted to true after the component mounts
  }, []);

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
      <div className="bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl p-8">
        <h2 className="text-sm font-semibold mb-4">Current Time</h2>
        <p className="text-4xl sm:text-5xl 2xl:text-6xl font-semibold mb-2">
          {isMounted ? currentTime : "Loading..."}
        </p>
        <button className="flex gap-1 items-center text-md">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            className="text-primary"
            height="1.7em"
            width="1.7em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z"></path>
          </svg>
          My Location
        </button>
      </div>
    </div>
  );
};

export default MyCard;
