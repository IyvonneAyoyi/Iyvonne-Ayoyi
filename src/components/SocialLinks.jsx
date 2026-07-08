import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">

      <a
        href="https://github.com/IyvonneAyoyi"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="
        w-12
        h-12
        rounded-xl
        flex
        items-center
        justify-center
        border
        border-slate-300
        dark:border-slate-700
        text-slate-700
        dark:text-white
        bg-white/5
        backdrop-blur-md
        hover:border-cyan-400
        hover:text-cyan-400
        hover:-translate-y-1
        transition-all
        duration-300"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/iyvonne-ayoyi-a265192a9/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="
        w-12
        h-12
        rounded-xl
        flex
        items-center
        justify-center
        border
        border-slate-300
        dark:border-slate-700
        text-slate-700
        dark:text-white
        bg-white/5
        backdrop-blur-md
        hover:border-cyan-400
        hover:text-cyan-400
        hover:-translate-y-1
        transition-all
        duration-300"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:iyvonneayoyi@gmail.com"
        aria-label="Email"
        className="
        w-12
        h-12
        rounded-xl
        flex
        items-center
        justify-center
        border
        border-slate-300
        dark:border-slate-700
        text-slate-700
        dark:text-white
        bg-white/5
        backdrop-blur-md
        hover:border-cyan-400
        hover:text-cyan-400
        hover:-translate-y-1
        transition-all
        duration-300"
      >
        <FaEnvelope size={20} />
      </a>

    </div>
  );
};

export default SocialLinks;