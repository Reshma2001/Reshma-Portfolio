import "./css/styles.css";
import Intro from "./js/intro.js";
import About from "./js/about.js";
import Experience from "./js/experience.js";
import Skills from "./js/skills.js";
import Projects from "./js/projects.js";
import Contact from "./js/contact.js";

export default function App() {
  return (
    <>
      {/* Header */}
      <header>
        <div class="headerMainContainer">
          <div class="avatar">R_M</div>
          <nav class="menuContainer">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="MainContainer">
        <Intro /> {/*Intro*/}
        <About /> {/*About */}
        <Experience /> {/*Experience*/}
        <Skills /> {/** Skills*/}
        <Projects /> {/** Projects*/}
        <Contact /> {/** Contact*/}
      </main>

      <footer>
        <div class="copyRight">Built by Reshma M. © 2026</div>
      </footer>
    </>
  );
}
