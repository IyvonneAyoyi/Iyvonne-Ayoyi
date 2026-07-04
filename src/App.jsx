import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <div className="h-[200vh] pt-32 text-center">
        <h1 className="text-3xl text-cyan-400 dark:text-cyan-300">
          Scroll down to test Navbar
        </h1>
      </div>
    </div>
  );
}

export default App;