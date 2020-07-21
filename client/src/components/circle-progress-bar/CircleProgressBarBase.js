import React, {useState, useEffect} from "react";
import {string, number, bool} from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
// import "./CircleProgressBar.css";

const CircleProgressBarBase = ({
  className,
  viewBox,
  circleX,
  circleY,
  circleR,
  textSize,
  strokeColor,
  strokeWidth,
  legendText,
  percentage,
  trailStrokeWidth,
  trailStrokeColor,
  trailSpaced,
  speed,
  width,
  textOverride
}) => {
  const [percentageCurrent, setPercentageCurrent] = useState(0);
  const [strokeCurrent, setStrokeCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const strokeTotal = 6.28318530718 * circleR;
  const strokeIncrement = strokeTotal / 100;
  const pace = percentage / speed;
  const initialOffset = strokeTotal / 4;
  const updatePercentage = () => {
    setTimeout(() => {
      setStrokeCurrent(strokeCurrent + strokeIncrement);
      setPercentageCurrent(percentageCurrent + 1);
    }, pace);
  };
  const resetPercentage = () => {
    setVisible(false);
    setStrokeCurrent(0);
    setPercentageCurrent(0);
  };
  const innerText = () => {
    if (textOverride.length > 0)
      return (
        <text x="50%" y="50%" className="chart-number">
          {textOverride}
        </text>
      );
    return (
      <text x="50%" y="50%" className="chart-number">
        {percentageCurrent}%
      </text>
    );
  };

  useEffect(() => {
    if (percentageCurrent < percentage && visible) updatePercentage();
    // eslint-disable-next-line
  }, [percentageCurrent, visible]);

  return (
    <div className={className}>
      <VisibilitySensor
        partialVisibility
        minTopValue={circleR}
        onChange={isVisible => {
          setVisible(isVisible);
          if (!isVisible) resetPercentage();
        }}
      >
        <svg viewBox={viewBox} width={width}>
          <circle
            cx={circleX}
            cy={circleY}
            r={circleR}
            fill="transparent"
            stroke={trailStrokeColor}
            strokeWidth={trailStrokeWidth}
            strokeDasharray={trailSpaced ? 1 : 0}
          />

          <circle
            cx={circleX}
            cy={circleY}
            r={circleR}
            fill="transparent"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={`${strokeCurrent} ${strokeTotal - strokeCurrent}`}
            strokeDashoffset={initialOffset}
          />

          <g className="chart-text">{innerText()}</g>
        </svg>
      </VisibilitySensor>
    </div>
  );
};

CircleProgressBarBase.propTypes = {
  className: string.isRequired,
  viewBox: string,
  circleX: number,
  circleY: number,
  circleR: number,
  textSize: string,
  strokeColor: string,
  strokeWidth: number,
  legendText: string,
  percentage: number,
  trailStrokeWidth: number,
  trailStrokeColor: string,
  trailSpaced: bool,
  speed: number,
  width: string,
  textOverride: string
};

CircleProgressBarBase.defaultProps = {
  viewBox: "0 0 38 38",
  circleX: 19,
  circleY: 19,
  circleR: 15,
  testSize: "1em",
  strokeColor: "blueviolet",
  strokeWidth: 1,
  legendText: "",
  percentage: 0,
  trailStrokeWidth: 1,
  trailStrokeColor: "#d2d3d4",
  trailSpaced: false,
  speed: 50,
  width: "100px",
  textOverride: ""
};

export default CircleProgressBarBase;
