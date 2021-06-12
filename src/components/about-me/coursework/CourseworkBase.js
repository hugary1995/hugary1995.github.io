import React, {Component} from "react";
import GradeIndicator from "../../circle-progress-bar/GradeIndicator";
import Chip from "@material-ui/core/Chip";

class CourseworkBase extends Component {
  transcript = {};

  render() {
    return (
      <div>
        {Object.keys(this.transcript).map((name, i) => {
          return (
            <Chip
              key={i}
              avatar={
                <GradeIndicator grade={this.transcript[name]} width="32px" />
              }
              label={
                <span>
                  <b>{name}</b>
                </span>
              }
              variant="outlined"
              style={{marginTop: "3px", marginBottom: "3px"}}
            />
          );
        })}
      </div>
    );
  }
}

export default CourseworkBase;
