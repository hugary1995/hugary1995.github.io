import React, {Component} from "react";
import {Collection, CollectionItem, Modal} from "react-materialize";
import CourseworkDuke from "./coursework/CourseworkDuke";
import CourseworkWUSTL from "./coursework/CourseworkWUSTL";
import CourseworkCWRU from "./coursework/CourseworkCWRU";

function Transcript(props) {
  return (
    <Modal
      trigger={
        <p
          className="blue-text text-darken-4"
          style={{cursor: "pointer", textAlign: "right"}}
        >
          transcript
        </p>
      }
      header={<h5>{props.name}</h5>}
    >
      {props.coursework}
    </Modal>
  );
}

function School(props) {
  return (
    <CollectionItem className="avatar" style={{minHeight: "1em"}}>
      <a href={props.imglink} target="_blank" rel="noopener noreferrer">
        <img src={props.imgsrc} alt="" className="circle" />
      </a>
      <div style={{marginRight: "5em"}}>
        <b>{props.name}</b>
        <p>{props.degree}</p>
        <p>{props.secondDegree}</p>
      </div>
      <div className="secondary-content" style={{marginTop: "-5px"}}>
        <p>
          <b>{props.year}</b>
        </p>
        {props.transcript}
      </div>
    </CollectionItem>
  );
}

class Education extends Component {
  render() {
    return (
      <div>
        <blockquote
          className="z-depth-1"
          style={{paddingTop: "1px", paddingBottom: "1px"}}
        >
          <h5>Education</h5>
        </blockquote>
        <Collection>
          <School
            imgsrc="duke.png"
            imglink="https://www.duke.edu/"
            name="Pratt School of Engineering, Duke University"
            degree="Ph.D. in Computational Mechanics, Advisor: John E. Dolbow"
            secondDegree="Idaho National Laboratory Graduate Fellowship"
            year="2017 - 2022"
            transcript={
              <Transcript
                name="Transcript - Duke University"
                coursework={<CourseworkDuke />}
              />
            }
          />
          <School
            imgsrc="wustl.png"
            imglink="https://www.wustl.edu/"
            name="Mckelvey School of Engineering, Washington University in Saint Louis"
            degree="B.S. in Mechanical Engineering, Advisor: Philip V. Bayly"
            secondDegree="Second Major in Computer Science, Advisor: Ron K. Cytron"
            year="2015 - 2017"
            transcript={
              <Transcript
                name="Transcript - Washington University in Saint Louis"
                coursework={<CourseworkWUSTL />}
              />
            }
          />
          <School
            imgsrc="cwru.png"
            imglink="https://www.cwru.edu/"
            name="Case Institute of Technology, Case Western Reserve University"
            degree="Mechanical and Aerospace Engineering, Advisor: Alexis R. Abramson"
            year="2013 - 2015"
            transcript={
              <Transcript
                name="Transcript - Case Western Reserve University"
                coursework={<CourseworkCWRU />}
              />
            }
          />
          <School
            imgsrc="nfls.jpg"
            name="Nanjing Foreign Language School"
            degree="High School Diploma"
            year="2010 - 2013"
          />
        </Collection>
      </div>
    );
  }
}

export default Education;
