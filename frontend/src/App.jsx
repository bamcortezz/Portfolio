import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<div>Projects Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;