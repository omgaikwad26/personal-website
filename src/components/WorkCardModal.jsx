import { motion } from "framer-motion";

const WorkCardModal = ({ title, date, details, results, onClose, image }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-5xl rounded-lg shadow-lg overflow-hidden relative flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-black text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left: Text Content */}
        <div className="w-full md:w-2/3 p-6 overflow-y-auto max-h-[80vh] space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">What I did?</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              {details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {results && (
            <div>
              <p className="font-semibold text-lg mb-2">Results:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                {results.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/3 bg-neutral-100 p-4 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt="Project visual"
              className="rounded-lg object-cover max-h-[60vh] w-full"
            />
          ) : (
            <div className="text-gray-400 italic text-sm text-center">
              No image provided
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkCardModal;
