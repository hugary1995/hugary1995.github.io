import React, {Component} from "react";
import Education from "./Education";
import ResearchInterests from "./ResearchInterests";
import Publications from "./Publications";
import Conferences from "./Conferences";

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{
            fontSize: "12pt",
            textAlign: "justify"
          }}
        >
          <img
            className="z-depth-1"
            src="headshot.jpg"
            style={{
              width: "40%",
              maxWidth: "200px",
              float: "left",
              marginRight: "15px",
              marginTop: "5px",
              borderRadius: "15px"
            }}
            alt=""
          />
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
        <ResearchInterests />
        <Education />
        <Publications />
        <Conferences />
      </div>
    );
  }
}

export default AboutMe;
