import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ rotate: 180, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full bg-slate-100
                 dark:bg-slate-800
                 dark:text-slate-300
                 hover:bg-slate-500/10
                 dark:hover:bg-slate-500/20
                 transition-colors duration-300"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {darkMode ? (
            <FaSun size={16} style={{ color: "yellow" }} />
          ) : (
            <FaMoon size={16} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;