import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 size={50} color="#E34F26" />, name: "HTML" },
    { icon: <FaCss3Alt size={50} color="#1572B6" />, name: "CSS" },
    { icon: <FaJs size={50} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact size={50} color="#61DAFB" />, name: "React" },
    { icon: <FaNodeJs size={50} color="#339933" />, name: "Node.js" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiCplusplus size={50} color="#00599C" />, name: "C++ (DSA - Beginner)" }

  ];

  return (
    <section id="skills" className="py-20 bg-[#070F2B] px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1B1A55] p-6 rounded-lg shadow-lg hover:bg-[#535C91] hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
            >
              {skill.icon}
              <span className="mt-3 text-[#9290C3] font-semibold">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
