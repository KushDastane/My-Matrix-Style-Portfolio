import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-700 py-6 mt-5  shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs md:text-sm text-green-500">
          &copy; {new Date().getFullYear()} Kush Dastane. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="https://github.com/KushDastane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 fill-gray-500 hover:fill-green-700 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/kush-dastane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 fill-gray-500 hover:fill-green-700 transition" />
          </a>
          <a href="mailto:kushdastane69211@gmail.com">
            <FaEnvelope className="w-5 h-5 fill-gray-500 hover:fill-green-700 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
