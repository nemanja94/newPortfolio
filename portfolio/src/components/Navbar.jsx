import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo3.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <Link to="home" smooth={true} className="cursor-pointer">
          <img
            src={Logo}
            alt="Logo image"
            style={({ maxWidth: "60px" }, { maxHeight: "60px" })}
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-2 mx-2 hover:bg-pink-600 hover:p-4 duration-300 hover:rounded-sm hover:mx-0 hover:duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="p-2 mx-2 hover:bg-pink-600 hover:p-4 duration-300 hover:rounded-sm hover:mx-0 hover:duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="p-2 mx-2 hover:bg-pink-600 hover:p-4 duration-300 hover:rounded-sm hover:mx-0 hover:duration-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="p-2 mx-2 hover:bg-pink-600 hover:p-4 duration-300 hover:rounded-sm hover:mx-0 hover:duration-300"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration-300
            duration={500}
            className="p-2 mx-2 hover:bg-pink-600 hover:p-4 duration-300 hover:rounded-sm hover:mx-0 hover:duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "absolute top-0 left-0 w-full h-screen mt-[-500%] duration-500  bg-[#0a192f] flex flex-col justify-center items-center"
            : "absolute top-0 left-0 w-full h-screen mt-0 duration-500 bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/nemanja-andric/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              href="https://github.com/nemanja94"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto: nemanja.andric.1994@outlook.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f68]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Contact <BsFillPersonLinesFill size={30} />
            </Link>

            {/* <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
