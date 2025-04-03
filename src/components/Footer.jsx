import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 py-4">
      <div className="container mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-neutral-500 text-sm"
        >
          © {new Date().getFullYear()} Om Gaikwad
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 