import React, {Component} from "react";
import ExternalCard from "./ExternalCard.js";

class Landing extends Component {
  render() {
    return (
      <div className="row" style={{paddingTop: "50px"}}>
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
