import { motion } from "framer-motion";

const SpringButton = ({children}) => {
  return (
    <button className="bg-red-500 relative flex items-center justify-center">
      <motion.div
        className="bg-[#fd7e14] z-0 absolute w-32 rounded-md h-[2.5rem]"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      />
      <span className="relative z-10 madimi text-xl text-white">{children}</span>
    </button>
  );
};

export default SpringButton;
