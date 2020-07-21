import React, {Component} from "react";
import {string} from "prop-types";
import CircleProgressBar from "./CircleProgressBar";

class GradeIndicator extends Component {
  gradeToPercentage(grade) {
    if (grade === "A+") return 100;
    if (grade === "A") return 100;
    if (grade === "A-") return 93;
    if (grade === "B+") return 90;
    if (grade === "B") return 87;
    if (grade === "B-") return 83;
    if (grade === "C+") return 80;
    if (grade === "C") return 77;
    if (grade === "C-") return 73;
    if (grade === "D+") return 70;
    if (grade === "D") return 60;
    if (grade === "D-") return 63;
    if (grade === "F") return 50;
  }
  render() {
    return (
      <CircleProgressBar
        viewBox="0 0 10 10"
        circleX={5}
        circleY={5}
        circleR={4}
        textSize="0.3em"
        percentage={this.gradeToPercentage(this.props.grade)}
        speed={100}
        strokeColor="brown"
        width={this.props.width}
        textOverride={this.props.grade}
      />
    );
  }
}

GradeIndicator.propTypes = {
  grade: string.isRequired,
  width: string
};

export default GradeIndicator;
