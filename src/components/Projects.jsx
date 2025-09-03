import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
// import project3 from "../assets/project1.png";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Rock Paper Scissor Game",
      desc: "HTML, CSS, JS project",
      github: "https://github.com/Pinku-creator/RPS-Game/",
      live: "https://pinku-creator.github.io/RPS-Game/",
      img: project1,
    },
    {
      title: "My Moment App",
      desc: "Node.js & Express App with EJS and Tailwind CSS",
      github: "https://github.com/Pinku-creator/my-moment-app",
      live: "https://my-moment-app.onrender.com",
      img: project2,
    },
    {
      title: "Portfolio-site",
      desc: "React and Tailwind CSS",
      github: "#",
      live: "#",
      img: project3,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#1B1A55] text-center">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-4 bg-[#070F2B] rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="flex gap-4 mt-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9290C3] transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9290C3] transition"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
