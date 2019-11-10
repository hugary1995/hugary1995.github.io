import React, { Component } from "react";
import { MediaBox } from "react-materialize";
import Education from "./Education";
import ResearchInterests from "./ResearchInterests";

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{
            textAlign: "justify",
            fontSize: "14pt"
          }}
        >
          <MediaBox>
            <img
              src="headshot.jpg"
              style={{
                width: "40%",
                maxWidth: "300px",
                float: "left",
                paddingRight: "15px",
                paddingTop: "10px"
              }}
              alt=""
            />
          </MediaBox>
          <p>
            My name is Tianchen (Gary) Hu, and this is my personal website. This
            website mainly serves as my online curriculum vitae, so you can
            learn most of (the good things about) me here.
          </p>
          <p>
            I hold degrees in both Mechanical Engineering and Computer Science,
            so my expertise largely resides in the intersection of the two
            fields, including algorithm, data structures, and numerical methods.
          </p>
          <p>
            Recently, I become interested in the full-stack view of techniques.
            Hence, I am learning basics of front-end, back-end, database, and
            ways to connect these pieces togather. I built this non-static site
            to test my knowledge about the MERN (Mongo-Express-React-Node)
            stack.
          </p>
        </div>
        <Education />
        <ResearchInterests />
      </div>
    );
  }
}

export default AboutMe;
