import Navbar from "./components/Nav";
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <div className="h-[200vh] pt-24 text-center">
        <h1 className="text-3xl text-cyan-400 dark:text-cyan-300">
          Scroll down to test Navbar
        </h1>
      </div>
    </div>
  );
}

export default App;