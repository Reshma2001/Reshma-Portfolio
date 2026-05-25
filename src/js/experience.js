import "../css/experience.css";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "../component/revealanimation.js";

export default function Experience() {
  return (
    <>
      <motion.section
        id="experience"
        class="experienceContainer"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "-200px" }}
      >
        <motion.div class="titleContent" variants={FADE_UP}>
          <div class="numberFormat">02.</div>
          <div class="aboutTitle">Experience</div>
        </motion.div>
        <div class="expContent">
          <div class="experiences">
            <motion.div class="joinDate" variants={FADE_UP}>
              Jun 2023 – Present
            </motion.div>
            <motion.div class="expInfo" variants={FADE_UP}>
              <ul class="roleDetails">
                <li class="roleInfo">
                  <div class="expRole">Software Developer I</div>
                  <div class="company">Bytes Evolution Systems</div>
                </li>
                <ul>
                  <li>
                    Developed and maintained cross-platform mobile applications
                    using Ionic Framework, HTML, CSS and JavaScript.
                  </li>
                  <li>
                    Resolved critical application bugs and optimized
                    performance, improving application stability and user
                    experience.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to implement
                    features, troubleshoot issues and deliver application
                    updates.
                  </li>
                  <li>
                    Worked with .NET and MongoDB for backend integration and
                    data handling.
                  </li>
                </ul>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
