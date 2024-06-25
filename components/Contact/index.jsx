import React from "react";

// React Icons
import { FaLinkedinIn, FaCodepen, FaGithub,FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20" id="contact">
      <h1 className="text-1xl text-[#754986] font-bold sm:text-3xl">
      Greetings, <br /> Connect with me;
      </h1>
      <div className="my-10 grid grid-cols-2 gap-0 lg:grid-cols-5 sm:grid-cols-3 sm:gap-4">
        <ul>
          <li className="mb-4 text-gray-100 text-md w-max" title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/abdullah-siddiqui-a905ba208/"
              target={"_blank"}
              className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-[#be41e8]"
              rel="noreferrer"
            >
              <FaLinkedinIn />
              <span className="text-[13px] sm:text-sm font-initial">user/abdullahsidd</span>
            </a>
          </li>
        </ul>
        <ul>
          <li className="mb-4 ml-5 text-gray-100 text-md  w-max" title="GitHub">
            <a
              href="https://github.com/abdullah692"
              target={"_blank"}
              className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-[#be41e8]"
              rel="noreferrer"
            >
              <FaGithub />
              <span className="text-sm font-initial">/abdullahsidd</span>
            </a>
          </li>
          <li className="mb-4 ml-5 text-gray-100 text-md w-max" title="Twitter">
            <a
              href="https://www.facebook.com/muhammadabdullah.siddique"
              target={"_blank"}
              className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-[#be41e8]"
              rel="noreferrer"
            >
              <FaFacebookF />
              <span className="text-sm font-initial">/abdullahsidd</span>
            </a>
          </li>
        </ul>
        <div className="mt-10 sm:mt-0">
          <h2 className="text-2xl text-[#754986] font-bold mb-2 sm:text-3xl">
            Start Project?
          </h2>
          <a
            href="mailto:abdullahsidd37@gmail.com"
            className="text-md text-gray-200 sm:text-xl transition duration-150 hover:text-[#622e74]"
          >
            abdullahsidd37@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
