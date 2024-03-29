import React, { useState } from "react";
import ms from "../assets/ms.png";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50">
      <div>
        <img src={ms} alt="Image Logo" style={{ width: "110px" }} />
      </div>
      <ul className="hidden md:flex">
        <li>
      
          <Link to="Home" smooth={true} duration={500}>

            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="Home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="About" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="Skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="Contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      {/* Social Icons  */}
   {/* Social icons */}
   <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/manishsuyal2099/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ManishSuyal'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:manishsuyal13@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1AQ9k-neyoysBJ7z90X8MjnD9SFQGdHBq/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;   
