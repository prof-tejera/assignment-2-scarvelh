import React, {useContext} from "react";
import {CountDownContext, CountDownTabataContext, StopContext} from "../../mycontext/MyContexts";
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
    //backgroundColor: 	"#7CFC00",
    fontSize: "45px",
    borderRadius: "20%",
    /* make display float right */
    float: "right",
    border: "1px solid black"
};
const timerFormat1 = {
    margin: "20px",
    display: "flex",
    //height: "12%",
    justifyContent: "center",
    alignItems: "center",
    height: "55px",
    width: "200px",
    //backgroundColor: "white",
    backgroundColor: "#7CFC00",
    fontSize: "45px",
    borderRadius: "20%",
    /* make display float right */
    float: "right",
    border: "1px solid black"
};
///===================================================StopWatch Timer Display=================================================
export function StopWatchTimerDisplay() {
    // const { hrs, mins, secs } = props;
    const {hours, minutes, seconds, setSeconds} = useContext(StopContext);

    let convertSeconds = secondsToTime(seconds)
    // const condition  =hours === 0 && seconds === 0 && minutes === 0;

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
///===================================================CountDown and XY Timer Display=================================================
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

    if ((convertSeconds.seconds < 0 || convertSeconds.minutes < 0 || convertSeconds.hours < 0) /*&& !onstart*/) {
        convertSeconds.seconds = 0;
        convertSeconds.minutes = 0;
        convertSeconds.hours = 0;

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
///===================================================Tabata Timer Display=================================================
export function StopWatchTimerDisplayTabataCountDown() {

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
        originalhours,
        originalsecondsrest,
        originalminutesrest,
        originalhoursrest,
        workoutperiod,
        setWorkOutPeriod,
    } = useContext(CountDownTabataContext);

    const calcsecs = convertToSeconds(hours, minutes, seconds);
    const convertSeconds = secondsToTime(calcsecs);

    if ((convertSeconds.seconds < 0 || convertSeconds.minutes < 0 || convertSeconds.hours < 0) /*&& !onstart*/) {
        convertSeconds.seconds = 0;
        convertSeconds.minutes = 0;
        convertSeconds.hours = 0;

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

export default StopWatchTimerDisplay;
