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
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitStatus("")

    const formValues = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      _subject: `New message from ${formData.name || "a visitor"}`,
      _captcha: "false",
    }

    const tempForm = document.createElement("form")
    tempForm.method = "POST"
    tempForm.action = "https://formsubmit.co/22c3e94ba33c4d80923a862241cffa77"
    tempForm.target = "_blank"
    tempForm.style.display = "none"

    Object.entries(formValues).forEach(([name, value]) => {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = name
      input.value = value
      tempForm.appendChild(input)
    })

    document.body.appendChild(tempForm)
    tempForm.submit()
    document.body.removeChild(tempForm)

    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    })
    setSubmitStatus("Thank you! Your message has been sent successfully.")

    setTimeout(() => {
      setSubmitStatus("")
    }, 5000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 dark:bg-[#030712] py-24">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-violet-500/15 blur-3xl translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-linear-to-r from-cyan-500 to-violet-600" />
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">
            Have a project, collaboration, or opportunity in mind? Let's create something meaningful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="lg:col-span-2">
            <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
              Whether you need frontend development, GIS solutions, geospatial analysis, or data-driven insights, I'd love to hear about your project.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-500">Frontend Development</span>
              <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">GIS Solutions</span>
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-500">Geospatial Analysis</span>
              <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">Data Science</span>
            </div>

            <div className="grid gap-4">
              <a href="mailto:iyvonneayoyi@gmail.com" className="group overflow-hidden rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"><FaEnvelope size={20} /></div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">iyvonneayoyi@gmail.com</p>
              </a>

              <a href="https://www.linkedin.com/in/iyvonne-ayoyi-a265192a9" target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"><FaLinkedin size={20} /></div>
                <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Iyvonne Ayoyi</p>
              </a>

              <a href="https://github.com/IyvonneAyoyi" target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"><FaGithub size={20} /></div>
                <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">IyvonneAyoyi</p>
              </a>

              <div className="group overflow-hidden rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"><FaMapMarkerAlt size={20} /></div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-md p-8 shadow-2xl shadow-slate-900/5">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white transition focus:border-cyan-400 focus:outline-none" />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white transition focus:border-cyan-400 focus:outline-none" />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Service</label>
                  <input
                    id="service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Select a service"
                    list="service-options"
                    className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white transition focus:border-cyan-400 focus:outline-none"
                  />
                  <datalist id="service-options">
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white transition focus:border-cyan-400 focus:outline-none resize-none" />
                </div>

                {submitStatus && (
                  <p className={`text-sm px-4 py-3 rounded-lg ${submitStatus.includes("successfully") ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`}>
                    {submitStatus}
                  </p>
                )}

                <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
