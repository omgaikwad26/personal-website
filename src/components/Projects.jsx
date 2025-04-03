import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiReact } from "react-icons/si";

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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Mechanical Engineering", "Electrical Engineering", "AI"];
  
  const filteredProjects = selectedCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      id="projects"
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
        Projects
      </motion.h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {selectedCategory === "AI" && filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">Check out my GitHub profile</h3>
            <p className="text-neutral-400 mb-4">For more AI-related projects and contributions</p>
            <a
              href="https://github.com/omgaikwad26/MachineLearning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Visit GitHub
            </a>
          </div>
        ) : (
          filteredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg group"
            >
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {proj.title === "GitHub Repository" ? (
                    <div className="w-full h-64 flex items-center justify-center bg-[#282c34]">
                      <SiReact className="w-32 h-32 text-[#61DAFB] animate-spin-slow" />
                    </div>
                  ) : (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="object-cover w-full h-64 transform group-hover:scale-105 group-hover:opacity-50 transition duration-500 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold">{proj.title}</h3>
                      <p className="text-sm italic">{proj.description}</p>
                      <p className="mt-1 text-xs text-purple-300">Click to visit GitHub</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {proj.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-900 text-white text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover w-full h-64 transform group-hover:scale-105 group-hover:opacity-50 transition duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold">{proj.title}</h3>
                      <p className="text-sm italic">{proj.description}</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {proj.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-900 text-white text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
