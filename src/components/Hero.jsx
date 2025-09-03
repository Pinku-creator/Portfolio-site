import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/avatar - female.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#070F2B] text-[#9290C3] px-6 md:px-20 overflow-hidden pt-20"
    >
      {/* Right Side - Animated Avatar first on mobile */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-6 md:mb-0 md:ml-12 flex justify-center z-10 order-first md:order-last"
      >
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-full"
        />
      </motion.div>

      {/* Left Side - Text */}
      <div className="max-w-xl text-center md:text-left space-y-6 z-10 order-last md:order-first">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug text-white"
        >
          
          Hey, <span className="wave">👋</span>
          <br />
          I’m <span className="text-[#535C91]">Pinky Sahu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl"
        >
          <span className="font-semibold text-[#535C91]">
            Frontend Developer
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-[#535C91] to-[#9290C3] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-6 py-3 border-2 border-[#535C91] text-[#9290C3] rounded-lg font-semibold hover:bg-[#535C91] hover:text-white transition-colors duration-300 text-center"
          >
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
