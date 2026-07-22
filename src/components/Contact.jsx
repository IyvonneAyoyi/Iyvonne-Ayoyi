import { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"

const serviceOptions = [
  "Frontend Development",
  "GIS & Remote Sensing",
  "Data Science & Analysis",
  "Web Mapping",
  "Collaboration",
  "Other",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    // Allow the native form submit to open the new tab (FormSubmit).
    // Clear the controlled inputs shortly after submitting so the form fields reset.
    setTimeout(() => {
      setFormData({ name: "", email: "", service: "", message: "" })
    }, 700)
  }

  return (
    <section id="contact" className="scroll-mt-28 relative overflow-hidden bg-slate-50 dark:bg-[#030712] py-24">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-violet-500/15 blur-3xl translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-linear-to-r from-cyan-500 to-violet-600" />
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
            Looking for a developer with expertise in geospatial technology, data science, and modern web development? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="lg:col-span-2">
            <p className="text-slate-600 dark:text-slate-300 leading-8 mb-10">
           My work brings together geospatial technology, data science, AI, machine learning, and modern web development to transform complex data into meaningful
           insights and impactful digital solutions.
            </p>


            <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-col lg:gap-3 mb-6">
              <a href="mailto:iyvonneayoyi@gmail.com" className="flex flex-col items-center text-center gap-3 p-3 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 transition-all group lg:flex-row lg:text-left lg:gap-3">
                <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0"><FaEnvelope size={16} className="text-cyan-400" /></div>
                <div className="min-w-0 w-full space-y-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-cyan-400">iyvonneayoyi@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/iyvonne-ayoyi-a265192a9" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center gap-3 p-3 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 transition-all group lg:flex-row lg:text-left lg:gap-3">
                <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0"><FaLinkedin size={16} className="text-cyan-400" /></div>
                <div className="min-w-0 w-full space-y-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-cyan-400">Iyvonne Ayoyi</p>
                </div>
              </a>

              <div className="flex flex-col items-center text-center gap-3 p-3 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 transition-all lg:flex-row lg:text-left lg:gap-3">
                <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0"><FaMapMarkerAlt size={16} className="text-cyan-400" /></div>
                <div className="min-w-0 w-full space-y-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">Follow me:</p>
              <div className="flex gap-4">
                <a href="mailto:iyvonneayoyi@gmail.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                  <FaEnvelope size={18} />
                </a>
                <a href="https://www.linkedin.com/in/iyvonne-ayoyi-a265192a9" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://github.com/IyvonneAyoyi" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-md p-8 shadow-2xl shadow-slate-900/5">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Send a Message</h3>
              <form action="https://formsubmit.co/iyvonneayoyi@gmail.com" method="POST" target="_blank" onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" autoComplete="name" required className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition focus:border-cyan-400 focus:outline-none autofill:bg-transparent autofill:text-slate-900 dark:autofill:text-white" style={{ backgroundColor: 'transparent', WebkitBoxShadow: '0 0 0px 1000px transparent inset', boxShadow: '0 0 0px 1000px transparent inset' }} />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition focus:border-cyan-400 focus:outline-none autofill:bg-transparent autofill:text-slate-900 dark:autofill:text-white" style={{ backgroundColor: 'transparent', WebkitBoxShadow: '0 0 0px 1000px transparent inset', boxShadow: '0 0 0px 1000px transparent inset' }} />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Service</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required className={`w-full appearance-none rounded-xl border border-slate-700 bg-transparent px-4 py-3 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 focus:outline-none ${formData.service ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-400'}`}>
                    <option value="" disabled hidden>Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-white">{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 focus:outline-none resize-none" />
                </div>

                <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95">
                  <FaPaperPlane />
                  Send Message
                </button>
                {/* Form will open in a new tab; inputs are cleared after submit */}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
