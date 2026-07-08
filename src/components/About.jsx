import { motion } from "framer-motion";
import profile from "../assets/iyvonne.png";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-slate-50
        dark:bg-[#030712]
        py-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>

          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="flex flex-col items-center"
          >
            {/* Glass Card */}
            <div
              className="
                bg-white/5
                backdrop-blur-md
                border
                border-slate-700
                rounded-3xl
                p-8
                shadow-xl
                w-full
                max-w-sm
              "
            >
              <div className="flex justify-center">

                <img
                  src={profile}
                  alt="Iyvonne Ayoyi"
                  className="
                    w-60
                    h-60
                    rounded-full
                    object-cover
                    border-4
                    border-cyan-400/40
                    shadow-[0_0_60px_rgba(34,211,238,.25)]
                  "
                />

              </div>

              <div className="mt-8 text-center">

                <h3 className="text-2xl font-bold text-white">
                  Iyvonne Ayoyi
                </h3>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm font-medium">
    Geospatial Information Scientist
  </span>

  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-400 text-sm font-medium">
    Data Science Learner
  </span>

  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm font-medium">
    Frontend Developer
  </span>
</div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Building solutions with data, maps, and code.
            </h3>

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-300 mb-6">
              I am a Geospatial Information Science graduate with experience in
              GIS analysis, remote sensing, spatial databases, and mapping
              applications. My background has equipped me with the ability to
              transform spatial data into meaningful insights that support
              informed decision-making.
            </p>

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-300 mb-6">
              Alongside my GIS expertise, I am expanding my skills in Data
              Science to uncover patterns, build predictive models, and create
              data-driven solutions. I enjoy combining analytical thinking with
              practical problem-solving to address real-world challenges.
            </p>

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">
              I am also growing as a Frontend Developer, building responsive,
              accessible, and modern web applications with React, Tailwind CSS,
              and JavaScript. My goal is to bridge geospatial technology, data
              science, and web development to create impactful digital
              experiences.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-white/5 backdrop-blur-md border border-slate-700 rounded-2xl p-5">
                <h4 className="text-cyan-400 font-bold text-xl">GIS</h4>
                <p className="mt-2 text-slate-300">
                  Spatial Analysis, Remote Sensing & Mapping
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-slate-700 rounded-2xl p-5">
                <h4 className="text-violet-400 font-bold text-xl">Data</h4>
                <p className="mt-2 text-slate-300">
                  Python, SQL, Machine Learning & Analytics
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-slate-700 rounded-2xl p-5">
                <h4 className="text-cyan-400 font-bold text-xl">Frontend</h4>
                <p className="mt-2 text-slate-300">
                  React, Tailwind CSS & JavaScript
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-slate-700 rounded-2xl p-5">
                <h4 className="text-violet-400 font-bold text-xl">Goal</h4>
                <p className="mt-2 text-slate-300">
                  Building impactful data-driven web applications.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;