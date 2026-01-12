import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
