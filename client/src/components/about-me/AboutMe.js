import React, { Component } from "react";
import { MediaBox, Collection, CollectionItem } from "react-materialize";

function School(props) {
  return (
    <CollectionItem className="avatar">
      <img src={props.imgsrc} alt="" className="circle" />
      <p>
        {props.name}
        <br />
        {props.degree}
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
            name="Pratt School of Engineering, Duke University"
            degree="Ph.D in Computation Mechanics"
            year="2017-now"
          />
          <School
            imgsrc="wustl.png"
            name="Mckelvey School of Engineering, Washington University in Saint Louis"
            degree="B.S. in Mechanical Engineering"
            year="2015-2017"
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
        <p className="flow-text">
          My name is Tianchen (Gary) Hu, and this is my personal website. This
          website mainly serves as my online curriculum vitae, so you can learn
          most of (the good things about) me here.
        </p>
        <p className="flow-text">
          I hold degrees in both Mechanical Engineering and Computer Science, so
          my expertise largely resides in the field of computational mechanics,
          including algorithm, data structures, and numerical methods.
        </p>
        <p className="flow-text">
          Recently, I become interested in the full-stack side of things. Hence,
          I am learning basics of front-end, back-end, database, and ways to
          connect these pieces togather. I built this non-static site to test my
          knowledge about the MERN (Mongo-Express-React-Node) stack.
        </p>
        {this.education()}
      </div>
    );
  }
}

export default AboutMe;
