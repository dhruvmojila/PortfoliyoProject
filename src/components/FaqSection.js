import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import useScroll from "./useScroll";
import { scrollReveal } from "../animation";
import { AnimateSharedLayout } from "framer-motion";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              nisi et tempora quam obcaecati non, ut neque dolore repudiandae
              ipsa.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Product Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident magni similique tenetur dolores praesentium. Fuga
              sapiente labore corrupti ipsam voluptas.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              asperiores aspernatur magni, magnam recusandae quis blanditiis
              esse nemo maxime non?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, provident amet vitae eligendi fuga maiores dolores eum
              repellat culpa libero.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
