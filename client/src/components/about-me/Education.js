import React, { Component } from "react";
import { Collection, CollectionItem } from "react-materialize";

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

class Education extends Component {
  render() {
    return (
      <div>
        <blockquote>
          <h5>Education</h5>
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
}

export default Education;
