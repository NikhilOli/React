import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import authorImage from '../assets/images/author-image.jpg';
import { useState } from 'react';
import { GiCancel } from 'react-icons/gi';

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`navbar flex z-20 fixed items-center justify-center ${
          isSidebarVisible ? `w-[300px]` : `w-14`
        } transition-all duration-[700ms] ease-in-out h-auto md:hidden bg-white`}
        onClick={toggleSidebar}
      >
        {!isSidebarVisible ? (
          <FaBars className="text-[#a43f49] h-14" size={18} />
        ) : (
          <GiCancel className="text-[#a43f49] h-14" size={20} />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarVisible ? `translate-x-0` : `-translate-x-[400px]`
        } md:static md:translate-x-0 transition-transform duration-700 ease-in-out pt-14 fixed bg-[#a43f49] top-0 left-0 h-screen w-[300px] md:w-[20%] z-10`}
      >
        <div className="menu flex flex-col h-full">
          <div className="container flex flex-col items-center gap-6 flex-1 py-4">
            {/* Author Image */}
            <div className="image">
              <a href="/">
                <img className="rounded-full w-24 h-24" src={authorImage} alt="Author" />
              </a>
            </div>

            {/* Author Details */}
            <div className="author-content text-center">
              <h4 className="text-3xl font-semibold text-white">Aryan Pakhrin</h4>
              <span className="font-medium italic text-gray-200">Web Developer</span>
            </div>

            {/* Navigation Menu */}
            <nav className="main-nav w-full my-4">
              <ul className="main-menu flex flex-col items-center text-center text-lg w-full">
                <li className="border-white border-b w-full py-4 font-semibold text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                  <a href="#about">About Me</a>
                </li>
                <li className="border-white border-b w-full py-4 font-semibold text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                  <a href="#services">What I'm good at</a>
                </li>
                <li className="border-white border-b w-full py-4 font-semibold text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                  <a href="#section3">My Work</a>
                </li>
                <li className="border-white border-b w-full py-4 font-semibold text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                  <a href="#section4">Contact Me</a>
                </li>
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="social-network my-4">
              <ul className="social-icons flex gap-4">
                <li className="bg-[#7f1923b8] py-2 px-2 rounded-full text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                  <a href="https://fb.com/templatemo">
                    <FaFacebook />
                  </a>
                </li>
                <li className="bg-[#7f1923b8] py-2 px-2 rounded-full text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                  <a href="https://twitter.com">
                    <FaTwitter />
                  </a>
                </li>
                <li className="bg-[#7f1923b8] py-2 px-2 rounded-full text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                  <a href="https://aedin.com">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="bg-[#7f1923b8] py-2 px-2 rounded-full text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-4 text-white w-full">
            <hr className="w-full bg-[#ffffff4d] border-0 h-[1px] mb-4" />
            <p className="text-sm text-center font-medium text-gray-200">
              Copyright 2025 Aryan Pakhrin
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
