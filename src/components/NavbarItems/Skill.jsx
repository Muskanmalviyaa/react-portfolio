import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiCplusplus } from "react-icons/si";
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
  { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-[#0f1442] mb-16"
          data-aos="fade-down"
        >
          Professional Skillset
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.1}
              transitionSpeed={600}
              className="w-34 h-34"
            >
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="w-full h-full flex flex-col items-center justify-center text-center rounded-xl transform transition-transform duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] bg-transparent"
              >
                <div className="text-6xl mb-2 transition-all duration-600">
                  {skill.icon}
                </div>
                <p className="text-md font-semibold text-[#0f1442]">
                  {skill.name}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;