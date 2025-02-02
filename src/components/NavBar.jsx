import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skill", label: "Skill" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="navbar bg-[#231e45] text-[#fcfcfd] h-14 w-full flex justify-between items-center lg:px-24 md:px-12 sm:px-4" id="nav">
      <div id="title" className="text-center md:text-left">
        <h2 className="font-bold text-[4vw] whitespace-nowrap">
          Muskan Malviya
        </h2>
      </div>
      
      <div className="md:text-[1.5vw] lg:flex gap-5 font-medium text-[1.3vw] hidden md:block">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="relative group text-[#534d80] transition-colors duration-300 hover:text-[#fcfcfd]"
            whileHover={{ color: "#fcfcfd" }}
            transition={{ duration: 0.1 }}
          >
            {link.label}
            <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-[#fcfcfd] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={22} />
        </button>
      </div>
  
      <motion.div
        id="full"
        className="fixed top-0 right-0 w-full h-full bg-[#231e45] bg-opacity-90 flex flex-col items-center justify-center gap-6 text-2xl text-white"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.4 }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-2xl"
        >
          <FaTimes />
        </button>
      </motion.div>
    </div>
  );
};

export default NavBar;
