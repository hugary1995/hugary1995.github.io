import React, { Component } from "react";
import Card from "./Card.js";
import ExternalCard from "./ExternalCard.js";

class Landing extends Component {
  render() {
    return (
      <div className="row" style={{ paddingTop: "50px" }}>
        <div className="col m4 offset-m1 s10 offset-s1">
          <Card
            title="Journal Club"
            description="Manage your jounal list and vote for the ones you are interested in"
            to="/journalclub"
          />
        </div>
        <div className="col m4 offset-m1 s10 offset-s1">
          <ExternalCard
            title="RACCOON"
            description="Massively parallel FEM code being developed at the Dolbow lab"
            to="https://hugary1995.github.io/raccoon/index.html"
          />
        </div>
      </div>
    );
  }
}

export default Landing;
