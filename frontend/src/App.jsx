import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Profile from "./components/pages/Profile";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="scroll-container">
        <section id="home">
          <Home />
        </section>
        <hr className="section-divider" />
        <section id="about">
          <Profile />
        </section>
        <hr className="section-divider" />
        <section id="skills">
          <Skills />
        </section>
        <hr className="section-divider" />
        <section id="projects">
          <Projects />
        </section>
        <hr className="section-divider" />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
