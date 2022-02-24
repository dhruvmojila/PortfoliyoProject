import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.jpg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import useScroll from "./useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Hide>
      <Services
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="icon" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="icon" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="icon" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="home2" />
        </Image>
      </Services>
    </Hide>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 1;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.7rem;
    }
  }
  p {
    font-size: 18px;
  }
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ServicesSection;
