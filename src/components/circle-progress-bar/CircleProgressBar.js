import styled from "styled-components";
import {string, number} from "prop-types";

import CircleProgressBarBase from "./CircleProgressBarBase";

const CircleProgressBar = styled(CircleProgressBarBase)`
  /* vertical-align: middle; */
  /* float: left; */
  margin-top: 5px;

  .chart-text {
    fill: ${props => props.textColor};
    font-weight: ${props => props.fontWeight};
    transform: translateY(0.2px);
  }

  .chart-number {
    font-size: ${props => props.textSize};
    line-height: 1;
    text-anchor: middle;
    alignment-baseline: middle;
    transform: translateY(0em);
  }
`;

CircleProgressBar.propTypes = {
  textColor: string,
  strokeColor: string,
  fontWeight: number
};

CircleProgressBar.defaultProps = {
  textColor: "brown",
  textSize: "1em",
  fontWeight: 1000
};

export default CircleProgressBar;
