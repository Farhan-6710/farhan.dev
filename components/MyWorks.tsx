import React from "react";
import WorkIconSvg from "./WorkIconSvg";
import ProjectsMarquee from "./ProjectsMarquee";

const MyWorks = () => {
  return (
    <div className="w-full bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl pb-40">
      <div className="flex items-center gap-4 text-white font-semibold text-xl px-10 pt-8">
        {" "}
        <WorkIconSvg /> <h2>MY WORKS</h2>
      </div>
      <ProjectsMarquee />
    </div>
  );
};

export default MyWorks;
