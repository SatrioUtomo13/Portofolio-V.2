import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Services from "./components/Services.js"

function App() {
  return (
    <div className="w-full h-[5000px] bg-background">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
