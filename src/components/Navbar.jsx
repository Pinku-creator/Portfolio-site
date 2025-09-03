import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-[#1B1A55] to-[#535C91] text-[#F0F0F0] px-6 py-4 fixed top-0 w-full shadow-xl backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-white">Pinky Sahu</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1 rounded-md hover:bg-[#535C91] hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <motion.a
            href="https://github.com/Pinku-creator"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-pink-300"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/pinky-sahu-511a58220"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4 bg-[#1B1A55] rounded-lg shadow-md">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md hover:bg-[#535C91] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <div className="flex gap-4 mt-2">
            <motion.a
              href="https://github.com/Pinku-creator/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-pink-400"
            >
              <FaGithub size={24} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/pinky-sahu-511a58220"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
