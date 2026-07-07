import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-5">

      <a
        href="https://github.com/IyvonneAyoyi"
        target="_blank"
        rel="noreferrer"
        className="p-4 rounded-xl
        bg-white/5
        backdrop-blur-lg
        border border-slate-700
        hover:border-cyan-400
        hover:scale-110
        transition"
      >
        <FaGithub size={22}/>
      </a>

      <a
        href="https://www.linkedin.com/in/iyvonne-ayoyi-a265192a9/"
        target="_blank"
        rel="noreferrer"
        className="p-4 rounded-xl
        bg-white/5
        backdrop-blur-lg
        border border-slate-700
        hover:border-cyan-400
        hover:scale-110
        transition"
      >
        <FaLinkedin size={22}/>
      </a>

      <a
        href="mailto:iyvonneayoyi@gmail.com"
        className="p-4 rounded-xl
        bg-white/5
        backdrop-blur-lg
        border border-slate-700
        hover:border-cyan-400
        hover:scale-110
        transition"
      >
        <FaEnvelope size={22}/>
      </a>

    </div>
  );
};

export default SocialLinks;