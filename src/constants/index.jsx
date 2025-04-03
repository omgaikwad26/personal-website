import sesma1 from "../assets/projects/sesma-1.jpeg";
import robotics1 from "../assets/projects/robotics-1.png";
import matlabcar1 from "../assets/projects/matlabcar-1.png";
import ml1 from "../assets/projects/ml-1.png";
import proof1 from "../assets/projects/proof1.jpg";

export const HERO_CONTENT = (
  <>
    <p>
      I like turning bolts and code into robots that know what they're doing — or at least pretend. My work blends in Robotics, AI, mechatronics, and a touch of curiosity to build intelligent, real-world systems.
    </p>
    <br />
    <p className="font-bold">Stevens Institute of Technology</p>
    <p>M.Eng - Electrical Engineering (AI/ML) - May 2026</p>
    <p>B.Eng - Mechanical Engineering (Robotics) - May 2025</p>
  </>
);

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SKILLS = [
  {
    title: "Mechanical Engineering",
    description: "CAD design, Finite Element Analysis, Sheet Metal Manufacturing, and prototyping for robotics and mechanical systems.",
    tools: "Tools:",
    skills: ["SolidWorks", "AutoCAD", "ANSYS", "Creo", "3D Printing", "GD&T", "DFMA", "Lean Six Sigma"]
  },
  {
    title: "Electrical & Embedded Systems",
    description: "Embedded programming, PCB design, and sensor control and fusion.",
    tools: "Tools:",
    skills: [ "PWM Control", "CompactLogix PLC", "IMU Sensors", "Force Sensors"]
  },
  {
    title: "Programming & AI",
    description: "Control systems, Machine learning, algorithm development, testing, and optimization with modern languages and frameworks.",
    tools: "Tools:",
    skills: ["Python", "C", "C++", "MATLAB", "Javascript", "ROS", "TensorFlow", "OpenCV", "Machine Learning"]
  }
];


export const EXPERIENCES = [
  {
    year: "May 2024 – Dec 2024",
    role: "Robotics Engineer Intern",
    company: "Prototype Object Fabrication Lab (ProOF) – SIT",
    //description: `Built a MATLAB and ROS 2 integrated virtual environment for the Doosan H2515 collaborative robot, and programmed a path planning algorithm for automated fiber placement.`,
    technologies: ["ROS 2", "MATLAB", "Python", "SolidWorks", "Pneumatics"],
  },
  {
    year: "Jan 2025 – Present",
    role: "Mechanical Hardware Engineer Intern",
    company: "Charter Machine Company",
    //description: `Created submittals, SOPs, and instruction manuals for Belt and Tower Press machines. Assisted in mechanical and electrical drawings to meet GD&T and IEC 62061 standards.`,
    technologies: ["AutoCAD", "GD&T", "IEC 62061", "SOP Writing", "Technical Documentation"],
  },
  {
    year: "Jan 2023 – Jul 2023",
    role: "Mechanical Engineer Intern",
    company: "Charter Machine Company",
    //description: `Designed mechanical components in Inventor, performed FEA, and optimized hydraulic manifold routing for better flow control. Co-authored operation manuals.`,
    technologies: ["Inventor", "FEA", "Hydraulics", "DFMA", "ASME Y14.5"],
  },
  {
    year: "Jun 2022 – Aug 2022",
    role: "ML Research Intern",
    company: "Spartificial",
    //description: `Analyzed lunar topography data to classify safe landing zones using TensorFlow and OpenCV. Built an R-CNN model achieving 97.6% crater classification accuracy.`,
    technologies: ["Python", "TensorFlow", "OpenCV", "R-CNN", "Image Processing"],
  },
];


export const PROJECTS = [
  {
    title: "Autonomous Object Sorting using a Mobile Robot",
    image: robotics1,
    description:
      "Developed algorithms for an autonomous robot capable of sorting colored objects in a simulated arena using MATLAB and Simulink. The system integrated path planning, object detection, and localization while avoiding obstacles.",
    technologies: ["MATLAB", "Python", "SIMULINK", "Computer Vision", "Path Planning"],
    category: "Mechanical Engineering"
  },
  {
    title: "Soft Exosuit for Spinal Muscular Atrophy (SESMA 3.0)",
    image: sesma1,
    description:
      "Led mechatronics and control design for an assistive exosuit. Integrated IMUs and force sensors on a custom PCB and implemented control theory algorithms in C++ to improve real-time motor response by 20%.",
    technologies: ["C++", "PCB Design", "IMU Sensors", "MATLAB", "Control Theory"],
    category: "Electrical Engineering"
  },
  {
    title: "Stevens Ankle-Foot Electromechanical (SAFE) Orthosis",
    image: proof1,
    description:
      "Developed and tested 5+ 3D-printed prototypes for a powered orthosis. Contributed to design refinement and failure mode analysis, reducing structural weight by 15%.",
    technologies: ["SolidWorks", "3D Printing", "PLA-CF", "Structural Analysis"],
    category: "Mechanical Engineering"
  },
  {
    title: "Vehicle Dynamics using MATLAB",
    image: matlabcar1,
    description:
      "Simulated lateral and longitudinal vehicle dynamics in MATLAB and Simulink using state-space models and the Euler-Lagrange method. Integrated tire forces, propulsion, and steering control.",
    technologies: ["MATLAB", "Simulink", "Vehicle Dynamics", "Control Systems"],
    category: "Mechanical Engineering"
  },
  {
    title: "Signal Processing using ML - Random Forest",
    image: ml1,
    description:
      "Radar Target Classifier using denoised spectrograms and Random Forest, extracting velocity and feature importance from range-Doppler radar data. end-effector with pneumatic control for AFP, and implemented a path planning algorithm in Python integrated with ROS 2.",
    technologies: ["Signal Processing", "Python", "Random Forest"],
    category: "AI"
  },
];

