import { motion } from "framer-motion";
import profile from "../assets/iyvonne.png";
import { FaMapMarkerAlt, FaShieldAlt, FaBookOpen, FaUsers,FaGlobeAfrica, } from "react-icons/fa";


const coreValues = [
  {
    title: "Integrity",
    icon: FaShieldAlt,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    description:
      "I believe in producing reliable, ethical, and high-quality work. Trust, accountability, and professionalism guide every project I undertake.",
  },
  {
    title: "Continuous Learning",
    icon: FaBookOpen,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    description:
      "Technology evolves rapidly, and I embrace every opportunity to expand my knowledge while continuously improving my technical and professional skills.",
  },
  {
    title: "Collaboration",
    icon: FaUsers,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    description:
      "Great solutions are built together. I value teamwork, communication, knowledge sharing, and learning from diverse perspectives.",
  },
  {
    title: "Impact",
    icon: FaGlobeAfrica,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    description:
      "My goal is to create technology that solves meaningful challenges, empowers informed decision-making, and positively impacts communities.",
  },
];
const About = () => {
  return (
    <section
      id="about"
      className="
        scroll-mt-28
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

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
         
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>

          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
        </motion.div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="flex justify-center"
          >
            <div
              className="
                w-full
                max-w-sm
                rounded-3xl
                bg-white/5
                backdrop-blur-md
                border
                border-slate-700
                p-8
                shadow-xl
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

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Iyvonne Ayoyi
                </h3>

                <p className="mt-5 text-lg font-semibold text-cyan-400 leading-8">
                  Geospatial Information Scientist
                </p>

                <p className="text-lg font-semibold text-violet-400 leading-8">
                  Data Science Learner • Frontend Developer
                </p>
                
                <div className="mt-5 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Based in Nairobi, Kenya</span>
                </div>

                <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8">
                  Building impactful digital solutions through geospatial
                  technology, data, and modern web development.
                </p>

              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="space-y-7 text-lg leading-9 text-slate-600 dark:text-slate-300 text-justify">

              <p>
                I am a Geospatial Information Science graduate with experience
                in GIS, remote sensing, spatial analysis, and mapping. My
                passion lies in transforming geographic data into meaningful
                insights that support informed decision-making and solve
                real-world challenges.
              </p>

              <p>
                Driven by curiosity and a commitment to continuous learning, I
                am expanding my expertise in
                <span className="text-violet-400 font-semibold">
                  {" "}Data Science
                </span>,
                applying analytical techniques to uncover patterns, build
                predictive models, and develop intelligent, data-driven
                solutions that complement spatial intelligence.
              </p>

              <p>
                Beyond analytics, I enjoy building clean, responsive, and
                accessible web applications using
                <span className="text-cyan-400 font-semibold">
                  {" "}React
                </span>,
                <span className="text-cyan-400 font-semibold">
                  {" "}JavaScript
                </span>,
                and modern frontend technologies. My long-term goal is to bridge
                geospatial technology, data science, and software development to
                create innovative digital solutions with meaningful impact.
              </p>

            </div>

          </motion.div>

        </div>
                {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Core Values
            </h3>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-8">
              The principles that guide how I learn, collaborate, and build
              impactful solutions through geospatial technology, data science,
              and software development.
            </p>
          </div>

          <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-6
  ">
  {coreValues.map((value) => {
    const Icon = value.icon;

    return (
      <motion.div
        key={value.title}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="
          rounded-3xl
          bg-white/5
          backdrop-blur-md
          border
          border-slate-700
          p-7
          shadow-xl
        "
      >
        <div
          className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6`}
        >
          <Icon className={`${value.color} text-2xl`} />
        </div>

        <h4 className={`text-xl font-semibold ${value.color} mb-4`}>
          {value.title}
        </h4>

        <p className="text-slate-600 dark:text-slate-300 leading-8">
          {value.description}
        </p>
      </motion.div>
    );
  })}
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;