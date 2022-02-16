import React from "react";
import home1 from "../img/home1.jpg";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any software or application or website development that
          you want to create and deploy publicly.
        </p>
        <button>Contact US</button>
      </div>
      <div className="image">
        <img src={home1} alt="home1" />
      </div>
    </div>
  );
}

export default AboutSection;
