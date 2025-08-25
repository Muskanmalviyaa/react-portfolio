


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const projects = [
  {
    title: 'Project One',
    description: 'This is a placeholder description for the project.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'This is a placeholder description for the project.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Three',
    description: 'This is a placeholder description for the project.',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-4">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-[#0f1442] mb-10"
          data-aos="fade-down"
        >
          Projects
        </h2>
  <Swiper
          modules={[Pagination, EffectCreative]}
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
          spaceBetween={40}
          slidesPerView={1}
          className="mx-auto max-w-3xl"
        >
        {/* <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          spaceBetween={40}
          slidesPerView={1}
          className="mx-auto max-w-3xl"
        > */}
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="zoom-in"
                className="relative group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image Placeholder */}
                <div className="h-[360px] bg-[#d3e2ee] flex items-center justify-center text-[#0f1442] text-xl font-semibold">
                  Image Placeholder
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4 text-center">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-sm mb-12">{project.description}</p>
                  <div className="flex gap-4 mt-12">
                    <a href={project.github} className="underline hover:text-purple-300">
                      Code
                    </a>
                    <a href={project.demo} className="underline hover:text-green-300">
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination below the cards */}
        <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
      </div>
    </section>
  );
};

export default Projects;
