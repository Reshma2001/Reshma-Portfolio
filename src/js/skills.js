import "../css/skills.css";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "../component/revealanimation.js";

export default function Skills() {
  return (
    <>
      <motion.section
        id="skills"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "-200px" }}
      >
        <motion.div class="titleContent" variants={FADE_UP}>
          <div class="numberFormat">03.</div>
          <div class="aboutTitle">Technical Skills</div>
        </motion.div>
        <div class="skillsListContainer">
          <motion.div class="skillCard" variants={FADE_UP}>
            <div class="skillTitle">Front-End</div>
            <div class="skills">
              <div class="skill">HTML</div>
              <div class="skill">CSS</div>
              <div class="skill">JavaScript</div>
              <div class="skill">Bootstrap</div>
            </div>
          </motion.div>
          <motion.div class="skillCard" variants={FADE_UP}>
            <div class="skillTitle">Framworks</div>
            <div class="skills">
              <div class="skill">IonicFramework</div>
              <div class="skill">Xamarin</div>
              <div class="skill">React (Learning)</div>
            </div>
          </motion.div>
          <motion.div class="skillCard" variants={FADE_UP}>
            <div class="skillTitle">Backend</div>
            <div class="skills">
              <div class="skill">C#</div>
              <div class="skill">.NET Framework</div>
            </div>
          </motion.div>
          <motion.div class="skillCard" variants={FADE_UP}>
            <div class="skillTitle">Database</div>
            <div class="skills">
              <div class="skill">MongoDB</div>
            </div>
          </motion.div>
          <motion.div class="skillCard" variants={FADE_UP}>
            <div class="skillTitle">Tools</div>
            <div class="skills">
              <div class="skill">Git</div>
              <div class="skill">Visual Studio</div>
            </div>
          </motion.div>
          <motion.div class="skillCard" variants={FADE_UP}>
            <div class="skillTitle">Concepts</div>
            <div class="skills">
              <div class="skill">OPPS</div>
              <div class="skill">Responsive Design</div>
              <div class="skill">Problem Solving</div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
