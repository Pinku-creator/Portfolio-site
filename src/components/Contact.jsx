import React from "react";
import {
  FaEnvelope,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-[#070F2B] text-center">
      <h2 className="text-4xl font-bold text-[#9290C3] mb-4">Let’s Connect!</h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
        I’m always open to new opportunities, collaborations, and learning.
        Reach out or download my resume to know more about me.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        {/* Get in Touch Button */}
        <a
          href="mailto:sahupinky918gmail.com"
          className="flex items-center gap-2 px-6 py-3 bg-[#1B1A55] rounded-xl shadow hover:bg-[#535C91] transition-colors text-white font-medium"
        >
          <FaEnvelope /> Get in Touch
        </a>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download="Pinky_Sahu_Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 bg-[#1B1A55] rounded-xl shadow hover:bg-[#535C91] transition-colors text-white font-medium"
        >
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl text-[#9290C3]">
        <a
          href="https://www.linkedin.com/in/pinky-sahu-511a58220"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#535C91]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Pinku-creator"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#535C91]"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/sahu66057"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#535C91]"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;
