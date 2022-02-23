import React from "react";
import home1 from "../img/home1.jpg";
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any software or application or website development that
          you want to create and deploy publicly.
        </motion.p>
        <motion.button variants={fade}>Contact US</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
}

// Styled Components

export default AboutSection;
