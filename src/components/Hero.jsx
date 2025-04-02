import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import RobotArmScene from "./RobotArmScene";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resumePDF from "../assets/docs/OmGaikwad_Robotics.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-16 pt-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              <TypeAnimation
                sequence={[
                  'Om Gaikwad',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={1}
                className="inline-block"
              />
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <TypeAnimation
                sequence={[
                  'Robotics and AI Engineer',
                  2000,
                  'Robotics and AI Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.span>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-xl font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.div>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4 items-center"
            >
              <a
                href="https://github.com/omgaikwad26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/omgaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:omgaikwad222@gmail.com"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 text-base border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-[4500px] h-[450px]"
            >
              <RobotArmScene />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
