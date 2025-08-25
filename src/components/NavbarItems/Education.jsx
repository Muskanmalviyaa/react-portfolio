// import React from 'react'

// function Education() {
//   return (
  //   )
  // }
  
  // export default Education
// import React from 'react';

// const Education = () => {
  //   const educationData = [
//     {
//       institution: "University of Example",
//       degree: "Bachelor of Science in Computer Science",
//       duration: "Aug 2018 - May 2022",
//       courses: "Data Structures, Algorithms, Web Development",
//       location: "New York, USA",
//     },
//     {
  //       institution: "Example High School",
  //       degree: "High School Diploma",
//       duration: "Aug 2014 - May 2018",
//       courses: "Mathematics, Physics, Computer Science",
//       location: "California, USA",
//     },
//   ];

//   return (
  //     <section id="education" className="bg-[#231e45] text-[#fcfcfd] py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
//         <div className="space-y-8">
//           {educationData.map((edu, index) => (
  //             <div
  //               key={index}
  //               data-aos="fade-up" // AOS animation
  //               className="p-6 bg-[#2a2a5f] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  //             >
  //               <h3 className="text-xl font-semibold">{edu.institution}</h3>
  //               <p className="text-[#fcfcfd] opacity-90">{edu.degree}</p>
  //               <p className="text-[#fcfcfd] opacity-80">{edu.duration}</p>
  //               <p className="mt-2 text-[#fcfcfd] opacity-80">
  //                 <strong>Courses:</strong> {edu.courses}
//               </p>
//               <p className="text-[#fcfcfd] opacity-80">
//                 <strong>Location:</strong> {edu.location}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;



const Education = () => {
  const educationData = [
    {
      institution: "Oriental Institute of Science and Technology",
      degree: "Master of Computer Application",
      duration: "2023 - 2025",
      courses: "Data Structures, DBMS, Operating System",
      location: "Bhopal, India",
      Percent: "78.9%"
    },
    {
      institution: "Govt Narmada College",
      degree: "Bachelor of Computer Application",
      duration: "2020 - 2023",
      courses: "C++, MS Office,  computer networks, Java",
      location: "Narmadapuram, MP",
      Percent: "69.25%"

    },
    {
      institution: "Narmada Higher Secondary School",
      degree: "12th",
      duration: "2019 - 2020",
      courses: "Physics, Chemistry, Mathematics",
      location: "Narmadapuram, MP",
      Percent: "68.2%"

    },
    {
      institution: "Narmada Higher Secondary School",
      degree: "10th",
      duration: "2017 - 2018",
      courses: "Mathematics, Science, English,Hindi",
      location: "Narmadapuram, MP",
      Percent: "74.8%"

    },
  ];
  
  return (
    <section id="education" className="text-[#231e45] bg-[#fcfcfd] py-12">
      <div className="container mx-auto px-4">

        <div className='mb-10 w-3/4 mx-auto'>
            <h1 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">Let Me Introduce Myself</h1>
            <p className='text-lg text-center text-semibold text-wrap' data-aos="fade-down"> Hello! I'm Muskan, I recently graduated as a software engineer and I'm eager to kickstart my career in the tech industry. With a strong foundation in frontend development and a passion for solving complex problems</p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">
          Education
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute hidden sm:block h-full w-1 bg-[#3a3a6f] left-1/2 transform -translate-x-1/2"
            data-aos="fade-down"
            data-aos-delay="200"
          ></div>

          {/* Education items */}
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full mb-8`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              
            >
              {/* Timeline dot */}
              <div className="hidden sm:block w-6 h-6 bg-[#3a3a6f] rounded-full z-10 "></div>

              {/* Education card */}
              <div className="lg:w-5/12 sm:w-3/4 mx-4 p-6 bg-[#2a2a5f] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ">
                <h3 className="text-[#fcfcfd] text-xl font-semibold">{edu.institution}</h3>
                <p className="text-[#fcfcfd] opacity-90 mt-4">{edu.degree}</p>
                <p className="text-[#fcfcfd] opacity-80 mt-1">{edu.duration}</p>
                <p className="mt-2 text-[#fcfcfd] opacity-80">
                  <strong>Courses:</strong> {edu.courses}
                </p>
                <p className="text-[#fcfcfd] opacity-80">
                  <strong>Location:</strong> {edu.location}
                </p>
                <p className="text-[#fcfcfd] opacity-80">
                  <strong> Percent:</strong> {edu.Percent}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;