import React from "react";

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { resumeUrl } from "../../constants";
import MySVGFile from '../../assets/images/vue-svgrepo-com.svg';// import resume from "assets/files/resume.pdf";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
      <h2 className="flex justify-start items-center gap-2 text-xl text-[#664075] font-bold mb-4 sm:text-2xl">
        <span>Hey there</span>
        <SiHey />
        <span>I am</span>
      </h2>
      <h1 className="text-6xl font-bold text-[#ffffff] sm:text-7xl">
        Abdullah Siddiqui
      </h1>
      <p className="text-md text-[#755281] leading-7 my-4 sm:text-lg sm:leading-8">
      Seasoned and self-taught Software Engineer,specialized in crafting dynamic web and mobile applications 
      using React, React Native, Vue.js, and Next.js... With a strong proficiency in RESTful API development, 
      I bring over 2 years of industry experience to the table. My focus lies in delivering tailored solutions
      that address the specific requirements of clients, ensuring robust and scalable outcomes
      </p>
      <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
        <button
          className="bg-[#301B3F] py-2 px-4 font-bold text-white border-2 border-[#fff] rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white"
          title="View Resume"
        >
          <a
            target={"_blank"}
            href={resumeUrl}
            className="flex justify-start items-center gap-1"
            rel="noreferrer"
          >
            <span>View Resume</span>
            <RiProfileLine />
          </a>
        </button>
        <button
          className="bg-white py-2 px-4 font-bold text-[#301B3F] border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white"
          title="Get in touch"
        >
          <a href="#contact" className="flex justify-start items-center gap-1">
            <span>Get in touch</span>
            <RiContactsBookLine />
          </a>
        </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <h4 className="text-xl text-white font-bold">Catch me on :</h4>
        <ul className="flex justify-start items-center flex-wrap gap-4">
          <li title="Facebook">
            <a
              href="https://www.facebook.com/muhammadabdullah.siddique"
              target={"_blank"}
              className="text-[#be41e8] text-md ease-in-out duration-150 hover:text-white"
              rel="noreferrer"
            >
              <FaFacebookF />

            </a>
          </li>
          <li title="GitHub">
            <a
              href="https://github.com/abdullah692"
              target={"_blank"}
              className="text-[#be41e8] text-md ease-in-out duration-150 hover:text-white"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/abdullah-siddiqui-a905ba208/"
              target={"_blank"}
              className="text-[#be41e8] text-md ease-in-out duration-150 hover:text-white"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>

        {/* <img src={"file:///C:/Users/Syscom/Downloads/vue-svgrepo-com.svg"} alt="SVG Image" /> */}
        
      </div>
    </div>
  );
};

export default Hero;
