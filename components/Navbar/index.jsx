import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import ProfileImage from "../../assets/images/profile.png";
import Image from "next/image";
const Navbar = () => {
  const [menuOpen, SetMenuOpen] = useState(false);

  const closeMenu = () => {
    if (!menuOpen) {
      SetMenuOpen(menuOpen);
      // menuOpen = true;
    } else {
      SetMenuOpen(!menuOpen);
      // menuOpen = false;
    }
  };

  return (
    <header
      className={`py-3 px-5 sm:px-7  md:px-7 lg:px-7 flex justify-between items-center flex-wrap lg:py-7 ${
        styles.header
      } ${menuOpen ? `${styles.open}` : ""}`}
    >
      <div className={`z-50 rounded-full ${menuOpen ? "hidden" : "block"}`}>
        <Image
          src={ProfileImage}
          width={100}
          height={100}
          className={"rounded-full shadow-md shadow-slate-700"}
          alt={"User Image"}
        />
      </div>
      <nav>
        <ul
          className={`menu hidden absolute left-0 top-0 m-0 py-20 pt-16 px-4 bg-black z-40 w-full h-56 sm:w-unset sm:h-auto sm:bg-transparent sm:flex sm:py-0 sm:static sm:left-unset sm:top-unset ${
            styles.menu
          } ${menuOpen ? `${styles.open}` : ""}`}
        >
          <li
            className="mb-4 mt-2 mx-0 sm:mb-0 sm:mt-0 sm:mx-3"
            title="Experiences"
          >
            <a
              href="#experiences"
              className="text-1xs text-[#fff] font-semibold ease-in-out duration-150 hover:text-[#003F5C]"
              onClick={() => closeMenu()}
            >
              Experiences
            </a>
          </li>
          <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Skills">
            <a
              href="#skill"
              className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-[#003F5C]"
              onClick={() => closeMenu()}
            >
              Skills
            </a>
          </li>
          <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Projects">
            <a
              href="#projects"
              className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-[#003F5C]"
              onClick={() => closeMenu()}
            >
              Projects
            </a>
          </li>
          
          <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Contact">
            <a
              href="#contact"
              className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-[#003F5C]"
              onClick={() => closeMenu()}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`z-50 ${
          menuOpen && "mb-24"
        } flex flex-col justify-center items-center sm:hidden ${
          styles.hamburger
        } ${menuOpen ? `${styles.open}` : ""}`}
        onClick={() => SetMenuOpen(!menuOpen)}
      >
        <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
        <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
        <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
      </div>
    </header>
  );
};

export default Navbar;
