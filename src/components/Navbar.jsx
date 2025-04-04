import logo from "/OmGLogo.png"; 
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm mb-20 flex items-center justify-between py-6 px-4">
      {/* Left: Logo */}
      <div className="flex items-center flex-shrink-0">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex space-x-6 text-lg font-semibold text-gray-500">
        <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition">Home</button>
        <button onClick={() => scrollToSection('experience')} className="hover:text-purple-400 transition">Work Experience</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition">Contact Me</button>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-4 text-3xl text-gray-600">
        <a href="https://www.linkedin.com/in/omgaikwad" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="https://github.com/omgaikwad26" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
