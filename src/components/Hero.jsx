import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import profile from "../assets/iyvonne.png";
import resume from "../assets/resume.pdf";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-slate-50 dark:bg-[#030712]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-24 left-20 w-96 h-96
          rounded-full bg-cyan-500/10 blur-[140px]"
        />

        <div
          className="absolute bottom-20 right-20 w-96 h-96
          rounded-full bg-violet-500/10 blur-[140px]"
        />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto
        px-6 lg:px-10 w-full
        grid lg:grid-cols-2
        items-center gap-16"
      >
        {/* LEFT */}

        <div>

          {/* Greeting */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="inline-block mb-5"
          >
            <span
              className="px-5 py-2 rounded-full
              border border-cyan-500/30
              bg-white/10 backdrop-blur-md
              text-cyan-400"
            >
              👋 Hi, I'm Iyvonne
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity:0,x:-40 }}
            animate={{ opacity:1,x:0 }}
            transition={{ delay:.3 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            <span className="text-cyan-400">
              Building
            </span>

            <br />

            <span className="dark:text-white text-slate-900">
              Data-Driven
            </span>

            <br />

            <span className="bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-violet-500
            bg-clip-text
            text-transparent">
              Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:.5}}
            className="mt-6 text-xl font-semibold"
          >
            <span className="text-cyan-400">
              Geospatial Information Scientist
            </span>

            <span className="mx-2 text-slate-500">
              •
            </span>

            <span className="text-violet-400">
              Data Science Learner
            </span>

            <span className="mx-2 text-slate-500">
              •
            </span>

            <span className="dark:text-slate-300">
              Front-End Developer
            </span>
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.7}}
            className="mt-8 text-lg leading-8
            text-slate-600 dark:text-slate-400
            max-w-xl"
          >
            I build data-driven applications that transform complex
            information into meaningful insights. With a strong
            foundation in Geospatial Information Science, I'm expanding
            my expertise in data science and modern web development to
            create impactful, user-focused solutions.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:.9}}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="#contact"
              className="flex items-center gap-3
              px-8 py-4 rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-600
              text-white font-semibold
              hover:scale-105
              transition"
            >
              Contact Me
              <FaArrowRight />
            </a>

            <a
              href={resume}
              download
              className="flex items-center gap-3
              px-8 py-4 rounded-xl
              border border-cyan-500/30
              backdrop-blur-lg
              bg-white/5
              hover:bg-white/10
              transition"
            >
              <FaDownload />

              Resume
            </a>
          </motion.div>

          <div className="mt-12">
            <SocialLinks />
          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{opacity:0,scale:.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:.8}}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}

            <div
              className="absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-violet-600
              blur-3xl
              opacity-30
              animate-pulse"
            />

            <img
              src={profile}
              alt="Iyvonne Ayoyi"
              className="relative
              w-80
              h-80
              lg:w-[480px]
              lg:h-[480px]
              rounded-full
              object-cover
              border-4
              border-cyan-400/50
              shadow-[0_0_80px_rgba(34,211,238,.25)]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;