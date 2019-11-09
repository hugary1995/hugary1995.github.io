import React, { Component } from "react";
import { MediaBox } from "react-materialize";

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <MediaBox>
          <img
            src="headshot.jpg"
            style={{
              width: "40%",
              maxWidth: "300px",
              float: "left",
              paddingRight: "15px",
              paddingTop: "15px"
            }}
            alt=""
          />
        </MediaBox>
        <p className="flow-text">
          This is Tianchen (Gary) Hu&#8217;s website, and this is a bit of copy
          about him. He grew up in Nanjing, China, where he graduated from
          Nanjing Foreign Language School. He received his Bachelor of Science
          in Mechanical Engineering with a second major in Computer Science from
          Washington University in St. Louis. He is now a PhD student at Duke
          University.  Gary&#8217;s research concerns nonlinear computational
          models in solid mechanics. He is currently working on Phase-field
          modeling of crack propagation
        </p>
      </div>
    );
  }
}

export default AboutMe;
