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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: "Robotics Engineer Intern",
      company: "Prototyping and Fabrication Lab at SIT",
      date: "May 2024 – December 2024",
      image: proofImg,
      skills: ["Python", "ROS 2","OpenCV", "MATLAB", "Doosan H2515"],
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
      title: "Mechanical Hardware Engineer Intern",
      company: "Charter Machine Company",
      date: "Jan 2023 – July 2023",
      image: charterImg,
      skills: ["AutoCAD", "GD&T", "IEC 62061", "FEA", "SolidWorks", "Creo"],
      details: [
        "Designed brackets, support frames, pneumatic components in Autodesk Inventor, performed FEA, and produced 100+ fabrication drawings to meet ASME Y14.5 GD&T Standards",
        "Reconstructed hydraulic manifold routing for better flow control; designed the model in Inventor with at most precision ready for manufacturing",
        "Lead Author of Operation Manuals and Submittals with appropriate DFMA principles",
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Spartificial",
      date: "Jun 2023 – Aug 2023",
      image: spartificialImg,
      skills: ["Python", "Machine Learning", "TensorFlow"],
      details: [
        "Conducted a detailed analysis of lunar topography datasets to classify safe landing sites for spacecraft using image processing techniques with TensorFlow and OpenCV",
        "Independently built R-CNN} based algorithm and analyzed 20+ lunar crater image datasets with 97.6% accuracy",
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
        className="text-center text-5xl my-20"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
        <p className="text-neutral-400 text-sm mt-2 italic">Hover over the images for more details</p>
      </motion.h2>

      <div className="flex flex-col items-start max-w-5xl mx-auto pl-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mb-8 relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-start gap-8 -ml-4">
              {/* Left: Image */}
              <div className="w-60 h-60 flex-shrink-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Middle: Basic Info */}
              <div className="flex-grow text-left">
                <h3 className="text-xl font-semibold text-left">{exp.title}</h3>
                <p className="text-neutral-400 text-left">{exp.company}</p>
                <p className="text-neutral-400 text-left">{exp.date}</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-start">
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

              {/* Right: Hover Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: hoveredIndex === idx ? 1 : 0,
                  x: hoveredIndex === idx ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-3/4 top-0 w-[32rem] bg-neutral-900/80 backdrop-blur-lg rounded-lg p-6 shadow-lg z-10 border border-neutral-800"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">What I did?</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
                      {exp.details.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                  {exp.results && (
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-400">Results:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
                        {exp.results.map((res, i) => (
                          <li key={i} className="leading-relaxed">{res}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="pt-4">
                    <button 
                      onClick={() => setOpenModal(idx)}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Click for full details →
                    </button>
                  </div>
                </div>
              </motion.div>
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
