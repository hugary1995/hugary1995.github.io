import React, { Component } from "react";
import { MediaBox, Collection, CollectionItem } from "react-materialize";

function School(props) {
  return (
    <CollectionItem className="avatar">
      <a href={props.imglink} target="_blank" rel="noopener noreferrer">
        <img src={props.imgsrc} alt="" className="circle" />
      </a>
      <p style={{ marginRight: "5em" }}>
        <b>{props.name}</b>
        <br />
        {props.degree}
        <br />
        {props.secondDegree}
      </p>
      <span className="secondary-content">{props.year}</span>
    </CollectionItem>
  );
}

class AboutMe extends Component {
  education() {
    return (
      <div>
        <blockquote>
          <h4>Education</h4>
        </blockquote>
        <Collection>
          <School
            imgsrc="duke.png"
            imglink="https://www.duke.edu/"
            name="Pratt School of Engineering, Duke University"
            degree="Ph.D in Computation Mechanics, Advisor: John E. Dolbow"
            year="2017-now"
          />
          <School
            imgsrc="wustl.png"
            imglink="https://www.wustl.edu/"
            name="Mckelvey School of Engineering, Washington University in Saint Louis"
            degree="B.S. in Mechanical Engineering, Advisor: Philip V. Bayly"
            secondDegree="Second Major in Computation Science"
            year="2015-2017"
          />
          <School
            imgsrc="cwru.png"
            imglink="https://www.cwru.edu/"
            name="Case Institute of Technology, Case Western Reserve University"
            degree="Mechanical and Aerospace Engineering"
            year="2013-2015"
          />
          <School
            imgsrc="nfls.jpg"
            name="Nanjing Foreign Language School"
            degree="High School Diploma"
            year="2010-2013"
          />
        </Collection>
      </div>
    );
  }

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
              paddingTop: "10px"
            }}
            alt=""
          />
        </MediaBox>
        <p className="flow-text" style={{ textAlign: "justify" }}>
          My name is Tianchen (Gary) Hu, and this is my personal website. This
          website mainly serves as my online curriculum vitae, so you can learn
          most of (the good things about) me here.
        </p>
        <p className="flow-text" style={{ textAlign: "justify" }}>
          I hold degrees in both Mechanical Engineering and Computer Science, so
          my expertise largely resides in the field of computational mechanics,
          including algorithm, data structures, and numerical methods.
        </p>
        <p className="flow-text" style={{ textAlign: "justify" }}>
          Recently, I become interested in the full-stack view of techniques.
          Hence, I am learning basics of front-end, back-end, database, and ways
          to connect these pieces togather. I built this non-static site to test
          my knowledge about the MERN (Mongo-Express-React-Node) stack.
        </p>
        {this.education()}
      </div>
    );
  }
}

export default AboutMe;
