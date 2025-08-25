import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import TypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div
      className="hero flex flex-col sm:flex-col-reverse lg:flex-row items-center lg:items-start justify-between sm:gap-8 lg:gap-6 py-16 sm:py-24 lg:py-10 relative"
      id="hero"
    >
      {/* Left Section */}
      <div className="hero-left flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-6 lg:w-1/2 text-center lg:text-left order-2 sm:order-2 lg:order-1 mt-10 lg:mt-14">
        <div className="hero-heading text-[24px] sm:text-[28px] lg:text-[32px] font-medium">
          Hii! Muskan Malviya
        </div>

        <div>
          <h2 className="text-[18px] sm:text-[22px] lg:text-[20px]" id="name">
            I am a{" "}
            <span className="text-[#4c44b3] text-[34px] sm:text-[40px] lg:text-[36px] font-medium">
              <TypingEffect
                text={["Developer", "Coder", "Freelancer"]}
                speed={100}
                eraseDelay={1500}
                typingDelay={500}
                loop={true}
              />
            </span>
          </h2>
        </div>

        <div className="hero-description w-full lg:w-[100%] mt-2 font-normal text-[18px] sm:text-[20px] lg:text-[18px]">
          I'm a frontend developer, and here is my portfolio website. Here
          you'll learn about my journey as a frontend developer.
        </div>

        <a
          href="/Resume.pdf" // Path to your resume in the public folder
          download="Resume.pdf" // Optional: Custom filename for download
          className="hireme-btn relative mt-4 overflow-hidden px-6 py-2 text-[#231e45] font-semibold text-[16px] border-2 border-[#231e45] shadow-md bg-[#F5EFFF] transition-all duration-800 ease-in-out before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#231e45] before:scale-x-0 before:origin-left before:transition-transform before:duration-700 hover:text-white hover:before:scale-x-100"
        >
          <span className="relative z-10"> Resume </span>
        </a>
      </div>

      {/* Right Section */}
      <div className="hero-right relative w-4/5 sm:w-2/3 lg:w-1/2 h-auto flex justify-center lg:justify-end order-1 sm:order-1 lg:order-2 mt-0 sm:mt-6 lg:mt-0">
        <div className="img-wrapper relative flex justify-center items-center">
          <div className="img-container w-full sm:w-3/4 lg:w-auto">
            <div className="border-animate"></div>
            <img
              src="./images/muskan.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>
      </div>

      {/* Name display only on large screens */}
      <div className="hidden lg:block font-medium text-[#938bd1] text-[2.5rem] absolute bottom-[-6vw] left-[-5vw] animate-slide">
        Muskan Malviya
      </div>
    </div>
  );
};

export default Home;
