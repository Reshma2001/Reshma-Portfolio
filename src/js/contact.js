import "../css/contact.css";
import mailImg from "../assets/mail.svg";
import callImg from "../assets/call.svg";
import locationImg from "../assets/location.svg";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "../component/revealanimation.js";

export default function Contact() {
  return (
    <>
      <motion.section
        id="contact"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "-200px" }}
      >
        <motion.div class="titleContent contactNumFormat" variants={FADE_UP}>
          <div class="numberFormat">05. What's Next?</div>
        </motion.div>
        <div class="contactContainer">
          <motion.div class="contactTitle" variants={FADE_UP}>
            Get In Touch
          </motion.div>
          <div class="contactDesc">
            I'm currently looking for new opportunities to build amazing
            products. Whether you have a question or just want to say hi, my
            inbox is always open.
          </div>
          <motion.div class="contactCard" variants={FADE_UP}>
            <div class="info">
              <div class="imgContainer">
                <img src={mailImg} />
              </div>
              <div class="detaile">reshmamuniyappan2009@gmail.com</div>
            </div>
            <div class="info">
              <div class="imgContainer">
                <img src={callImg} />
              </div>
              <div class="detaile">+91-8695681001</div>
            </div>
            <div class="info">
              <div class="imgContainer">
                <img src={locationImg} />
              </div>
              <div class="detaile">Trichy, Tamil Nadu - 621211</div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
