import {motion} from "framer-motion";

const frontendSkills = [
  {
    name: "HTML5",
    icon: "/icons/html5.svg",
  },
  {
    name: "CSS3",
    icon: "/icons/css3.svg",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind-css.svg",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
  },
];

const geospatialSkills = [
  {
    name: "ArcGIS Pro",
    icon: "/icons/arcgis-pro.png",
  },
  {
    name: "QGIS",
    icon: "/icons/qgis.svg",
  },
  {
    name: "Google Earth Engine",
    icon: "/icons/google-earth-engine.png",
  },
  {
    name: "PostgreSQL / PostGIS",
    icon: "/icons/postgresql.svg",
  },
];

const dataScienceSkills = [
  {
    name: "Python",
    icon: "/icons/python.svg",
  },
  {
    name: "R",
    icon: "/icons/r.svg",
  },
  {
    name: "NumPy",
    icon: "/icons/numpy.svg",
  },
  {
    name: "Pandas",
    icon: "/icons/pandas.svg",
  },
  {
    name: "Matplotlib",
    icon: "/icons/matplotlib.svg",
  },
  {
    name: "Scikit-Learn",
    icon: "/icons/scikit-learn.svg",
  },
];

function SkillSection({ title, skills, columns }) {
  return (
    <motion.div
  className="mb-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className={columns}>
        {skills.map((skill) => (
    <motion.div
      key={skill.name}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      transition={{
      duration: 0.2,
      ease: "easeOut",
}}
      
            className="group rounded-3xl bg-white/5 backdrop-blur-md border border-slate-700 p-7 text-center shadow-xl transition-all duration-300">
            <div className="flex justify-center items-center mb-5">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"/>
            </div>

            <h4 className="font-semibold text-sm md:text-base text-slate-900 dark:text-white">
              {skill.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
       id="skills"
  className="scroll-mt-28 relative overflow-hidden bg-slate-50 dark:bg-[#030712] py-24">

  <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-0 left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px]" />
  <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-violet-500/10 blur-[130px]" />
</div>

<div className="relative z-10 container mx-auto px-6">

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-center mb-20"
>
  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
    Skills
  </h2>

  <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-linear-to-r from-cyan-500 to-violet-600" />

  <p className="mt-6 max-w-3xl mx-auto leading-8 text-slate-600 dark:text-slate-300">
    My expertise combines geospatial technologies, frontend development, and data science to build interactive web applications, analyze spatial datasets, and create data-driven solutions.
  </p>
</motion.div>
        <SkillSection
          title="Frontend Development"
          skills={frontendSkills}
          columns="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6"
        />

        <SkillSection
          title="Geospatial Technologies"
          skills={geospatialSkills}
          columns="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        />

        <SkillSection
          title="Data Science"
          skills={dataScienceSkills}
          columns="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        />

      </div>
    </section>
  );
}

export default Skills;