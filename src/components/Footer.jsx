import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="relative overflow-hidden bg-slate-50 dark:bg-[#030712] py-8">
      <div className="absolute top-10 left-6 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400"
        >
          <p className="text-slate-600 dark:text-slate-400">© 2026 Iyvonne Ayoyi. All rights reserved.</p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/iyvonne-ayoyi-a265192a9"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 bg-white/5 backdrop-blur-md text-slate-700 dark:text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/IyvonneAyoyi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 bg-white/5 backdrop-blur-md text-slate-700 dark:text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="mailto:iyvonneayoyi@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 bg-white/5 backdrop-blur-md text-slate-700 dark:text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>

          <p className="text-slate-600 dark:text-slate-400">
            Built with <span className="text-cyan-400">React</span>, <span className="text-cyan-400">Tailwind CSS</span> and <span className="text-cyan-400">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
