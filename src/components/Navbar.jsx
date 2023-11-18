import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaDiscord, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/murat-pak.jpg';
import {Link, Button, Element,} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
            <div>
                <img src={Logo} alt="the lmao" style={{ width: '50px' }} />
            </div>

            {/* menu */}

            <ul className='hidden md:flex'>
              <li>
                <Link to='Home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='About' smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to='Experience' smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to='Contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul
              className={
                !nav
                  ? 'hidden'
                  : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
              }
            >
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='Home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='About' smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='Experience' smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='Contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* social icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://discord.com/users/1086625985761382430'
            >
              Discord <FaDiscord size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/archangel-12'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#deac57]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/r3yanson/'
            >
              instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#de6957]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://soundcloud.com/m4rkkelvin'
            >
              sc <FaSoundcloud size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/watch?v=QDia3e12czc'
            >
              dont <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

        </div>
    );
}

export default Navbar;