import Image from "next/image";
import React from "react";

const FunctionsHero = () => {
  return (
    <div className="relative items-center justify-center block w-full">
      <div id="functions-hero" className="w-full flex justify-center">
        <div className="opacity-1 animate-fade-in absolute z-20 flex items-center justify-center h-auto ">
          <a
            href="mailto:itz.me.farhan6710@gmail.com"
            className="flex items-center w-full gap-1 px-3 py-2 border border-primary group hover:border-strong sm:gap-2 bg-alternative rounded-xl group/email"
          >
            <div className="flex justify-center items-center gap-2">
            <div className="relative font-mono text-sm text-foreground-muted text-primary">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="absolute top-0 animate-pulse text-primary"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="absolute top-0 animate-ping text-primary"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
              </svg>
            </div>
            <div className="flex-1 font-mono text-xs text-left opacity-1 animate-fade-in text-white md:text-sm">
              Open for Work: Full time / Remote
            </div>
            </div>
            <div className="text-foreground rounded p-1.5 opacity-1 group-hover:opacity-100 transition-opacity">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-3.5 h-3.5 text-primary"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div
          id="dot1"
          className="absolute origin-center w-[2.5%] h-[3.6%] flex items-center justify-center opacity-1 transition-opacity animate-fade-in delay-75"
        >
          <span className="absolute inset-0 w-full h-full rounded-full bg-black dark:bg-white bg-opacity-20"></span>
          <span className="absolute w-4/5 h-4/5 rounded-full bg-black dark:bg-white bg-opacity-90"></span>
        </div>
        <div className="absolute left-[51.15%] top-[10%] w-px h-[20%] overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-current to-transparent delay-1200 animate-slide-in"></span>
        </div>
        <div className="absolute top-1/3 left-0 z-30 px-6 pb-0 w-full">
          <p className="text-lg text-white">
            A website is essential in today&apos;s digital landscape because it
            serves as the primary online presence for businesses, organizations,
            and individuals. It provides a platform to showcase products,
            services, and information to a global audience, enhancing visibility
            and credibility.
          </p>
        </div>
        <Image
          alt="globe wireframe"
          priority
          width={400}
          height={400}
          className="w-full h-full block"
          src="/globe.svg"
        />
        <div className="bg-transparent h-40"></div>
        {/* SVG and other elements */}
        {/* Add your remaining SVG elements here with corrected classNames */}
      </div>
    </div>
  );
};

export default FunctionsHero;
