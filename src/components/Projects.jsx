import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaGlobeAfrica,
  FaChartLine,
  FaGithub,
  FaExternalLinkAlt,
  FaCheck,
  FaClock,
} from "react-icons/fa";

import rainfall from "../assets/projects/rainfall-monitor.png";
import portfolio from "../assets/projects/portfolio.png";
import neonatal from "../assets/projects/neonatal-hiv.png";
import watershed from "../assets/projects/kilonzi-catchment.png";

const categories = ["Frontend", "Geospatial", "Data Science"];

const projects = {
  Frontend: [
    {
      title: "Rainfall & Flood Monitor",
      status: "Completed",
      image: rainfall,
      description:
        "A React web application that monitors rainfall conditions across Kenya using OpenMeteo API, interactive maps, and real-time weather data.The project was part of my frontend web development capstone project at Africa Leadership Experience (ALX).",

      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Leaflet",
        "OpenMeteo API",
      ],

      demo: "https://capstone-project-fe-six.vercel.app/",
      github: "",
    },

     {
    title: "Personal Portfolio",
    status: "In Progress",
    image: portfolio,

    description:
       "A modern responsive portfolio website built with React, Tailwind CSS, and Framer Motion to showcase my projects, technical skills, and journey across frontend development, geospatial technologies, and data science.The portfolio is continuously evolving as I build new applications and expand my skills.",

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],

    demo: "",
    github: "",
  },
],
    

  Geospatial: [
    {
      title: "Watershed Delineation",
      status: "Completed",
      image: watershed,

      description:
        "Delineated the Kilonzi Catchment in ArcMap using a Digital Elevation Model (DEM) and ArcGIS Hydrology tools to derive flow direction, flow accumulation, stream networks, and watershed boundaries. This project demonstrates the use of terrain analysis to support watershed characterization and informed water resource management.",

      tech: [
        "ArcMap",
        "Spatial Analyst",
        "DEM",
        "Hydrology",
      ],

      demo: watershed,
      github: "",
    },
  ],

  "Data Science": [
    {
      title: "Neonatal Mortality & Global HIV Trends",

      status: "Completed",

      image: neonatal,

      description:
        "Exploratory data analysis in R examining neonatal mortality and HIV trends using statistical summaries, visualizations, and spatial analysis.",

      tech: [
        "R",
        "Excel",
        "ggplot2",
        "dplyr",
        "sf",
      ],

      demo:
        "https://rpubs.com/Iyvonne/global-hiv-trends-mortality-eac",

      github: "",
    },
  ],
};

const icons = {
  Frontend: <FaCode />,
  Geospatial: <FaGlobeAfrica />,
  "Data Science": <FaChartLine />,
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 dark:bg-[#030712] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>

          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-linear-to-r from-cyan-500 to-violet-600" />

          <p className="mt-6 max-w-3xl mx-auto leading-8 text-slate-600 dark:text-slate-300">
            A collection of projects demonstrating my experience in frontend
            development, geospatial technologies, and data science.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium
                ${
                  activeCategory === category
                    ? "bg-linear-to-r from-cyan-500 to-violet-600 text-white shadow-lg"
                    : "bg-white/5 border border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-400"
                }`}
            >
              {icons[category]}
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">

            <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects[activeCategory].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-slate-700 shadow-xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />

      {/* Status Badge */}
<div
  className={`absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-lg
    ${
      project.status === "Completed"
        ? "bg-emerald-500 text-white"
        : "bg-amber-300 text-white"
    }`}
>
  {project.status === "Completed" ? (
    <span className="flex h-3 w-3 items-center justify-center rounded-full border border-white/80">
  <FaCheck className="text-[9px]" />
</span>
  ) : (
    <FaClock className="text-[11px]" />
  )}

  <span>{project.status}</span>
</div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-3 text-white font-medium hover:opacity-90 transition"
                      >
                        <FaExternalLinkAlt size={14} />
                        View Project
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-slate-700 dark:text-slate-200 hover:border-cyan-400 transition"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
                  </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;