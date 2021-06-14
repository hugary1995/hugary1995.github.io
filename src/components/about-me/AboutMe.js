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
            I earned my B.S. degree in Mechanical Engineering from Washington
            University in Saint Louis. I joined the Department of Mechanical
            Engineering and Materials Science at Duke University in 2017 as a
            graduate research assistant. I received my Ph.D. degree in 2021. I
            will be working as a postdoctoral fellow at the Idaho National
            Laborotary.
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
