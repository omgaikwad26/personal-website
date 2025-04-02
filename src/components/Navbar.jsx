import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-gray-600">
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
