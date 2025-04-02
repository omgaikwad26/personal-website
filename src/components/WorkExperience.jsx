import { useState } from "react";
import { motion } from "framer-motion";
import proofImg from "../assets/images/doosan-logo.jpg";
import charterImg from "../assets/images/cmc-logo1.jpg";
import spartificialImg from "../assets/images/spartificial-logo.png";
import WorkCardModal from "./WorkCardModal";

// Animation variant for cards
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const WorkExperience = () => {
  const [openModal, setOpenModal] = useState(null);

  const experiences = [
    {
      title: "ProOF Lab – Robotics Engineer Intern",
      date: "May 2024 – Present",
      image: proofImg,
      skills: ["Python", "OpenCV", "MATLAB", "ROS 2", "Doosan H2515"],
      details: [
        "Developed a path planning algorithm and isoparametric mapping for the DOOSAN H2515 robot workspace.",
        "Programmed the path planning algorithm in Python for automatic fiber placement on a 2D surface.",
        "Built a virtual testing environment to test the robot's functionality before deployment.",
        "Used OpenCV and Computer Vision to map the robot's workspace.",
        "Created a virtual testing environment for the DOOSAN H2515 collaborative robot using MATLAB and ROS 2.0.",
      ],
      results: [
        "Successfully developed a Path Planning Algorithm for Automatic Fiber Placement.",
        "The improved algorithms made lab operations more efficient and reliable, reducing time and cost associated with physical testing.",
      ],
    },
    {
      title: "Charter Machine Co – Hardware Engineer Intern",
      date: "Jan 2023 – Present",
      image: charterImg,
      skills: ["AutoCAD", "GD&T", "IEC 62061", "FEA", "SolidWorks", "Creo"],
      details: [
        "Created submittals and SOPs for Belt & Tower Press machines.",
        "Created CAD drawings and ensured GD&T and IEC 62061 compliance.",
        "Redesigned hydraulic manifolds for better flow.",
      ],
    },
    {
      title: "Spartificial – Robotics Engineer Intern",
      date: "Jun 2023 – Aug 2023",
      image: spartificialImg,
      skills: ["Python", "ROS", "Computer Vision", "Robotics"],
      details: [
        "Developed and implemented computer vision algorithms for robot perception.",
        "Worked on ROS-based navigation and path planning systems.",
        "Contributed to the development of autonomous robot behaviors.",
      ],
      results: [
        "Successfully implemented computer vision algorithms that improved robot perception accuracy.",
        "Enhanced the robot's navigation capabilities through improved path planning.",
      ],
    },
  ];

  return (
    <motion.div
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      className="border-b border-neutral-900 pb-20"
    >
      <motion.h2
        className="text-center text-4xl my-20"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {experiences.map((exp, idx) => (
          <motion.div
          key={idx}
          custom={idx}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg group"
          onClick={() => setOpenModal(idx)}
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm">{exp.date}</p>
              <p className="mt-1 text-xs text-purple-300">Click for more</p>
            </div>
        
            {/* Skills as tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {exp.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-900 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        ))}
      </div>

      {openModal !== null && (
        <WorkCardModal
          title={experiences[openModal].title}
          date={experiences[openModal].date}
          details={experiences[openModal].details}
          results={experiences[openModal].results}
          skills={experiences[openModal].skills}
          image={experiences[openModal].image}
          onClose={() => setOpenModal(null)}
        />
      )}
    </motion.div>
  );
};

export default WorkExperience;
