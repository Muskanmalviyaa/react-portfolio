import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./Home.css";
import TypingEffect from "react-typing-effect";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Stagger effect
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.25, delay: 0.1 },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1.5, delay: 0.2 },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1.5, delay: 0.2 },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="hero flex flex-col sm:flex-col-reverse lg:flex-row items-center lg:items-start justify-between sm:gap-8 lg:gap-6 py-16 sm:py-24 lg:py-10 relative z-10"
      id="hero"
    >
      {/* Left Section */}
      <motion.div variants={slideIn} className="hero-left flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-6 lg:w-1/2 text-center lg:text-left order-2 sm:order-2 lg:order-1 mt-10 lg:mt-14 z-10">
        <motion.div variants={textVariant} className="hero-heading text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-white">
          Hii! Muskan Malviya
        </motion.div>

        <motion.div variants={textVariant}>
          <h2 className="text-[18px] sm:text-[22px] lg:text-[20px] text-gray-300" id="name">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a091fd] via-[#ff7eb3] to-[#a091fd] bg-[length:200%_auto] animate-gradient text-[34px] sm:text-[40px] lg:text-[36px] font-bold">
              <TypingEffect
                text={["Developer", "Coder", "Freelancer"]}
                speed={100}
                eraseDelay={1500}
                typingDelay={500}
                loop={true}
                cursorClassName="text-[#ff7eb3]"
              />
            </span>
          </h2>
        </motion.div>

        <motion.div variants={textVariant} className="hero-description w-full lg:w-[100%] mt-2 font-normal text-[18px] sm:text-[20px] lg:text-[18px] text-gray-400">
          I'm a frontend developer, and here is my portfolio website. Here
          you'll learn about my journey as a frontend developer.
        </motion.div>

        <motion.a
          variants={textVariant}
          href="/Resume.pdf" // Path to your resume in the public folder
          download="Resume.pdf" // Optional: Custom filename for download
          className="hireme-btn relative mt-4 overflow-hidden px-8 py-3 text-white font-semibold text-[16px] border border-[#a091fd] shadow-[0_0_15px_rgba(160,145,253,0.5)] bg-transparent rounded-full transition-all duration-300 ease-in-out hover:bg-[#a091fd] hover:text-[#110e23] hover:shadow-[0_0_25px_rgba(160,145,253,0.8)]"
        >
          <span className="relative z-10"> Resume </span>
        </motion.a>
      </motion.div>

      {/* Right Section */}
      <motion.div variants={zoomIn} className="hero-right relative w-4/5 sm:w-2/3 lg:w-1/2 h-auto flex justify-center lg:justify-end order-1 sm:order-1 lg:order-2 mt-0 sm:mt-6 lg:mt-0 z-10">
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          transitionSpeed={1500}
          scale={1.05}
          className="img-wrapper relative flex justify-center items-center w-full sm:w-3/4 lg:w-auto p-[2px] rounded-full bg-gradient-to-tr from-[#938bd1] to-[#362f6b]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="img-container w-full h-full rounded-full overflow-hidden border-4 border-[#a091fd] shadow-[0_0_40px_rgba(160,145,253,0.6)]"
          >
            <img
              src="./images/muskan.jpg"
              alt="Profile"
              className="profile-img w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </Tilt>
      </motion.div>

      {/* Name display only on large screens */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="hidden lg:block font-extrabold text-[#ffffff08] text-[8rem] absolute bottom-[-220px] left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none select-none z-0 tracking-widest mix-blend-overlay w-full text-center"
      >
        <motion.span
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="inline-block"
        >
          MUSKAN MALVIYA
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Home;
