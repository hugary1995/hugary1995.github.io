import React, { Component } from "react";
import Card from "./Card.js";

class Landing extends Component {
  render() {
    return (
      <div className="row" style={{ paddingTop: "50px" }}>
        <div className="col m4 offset-m1 s10 offset-s1">
          <Card
            title="Todo List"
            description="Create, edit, delete your todo items"
            to="/todo"
          />
        </div>

        <div className="col m4 offset-m1 s10 offset-s1">
          <Card
            title="Journal Club"
            description="Manage your jounal list and vote for your interested ones"
            to="/journalclub"
          />
        </div>
      </div>
    );
  }
}

export default Landing;
