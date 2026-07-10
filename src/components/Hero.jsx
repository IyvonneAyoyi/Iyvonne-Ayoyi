import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import profile from "../assets/iyvonne.png";
import resume from "../assets/resume.pdf";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section
  id="home"
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-slate-50
    dark:bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

    <div
  className="
    relative
    z-10
    max-w-7xl
    mx-auto
    px-6
    lg:px-10
    py-10
    lg:py-16
    w-full
    min-h-screen
    grid
    lg:grid-cols-2
    gap-10
    lg:gap-16
    items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Heading */}
          <h1
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              font-semibold
              leading-normal
              text-cyan-400
              mb-5
              lg:mb-8
            "
          >
            Hello 👋, I'm Iyvonne Ayoyi
          </h1>

          {/* Description */}
          <p
            className="
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
              lg:leading-9
              max-w-lg
              mx-auto
              lg:mx-0
              text-slate-600
              dark:text-slate-300
            "
          >
            I build data-driven applications that transform complex
            information into meaningful insights. With a strong foundation
            in{" "}
            <span className="text-cyan-400 font-semibold">
              Geospatial Information Science
            </span>
            , I'm expanding my expertise in{" "}
            <span className="text-violet-400 font-semibold">
              Data Science
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              modern web development
            </span>{" "}
            to create impactful, user-focused solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              flex
              justify-center
              lg:justify-start
              gap-3
              mt-8
              lg:mt-10
            "
          >
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                sm:px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-600
                text-white
                text-sm
                sm:text-base
                font-semibold
                hover:scale-105
                transition
              "
            >
              Hire Me
              <FaArrowRight size={14} />
            </a>

            <a
              href={resume}
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                sm:px-6
                py-3
                rounded-xl
                border
                border-cyan-500
                text-cyan-400
                text-sm
                sm:text-base
                font-semibold
                hover:bg-cyan-500
                hover:text-white
                transition
              "
            >
              <FaDownload size={14} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-violet-600
                blur-3xl
                opacity-30
              "
            />

            <img
              src={profile}
              alt="Iyvonne Ayoyi"
              className="
                relative
                w-60
                h-60
                sm:w-72
                sm:h-72
                lg:w-[430px]
                lg:h-[430px]
                rounded-full
                object-cover
                border-4
                border-cyan-400/40
                shadow-[0_0_70px_rgba(34,211,238,.25)]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;