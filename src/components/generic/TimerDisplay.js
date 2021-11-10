import React, {useContext} from "react";
import {CountDownContext, StopContext} from "../../mycontext/MyContexts";
import {convertToSeconds, secondsToTime} from "../../utils/helpers";

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

export function StopWatchTimerDisplayCountDown() {

    let {
        hours,
        minutes,
        seconds,
        setSeconds,
        setMinutes,
        setHours,
        setRepeat,
        repeat,
        onstart,
        setOnStart,
        setReset,
        reset,
        originalseconds,
        originalminutes,
        originalhours
    } = useContext(CountDownContext);


    const calcsecs = convertToSeconds(hours, minutes, seconds);
    const convertSeconds = secondsToTime(calcsecs);
//if convertSeconds.seconds < 0)
    //console.log("Timer <>>" + convertSeconds.seconds)
    if ((convertSeconds.seconds < 0 || convertSeconds.minutes < 0 || convertSeconds.hours < 0) /*&& !onstart*/) {
        convertSeconds.seconds = 0;
        convertSeconds.minutes = 0;
        convertSeconds.hours = 0;
         //setReset(reset=>false);
        // setOnStart(onstart => false);
    }
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


