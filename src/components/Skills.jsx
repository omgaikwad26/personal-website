import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="resume" className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl"
      >
        Skills
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4"
      >
        {SKILLS.map((category, index) => (
          <div key={index} className="rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-purple-400">{category.title}</h3>
            <p className="mb-3 text-neutral-400 text-base">{category.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full bg-neutral-900 px-3 py-1 text-base font-medium text-purple-900 hover:bg-purple-900 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
