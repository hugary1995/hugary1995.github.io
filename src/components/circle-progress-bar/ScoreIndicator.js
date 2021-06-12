import React, {Component} from "react";
import {number} from "prop-types";
import CircleProgressBar from "./CircleProgressBar";

class ScoreIndicator extends Component {
  render() {
    return (
      <CircleProgressBar
        viewBox="0 0 10 10"
        circleX={5}
        circleY={5}
        circleR={4}
        textSize="0.2em"
        percentage={this.props.score}
        speed={30}
        strokeColor="blueviolet"
        width="50px"
      />
    );
  }
}

ScoreIndicator.propTypes = {
  score: number.isRequired
};

export default ScoreIndicator;
