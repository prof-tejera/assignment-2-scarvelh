import React, {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import {StopContext} from "../../mycontext/MyContexts";
import {secondsToTime} from "../../utils/helpers";

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


export function StopWatchTimerDisplay() {
    // const { hrs, mins, secs } = props;
    const {hours, minutes, seconds, setSeconds} = useContext(StopContext);
    //let hours = 0
    //let minutes = 0;
    //let seconds =0;
    //const {count} = React.useContext(CountProvider)
    // let hours = 0
    // let minutes = 0;
    // let seconds = 0;
    // Calculate Minutes and hours
let convertSeconds = secondsToTime(seconds)

    return (

        <div style={timerFormat}>
      <span className="hours">
        {("0" + convertSeconds.hours).slice(-2)}:
      </span>
            <span className="minutes">
        {("0" + convertSeconds.minutes).slice(-2)}:
      </span>
            <span className="seconds">
        {("0" + convertSeconds.seconds).slice(-2)}
      </span>
        </div>


    );
}




