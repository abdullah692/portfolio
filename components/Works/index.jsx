import React from "react";

// Works Data
import works from "./data/data.js";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
//
const Works = () => {
  return (
    <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="projects">
      <h1 className="text-4xl text-[#754986] font-bold sm:text-5xl mb-10">
        Latest Works
      </h1>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
        {works
          ? works.map((work, index) => (
              <div
                key={index}
                title={`${work.work_title} - ${work.genre}`}
                className="bg-[#3b214e] h-[500px] rounded-lg p-4 max-w-4xl m-auto mb-4 w-full  flex flex-col justify-between ease-in-out duration-150 hover:bg-[#301B3F] sm:mb-0"
              >
                <div className="w-45 flex flex-col h-full justify-center items-center">
                  <div />
                  <img
                    className="rounded-2xl"
                    src={work.image_url}
                    alt="Work-Image"
                  />
                  <div />
                </div>
                <div className="flex flex-col justify-center items-start w-55 pb-0">
                  <h2 className="text-2xl text-white font-bold my-5 mb-2">
                    {work.work_title}
                  </h2>
                  <b className="text-teal-500 mb-2">⎯⎯ {work.genre}</b>
                  <p className="text-gray-300 text-sm leading-6 m-0">
                    {work.description}
                  </p>
                  <button
                    className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white"
                    style={{ width: "100%" }}
                    title="Visit website"
                  >
                    <a
                      href={work.url}
                      target={"_blank"}
                      className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0"
                      rel="noreferrer"
                    >
                      <span>Visit website</span>
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Works;
