import React, { useState } from "react"
import data from "./data";
import FastMarquee from 'react-fast-marquee';


const Experiences = () => {

  const [showOverlay, setShowOverlay] = useState(false);


  return (
    <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="skill">
      <h1 className="text-4xl text-[#754986] font-bold sm:text-5xl mb-10">
        Skills
      </h1>
      <FastMarquee pauseOnHover="true">
        <div className="flex justify-center text-center content-center">
          {data?.map((val) => {
            return (
              <div key={val?.id} className=" ml-5 mr-5 ">
                <img className="w-[100px]  h-[80px]" src={val.image_url} alt={val.work_title} />
                <br />
                <p className="text-white text-[16px] w-[80px] ">{val?.skill_name}</p>
              </div>
            )
          })}
        </div>
      </FastMarquee>
    </div>

  );
};

export default Experiences;
