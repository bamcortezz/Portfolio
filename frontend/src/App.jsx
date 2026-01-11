import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

// Lazy load page components for better performance
const Home = lazy(() => import("./components/pages/Home"));
const Skills = lazy(() => import("./components/pages/Skills"));
const Profile = lazy(() => import("./components/pages/Profile"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Contact = lazy(() => import("./components/pages/Contact"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        }
      >
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
      </Suspense>
    </div>
  );
}

export default App;
