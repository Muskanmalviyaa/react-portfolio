import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiPython } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "React Native",
    icon: <TbBrandReactNative className="text-teal-400" />,
  },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1.25 } },
};

const zoomInSkill = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", duration: 1 } },
};

const Skill = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="skills"
      className="py-20 relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#938bd1] to-[#ffffff] text-center mb-16"
        >
          Professional Skillset
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <motion.div variants={zoomInSkill} key={index}>
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                scale={1.1}
                transitionSpeed={600}
                className="w-34 h-34"
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-[#ffffff1a] shadow-[0_0_20px_rgba(147,139,209,0.1)] transform transition-transform duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-[0_0_30px_rgba(147,139,209,0.4)] bg-[#1e1a38]/60 backdrop-blur-md"
                >
                  <div className="text-6xl mb-4 transition-all duration-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {skill.icon}
                  </div>
                  <p className="text-md font-semibold text-gray-200 tracking-wide">
                    {skill.name}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skill;