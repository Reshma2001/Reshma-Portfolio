import "../css/about.css";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "../component/revealanimation.js";

export default function About() {
  return (
    <>
      <motion.section
        id="about"
        class="aboutContainer"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "-200px" }}
      >
        <div class="sectionMainContainer">
          <motion.div class="titleContent" variants={FADE_UP}>
            <div class="numberFormat">01.</div>
            <div class="aboutTitle">About Me</div>
          </motion.div>
          <div class="aboutContent">
            <motion.div class="summaryContainer" variants={FADE_UP}>
              <p class="summaryText">
                Front-End & Full-Stack Developer with 2+ years of experience
                developing responsive web and mobile applications using HTML,
                CSS, JavaScript, Ionic, Xamarin and .NET technologies.
              </p>
              <p class="summaryText">
                I am highly skilled in debugging, performance optimization and
                backend integration. My focus is on crafting clean, accessible,
                and performant user interfaces while ensuring robust connections
                to the backend. Currently, I am deeply expanding my expertise in
                React and modern front-end development patterns.
              </p>
            </motion.div>
            <motion.div class="eduInfoContainer" variants={FADE_UP}>
              <div class="eduInfo">
                <div class="summaryTitle">Education</div>
                <div class="degree">B.Tech, Information Technology</div>
                <div class="clgInfo">
                  M.A.M College of Engineering and Technology, Trichy
                </div>
                <div class="year">2019 – 2023</div>
                <div class="percentage">CGPA: 8.46/10 (85%)</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
