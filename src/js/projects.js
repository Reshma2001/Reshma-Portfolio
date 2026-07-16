import "../css/projects.css";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "../component/revealanimation.js";

export default function Projects() {
  return (
    <>
      <motion.section
        id="projects"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
      >
        <motion.div class="titleContent" variants={FADE_UP}>
          <div class="numberFormat">04.</div>
          <div class="aboutTitle">Projects</div>
        </motion.div>
        <div class="projectListContainer">
          <motion.div class="projectCard" variants={FADE_UP}>
            <div class="projectType">Mini Project</div>
            <div class="projectName">Teaching Content for Students</div>
            <div class="projectDesc">
              Developed a responsive educational web application designed to
              improve the accessibility of learning materials for students,
              featuring intuitive user interfaces.
            </div>
            <div class="knowledgeGain">
              <div class="knowledge">HTML</div>
              <div class="knowledge">CSS</div>
              <div class="knowledge">Bootstrap</div>
              <div class="knowledge">PHP</div>
              <div class="knowledge">MySQL</div>
            </div>
          </motion.div>
          <motion.div class="projectCard" variants={FADE_UP}>
            <div class="projectType">Major Project</div>
            <div class="projectName">
              Disposal of Bio-Waste Management System
            </div>
            <div class="projectDesc">
              Built a comprehensive web-based tracking system to improve waste
              disposal monitoring and data organization through robust digital
              tracking features.
            </div>
            <div class="knowledgeGain">
              <div class="knowledge">HTML</div>
              <div class="knowledge">CSS</div>
              <div class="knowledge">JavaScript</div>
              <div class="knowledge">MySQL</div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
