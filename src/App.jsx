import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
