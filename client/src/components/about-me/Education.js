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
        <p style={{fontSize: "16px"}}>
          <b>{props.university}</b>
        </p>
        <p>{props.school}</p>
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
          style={{fontSize: "24px", paddingTop: "1px", paddingBottom: "1px"}}
        >
          Education
        </blockquote>
        <Collection>
          <School
            imgsrc="duke.png"
            imglink="https://www.duke.edu/"
            university="Duke University"
            school="Pratt School of Engineering"
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
            university="Washington University in Saint Louis"
            school="Mckelvey School of Engineering"
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
            university="Case Western Reserve University"
            school="Case Institute of Technology"
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
            university="Nanjing Foreign Language School"
            degree="High School Diploma"
            year="2010 - 2013"
          />
        </Collection>
      </div>
    );
  }
}

export default Education;
