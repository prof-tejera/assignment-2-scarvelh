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

//--------------------New --------------------------
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart /*&& intervalId !== null*/ && repeat !== 0) {
        setRepeat(repeat => repeat - 1);
        console.log("repaet" + repeat);
        seconds = originalseconds;
        minutes = originalminutes;
        hours = originalhours;
        setSeconds(seconds => originalseconds);
        setMinutes(minutes => originalminutes);
        setHours(hours => originalhours);
        setReset(reset => false);
        setOnStart(onstart => false);
        //clearInterval(intervalId);
        //intervalId = null;

    }


// -----------------------end new ----------------------------------
    const calcsecs = convertToSeconds(hours, minutes, seconds);


    const convertSeconds = secondsToTime(calcsecs);

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


