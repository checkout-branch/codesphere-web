import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 text-center">
      {/* Heading Section */}
      <div className="flex flex-col ml-10 md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl mr-6 font-semibold">Let's work together!</h2>
        <img src="/public/wokingg.png" alt="Working" className="w-40 h-40 md:w-60 md:h-60 transform scale-x-[-1]" />
      </div>

      {/* Description */}
      <p className="mt-2 text-xl md:text-xl   max-w-3xl mx-auto px-4 leading-relaxed">
        Take the first step towards a transformative future by partnering with us today. Explore our cutting-edge 
        solutions in Blockchain, Data Engineering, and AI. Contact us now for a personalized consultation, and together, 
        let's build a brighter tomorrow.Your success awaits!
      </p>

      <button className="mt-8 bg-blue-700 text-md text-white px-6 font-light py-3 rounded-full hover:bg-blue-900 uppercase">
        Request a Project
      </button>

      {/* Footer Content */}
      <div className="mt-16 container mx-auto  ">
        <div className="flex flex-col md:flex-row justify-between items-start border border-gray-600 p-6 rounded-lg">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <img src="/logo.png" alt="Logo" className="w-20 mx-auto md:mx-0 mb-4" />
            <p className="font-light leading-relaxed">
              We create innovative solutions for your business needs. <br></br> Our goal is to deliver high-quality work and exceed expectations. <br></br>
              We focus on leveraging cutting-edge technology to provide <br></br> scalable and efficient solutions.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
            {/* Navigation Links */}
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Project</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>

            {/* Contact Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center md:items-start border border-gray-600 p-6 rounded-lg">
                <FaMapMarkerAlt className="text-xl mb-2" />
                <h4 className="font-semibold">Our Head Office</h4>
                <p>123 Business Street</p>
              </div>
              <div className="flex flex-col items-center md:items-start border border-gray-600 p-6 rounded-lg">
                <FaPhoneAlt className="text-xl mb-2" />
                <h4 className="font-semibold">Our Hotline</h4>
                <p>+123 456 7890</p>
              </div>
              <div className="flex flex-col items-center md:items-start border border-gray-600 p-6 rounded-lg">
                <FaEnvelope className="text-xl mb-2" />
                <h4 className="font-semibold">Mail Us</h4>
                <span>contact@business.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="mt-8 text-gray-400 text-sm md:text-base">
        Copyright © 2025. All rights reserved by CodeSphere.
      </p>
    </footer>
  );
};

export default Footer;
