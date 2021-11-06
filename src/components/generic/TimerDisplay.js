import React from "react";
import PropTypes from "prop-types";

const timerFormat = {
  margin: "20px",
  display: "flex",
  //height: "12%",
  justifyContent: "center",
  alignItems: "center",
  height: "55px",
  width: "200px",
  backgroundColor: "white",
  fontSize: "45px",
  borderRadius: "20%",
  /* make display float right */
  float: "right",
  border: "1px solid black"
};


export function StopWatchTimerDisplay(props) {
  const { hrs, mins, secs } = props;
  return (
    <div style={timerFormat}>
      <span className="hours">
        {("0" + hrs).slice(-2)}:
      </span>
      <span className="minutes">
        {("0" + mins).slice(-2)}:
      </span>
      <span className="seconds">
        {("0" + secs).slice(-2)}
      </span>
    </div>
  );
}
StopWatchTimerDisplay.propTypes = {

  style: PropTypes.object,
  className: PropTypes.string,
  props: PropTypes.object,
};


