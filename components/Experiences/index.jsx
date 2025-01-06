import React from "react";

// Experiences Data
import experiences from "./data/data.js";

const Experiences = () => {
  return (
    <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="experiences">
      <h1 className="text-3xl text-[#0A2540] font-bold sm:text-4xl sm:leading-10">
        <span className="text-5xl sm:text-6xl">2</span>
        <br /> Years Of Professional Experience.
      </h1>
      <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {experiences
          ? experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-[#003F5C] p-4 rounded hover:bg-[#074168] relative"
                title={`${experience.job_title} @${experience.company}`}
              >
                <b className="text-gray-800 text-sm bg-white py-1 px-2 rounded absolute left-3 -top-2 hover:bg-[#4384AF] hover:text-white">
                  {experience.company}
                </b>
                <h2 className="mt-4 mb-2 text-xl font-bold text-[#4B93C3]">
                  {experience.year}
                </h2>
                <h3 className="font-bold text-2xl text-white">
                  {experience.job_title}
                </h3>
                <p className="mt-2 leading-6 text-sm text-white">
                  {experience.description}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Experiences;
