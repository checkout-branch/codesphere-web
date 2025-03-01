import React, { useState,useEffect } from "react";
import { Menu } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init();})

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 border-b border-b-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side (Logo for Mobile & Desktop) */}
        <div className="text-xl font-bold uppercase md:hidden">LOGO</div>

        {/* Desktop Menu */}
        <div  className="hidden md:flex space-x-6 text-lg font-light uppercase">
          
          <a    data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          
          href="#home" className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Home</a>
          <a  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"href="#about" className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">About Us</a>
          <a  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="900" href="#projects" className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Projects</a>
        </div>

        {/* Center Logo (Only for larger screens) */}
        <div className="hidden md:flex flex-grow justify-center text-xl font-bold uppercase">LOGO</div>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex space-x-6 text-lg font-light uppercase">
          <a href="#blog" className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Blog</a>
          <a href="#career" className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Career</a>
          <a href="#contact" className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Contact Us</a>
        </div>

        {/* Mobile Menu Icon (Right-Aligned) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-6 space-y-4 text-center text-lg font-semibold uppercase">
          <a href="#home" className="block hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Home</a>
          <a href="#about" className="block hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">About Us</a>
          <a href="#projects" className="block hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Projects</a>
          <a href="#blog" className="block hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Blog</a>
          <a href="#career" className="block hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Career</a>
          <a href="#contact" className="block hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md transition">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
