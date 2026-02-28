import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: 'DeepakOTT',
    description: 'An OTT platform app. As a Frontend Developer, I worked on the UI components and managed the navigation state.',
    image: '/images/deekapOTT.png',
    github: '',
    demo: '',
    playstore: 'https://play.google.com/store/apps/details?id=com.deepakott&hl=en_IN',
  },
  {
    title: 'Integrity Mutual Wealth',
    description: 'A finance and wealth management app. As a Frontend Developer, my role included working on the UI, navigation, and adding smooth animations.',
    image: '/images/Integrity.png',
    github: '',
    demo: '',
    playstore: 'https://play.google.com/store/apps/details?id=com.integritymutualwealth&hl=en_IN',
  },
  {
    title: 'Project Three',
    description: 'This is a placeholder description for the project.',
    image: '',
    github: '#',
    demo: '#',
  },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1.5 } },
};

const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="projects"
      className="py-10 relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#938bd1] to-[#ffffff] text-center mb-12"
        >
          Projects
        </motion.h2>

        <motion.div variants={fadeIn}>
          <Swiper
            modules={[Pagination, EffectCreative, Navigation]}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -500],
                rotate: [0, 0, -15],
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -500],
                rotate: [0, 0, 15],
              },
            }}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            navigation={{ nextEl: '.custom-swiper-next', prevEl: '.custom-swiper-prev' }}
            spaceBetween={40}
            slidesPerView={1}
            className="mx-auto max-w-4xl cursor-grab relative"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative group bg-[#1e1a38]/80 backdrop-blur-md rounded-2xl border border-[#ffffff1a] shadow-[0_0_30px_rgba(147,139,209,0.15)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,139,209,0.4)]"
                >
                  {/* Image Background */}
                  {project.image ? (
                    <div className="h-[280px] sm:h-[350px] w-full bg-[#110e23]/30">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-[280px] sm:h-[350px] bg-gradient-to-br from-[#2a2454] to-[#110e23] flex items-center justify-center text-gray-400 text-xl font-light tracking-widest uppercase">
                      Model Style Shot
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#110e23]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-6 text-center">
                    <h3 className="text-3xl font-extrabold mb-4 text-[#a091fd] drop-shadow-md">{project.title}</h3>
                    <p className="text-md mb-10 text-gray-300 max-w-md">{project.description}</p>
                    <div className="flex gap-6 mt-6">
                      {project.github && (
                        <a href={project.github} className="px-6 py-2 rounded-full border border-[#a091fd] text-[#a091fd] hover:bg-[#a091fd] hover:text-[#110e23] transition-colors duration-300 font-semibold tracking-wide">
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="px-6 py-2 rounded-full bg-[#a091fd] text-[#110e23] hover:bg-white transition-colors duration-300 font-semibold tracking-wide shadow-[0_0_15px_rgba(160,145,253,0.5)]">
                          Live Demo
                        </a>
                      )}
                      {project.playstore && (
                        <a href={project.playstore} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-[#a091fd] text-[#110e23] hover:bg-white transition-colors duration-300 font-semibold tracking-wide shadow-[0_0_15px_rgba(160,145,253,0.5)]">
                          Play Store
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Navigation & Pagination below the cards */}
        <div className="flex items-center justify-center gap-8 mt-6">
          <button className="custom-swiper-prev w-12 h-12 flex items-center justify-center rounded-full bg-[#1e1a38] border border-[#a091fd] text-[#a091fd] hover:bg-[#a091fd] hover:text-[#110e23] transition-all duration-300 shadow-[0_0_15px_rgba(160,145,253,0.3)] hover:shadow-[0_0_25px_rgba(160,145,253,0.8)] z-20">
            <FaChevronLeft size={20} />
          </button>

          <div className="custom-swiper-pagination flex justify-center gap-3 [&>.swiper-pagination-bullet]:bg-[#a091fd] [&>.swiper-pagination-bullet-active]:w-8 [&>.swiper-pagination-bullet-active]:rounded-full [&>.swiper-pagination-bullet-active]:transition-all [&>.swiper-pagination-bullet-active]:duration-300" />

          <button className="custom-swiper-next w-12 h-12 flex items-center justify-center rounded-full bg-[#1e1a38] border border-[#a091fd] text-[#a091fd] hover:bg-[#a091fd] hover:text-[#110e23] transition-all duration-300 shadow-[0_0_15px_rgba(160,145,253,0.3)] hover:shadow-[0_0_25px_rgba(160,145,253,0.8)] z-20">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
