import React from "react";
import home1 from "../img/home1.jpg";
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any software or application or website development that
          you want to create and deploy publicly.
        </p>
        <button>Contact US</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  );
}

// Styled Components

export default AboutSection;
