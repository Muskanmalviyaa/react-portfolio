import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/education", label: "Education" },
    { to: "/skill", label: "Skill" },
    { to: "/project", label: "Project" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#231e45] text-[#fcfcfd] h-16 w-full mx-auto flex items-center justify-between px-5 py-4 md:px-12 lg:px-24">
      <h2 id="dancing" className="font-bold font-dancing text-xl sm:text-2xl md:text-3xl">Muskan Malviya</h2>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 text-lg font-medium">
        {links.map((link, index) => (
          <motion.div
            key={index}
            className="relative group"
            transition={{ duration: 0.1 }}
          >
            <Link to={link.to}>
              {link.label}
            </Link>
            <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-[#fcfcfd]  transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed top-0 right-0 w-full h-full bg-[#534d80] bg-opacity-90 flex flex-col items-center justify-center gap-6 text-2xl text-white transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            onClick={() => setIsOpen(false)}
            className="hover: bg-[#232039] p-3 rounded-3xl"
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-2xl"
        >
          {/* <FaTimes /> */}
        </button>
      </motion.div>

    </nav>
  );
};

export default NavBar;


// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { to: "/home", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/skill", label: "Skill" },
//     { to: "/project", label: "Project" },
//     { to: "/contact", label: "Contact" },
//   ];

//   return (
//     <div className="navbar bg-[#231e45] text-[#fcfcfd] h-13 w-full flex justify-between items-center lg:px-24 md:px-12 sm:px-4">
//       <h2 className="font-bold font-dancing text-[2vw] whitespace-nowrap">
//         Muskan Malviya
//       </h2>

//       <div className="md:text-[1.2vw] lg:flex gap-8 font-medium text-[1.5vw] hidden md:block">
//         {links.map((link, index) => (
//           <motion.div
//             key={index}
//             className="relative group text-[#fcfcfd] transition-colors duration-300 hover:text-[#534d80]"
//           >
//             <Link to={link.to}>{link.label}</Link>
//             <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-[#fcfcfd] transition-all duration-300 group-hover:w-full"></span>
//           </motion.div>
//         ))}
//       </div>

//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <FaBars size={20} />
//         </button>
//       </div>

//       <motion.div
//         className="fixed top-0 right-0 w-full h-full bg-[#534d80] bg-opacity-90 flex flex-col items-center justify-center gap-6 text-2xl text-white"
//         initial={{ opacity: 0, x: "-100%" }}
//         animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
//         transition={{ duration: 0.4 }}
//       >
//         {links.map((link, index) => (
//           <Link key={index} to={link.to} onClick={() => setIsOpen(false)}>
//             {link.label}
//           </Link>
//         ))}
//         <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-2xl">
//           <FaTimes />
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default NavBar;
