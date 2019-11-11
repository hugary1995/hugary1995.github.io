import React, { Component } from "react";
import { Footer } from "react-materialize";

function Contact(props) {
  return (
    <>
      <div className="col s4 right-align">{props.name}:</div>
      <div className="col s8">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="white-text"
        >
          {props.content}
        </a>
      </div>
    </>
  );
}

class AppFooter extends Component {
  render() {
    return (
      <Footer
        copyrights="&copy; Tianchen (Gary) Hu All Rights Reserved"
        className="blue darken-4"
        style={{ minHeight: "1em", marginTop: "2em" }}
      >
        <div className="row">
          <div className="col s4">
            <h5 className="white-text right-align">Contact&nbsp;me</h5>
          </div>
        </div>
        <div className="row">
          <Contact
            name="Office"
            content="Gross Hall 3rd floor D19, 140 Science Dr, Durham, NC 27710"
            link="https://bigdata.duke.edu/"
          />
          <Contact
            name="Email"
            content="hu_gary@hotmail.com"
            link="mailto:hu_gary@hotmail.com"
          />
          <Contact
            name="LinkedIn"
            content="linkedin.com/in/hugary1995"
            link="https://www.linkedin.com/in/hugary1995/"
          />
          <Contact
            name="ResearchGate"
            content="Tianchen Hu"
            link="https://www.researchgate.net/profile/Tianchen_Hu2"
          />
          <Contact name="Wechat" content="hugary1999" />
        </div>
      </Footer>
    );
  }
}

export default AppFooter;
