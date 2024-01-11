import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Services from "./components/Services.js"
import Contacts from "./components/Contacts.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="w-full bg-background">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
