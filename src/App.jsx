import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <main  className="pt-24 lg:pt-20">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;