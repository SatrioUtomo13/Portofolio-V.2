import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Services from "./components/Services.js"
import Contacts from "./components/Contacts.js"

function App() {
  return (
    <div className="w-full h-[5000px] bg-background">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contacts/>
    </div>
  );
}

export default App;
