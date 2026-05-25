import "../css/intro.css";
import linkedInImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "../component/revealanimation.js";

export default function Intro() {
  return (
    <>
      <motion.section
        class="introContainer"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
      >
        <div class="sectionMainContainer">
          <div class="userInfo">
            <motion.div class="greetings" variants={FADE_UP}>
              Hi, My name is
            </motion.div>
            <motion.div class="userName" variants={FADE_UP}>
              Reshma M.
            </motion.div>
            <motion.div class="role" variants={FADE_UP}>
              Front-End & Full-Stack Developer.
            </motion.div>
          </div>
          <motion.div class="summaryText" variants={FADE_UP}>
            I build responsive, high-performance web and mobile applications.
            Currently expanding my expertise in React and modern front-end
            architectures while delivering cross-platform solutions.
          </motion.div>
          <motion.div class="userLinks" variants={FADE_UP}>
            <a
              href="../assets/Reshma-M-Resume.docx"
              download="Reshma-M-Resume.docx"
              class="downloadBtnContainer"
            >
              <button id="btnForDownload">Download Resume</button>
            </a>
            <a
              class="linkedIn"
              href="http://www.linkedin.com/in/reshma-muniyappan-907841190"
              target="_blank"
            >
              <img src={linkedInImg} />
            </a>
            <a
              class="githud"
              href="https://github.com/Reshma2001"
              target="_blank"
            >
              <img src={githubImg} />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
