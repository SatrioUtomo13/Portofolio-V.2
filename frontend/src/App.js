import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"

function App() {
  return (
    <div className="w-full h-[3000px] bg-background">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
}

export default App;
