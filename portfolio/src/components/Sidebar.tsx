import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import authorImage from '../assets/images/author-image.jpg'

export default function Sidebar() {
  return (
    <div className="hidden md:flex responsive-nav bg-[#a43f49] top-0 sticky h-screen w-[20%] flex-col ml-[70px]">
      <i className="fa fa-bars" id="menu-toggle"></i>
      <div id="menu" className="menu flex flex-col h-full">
        <i className="fa fa-times" id="menu-close"></i>
        <div className="container flex flex-col items-center gap-6 flex-1 py-4">
          <div className="image">
            <a href="#">
              <img className="rounded-full" src={authorImage} alt="" />
            </a>
          </div>
          <div className="author-content text-center">
            <h4 className="text-3xl font-semibold">Aryan Pakhrin</h4>
            <span className="font-medium italic">Web Designer</span>
          </div>
          <nav className="main-nav w-full my-4" role="navigation">
            <ul className="main-menu flex flex-col items-center text-center text-lg w-full border-white border-[1px] border-l-0 border-r-0">
              <li className="border-white border-[1px] w-full py-4 font-semibold border-l-0 border-r-0 hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                <a href="#section1">About Me</a>
              </li>
              <li className="border-white border-[1px] w-full py-4 font-semibold border-l-0 border-r-0 hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                <a href="#section2">What I'm good at</a>
              </li>
              <li className="border-white border-[1px] w-full py-4 font-semibold border-l-0 border-r-0 hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                <a href="#section3">My Work</a>
              </li>
              <li className="border-white border-[1px] w-full py-4 font-semibold border-l-0 border-r-0 hover:bg-white hover:text-[#dc3545] transition-colors duration-500 ease-in">
                <a href="#section4">Contact Me</a>
              </li>
            </ul>
          </nav>
          <div className="social-network my-4">
            <ul className="social-icons flex gap-4">
              <li className="bg-[#7f1923b8] py-3 px-3 text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                <a href="https://fb.com/templatemo"><FaFacebook /></a>
              </li>
              <li className="bg-[#7f1923b8] py-3 px-3 text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                <a href="https://fb.com/templatemo"><FaTwitter /></a>
              </li>
              <li className="bg-[#7f1923b8] py-3 px-3 text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                <a href="https://fb.com/templatemo"><FaLinkedin /></a>
              </li>
              <li className="bg-[#7f1923b8] py-3 px-3 text-white hover:bg-white hover:text-[#dc3545] transition-colors duration-300">
                <a href="https://fb.com/templatemo"><FaInstagram /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-4 py-4 text-white w-full">
          <hr className="w-full bg-[#ffffff4d] border-0 h-[1px] mb-4" />
          <p className="text-sm text-center font-medium text-gray-200">Copyright 2025 Aryan Pakhrin</p>
        </div>
      </div>
    </div>
  );
}