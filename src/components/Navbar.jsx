import { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import ThemeToggle from "./ThemeToggle";
import {FaBars,FaTimes } from 'react-icons/fa'


const Navbar = () => {
const [nav, setNav] = useState(false);
const [shadow, setShadow] = useState(false);

const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
});

const links = [
    { id: 1, link: "home", text: "Home" },
    { id: 2, link: "about", text: "About" },
    { id: 3, link: "skills", text: "Skills" },
    { id: 4, link: "projects", text: "Projects" },
    { id: 5, link: "contact", text: "Contact" },
];
 useEffect(() => {
    if (darkMode){
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const handleShadow = () => {
        setShadow(window.scrollY >= 90);
    };
        window.addEventListener('scroll', handleShadow);
            return () => window.removeEventListener('scroll', handleShadow);
    }, []);
    
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {type:'spring',stiffness:100,damping:20} 
    }
  };
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { 
        opacity: 1,
        x: 0,
        transition: {type:'spring',stiffness:100,damping:25} 
    },
    exit: { 
        opacity: 0, 
        x: '-100%', 
        transition: {duration:0.3} 
    }
  };
    return (
    <>
        <motion.div
  variants={navVariants}
  initial="hidden"
  animate="visible"
  className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4">
            
            <div
  className={`w-full rounded-4xl
    ${
      shadow
        ? "shadow-[0_0_20px_rgb(34_211_238)]"
        : ""
    }
    bg-slate-100/90
    dark:bg-black/50
    backdrop-blur-md
    border border-slate-200 dark:border-slate-700`}>

            <div className="flex items-center h-16 sm:h-20 px-6 md:px-10">
                <div className="flex flex-1 justify-start">
                <motion.a
              href="#home"
              whileTap={{ scale: 0.95 }}
              className="inline-block text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-cyan-400">Iyvonne </span>
            <span className="text-slate-400 dark:text-slate-100">
                    Ayoyi
            </span>
               </motion.a>
                </div>
                <div className="hidden md:flex flex-1 justify-center">
                <ul className="flex items-center gap-10 lg:gap-14">
                    {links.map(({id,link,text})=>(
                        <motion.li
                        key={id}
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}>
                            <a href={`#${link}`}
                            className="text-sm lg:text-base text-slate-700 
                            dark:text-slate-300 hover:text-cyan-600
                             dark:hover:text-cyan-400 transition-all duration-300
                             font-medium relative group whitespace-nowrap
                             hover:[text-shadow:0_0_8px_rgb(34_211_238)]">
                                {text}
                            </a>
                        </motion.li>
                    ))}
                </ul>
                </div>
            <div className="hidden md:flex flex-1 justify-end">
                <ThemeToggle
    darkMode={darkMode}
    toggleDarkMode={toggleDarkMode}
/>
            </div>
            <div className="flex md:hidden ml-auto items-center space-x-3">
                <ThemeToggle
    darkMode={darkMode}
    toggleDarkMode={toggleDarkMode}
/>
                <motion.button 
                onClick={() => setNav(prev => !prev)}
                whileTap={{scale:0.9}}
                className="text-slate-700 dark:text-white p-2"
                aria-label="Toggle Mobile Menu">
                    {nav ? <FaTimes size={20}/> : <FaBars size={20} />}
                </motion.button>
            </div>
                </div>
                </div>
        </motion.div>
        <AnimatePresence>
            {nav && (
                <>
                <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-0 left-0 w-72 sm:w-[320px] 
                h-screen bg-white dark:bg-black z-40 pt-20
                shadow-xl">
                    <div className="flex flex-col h-full">
                        <ul className="flex-1 py-6 px-4">
                            {links.map(({id,link,text},index)=>(
                                <motion.li
                                  key={id}
                                  initial={{opacity:0, x:-20}}
                                  animate={{opacity:1, x:0}}
                                  transition={{delay:0.1 + index * 0.05}}
                                  className="mb-2">
                    <motion.a
                    href={`#${link}`}
                    onClick ={()=>setNav(false)}
                    whileHover={{
                    x:10,backgroundColor:'rgb(139,92,245,0.1)'}}
                    className="block px-4 py-3 text-slate-800
                        dark:text-white rounded-lg transition-colors
                        duration-300 font-medium">
                            {text}
                    </motion.a>                
                                    </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
  );
};

export default Navbar