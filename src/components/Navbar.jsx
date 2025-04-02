import logo from '../assets/kevinRushLogo.png'; 
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-red-900 mb-20 flex items-center justify-between py-6 px-8">
      <div className="shrink-0 flex items-center">
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <FaLinkedin />
        <FaGithub />
        <FaGoogle />
      </div>
    </nav>
  );
};

export default Navbar;
