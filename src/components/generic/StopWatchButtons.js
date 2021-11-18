import React, {useContext, useState} from "react";
import Button from "./Button";
import styled from "styled-components";
import {CountDownContext, CountDownTabataContext, StopContext} from "../../mycontext/MyContexts";
import {convertToSeconds, myColors} from "../../utils/helpers";
import {ThemeContext} from "../../mycontext/MyThemeContexts";


const Container = styled.div`
  //   background-color: lightgrey;
  align-items: center;
  font-size: 20px;
`;
// align text in a grid
const positionButtons = {
    display: "flex",
    justifyContent: "space-between",
    width: "10rem",
    borderRadius: "20%",
    alignItems: "center",
    //padding: "40px",
    //float: "right",
    fontSize: "20px",
    paddingLeft: "5px",
    justifyItems: "center"

};
//==============================Stop Watch Timer========================================================================
/**
 * Handle the stopwatch  ONLY timer functional component
 * @returns {JSX.Element}
 * @constructor
 */
export const StopWatchButtons = () => {
    // get the theme from the theme context
    const {roundedbuttons, setCounterDisplay} = React.useContext(ThemeContext)
    // get the stopwatch provider context
    const {
        seconds,
        setSeconds,
        onstart,
        setOnStart,
        originalseconds,
        minutes,
        hours,
        setHours,
        setMinutes,
        fastforward,
        setFastForward,
    } = useContext(StopContext)
    // set the interval initial values
    const [intervalId, setIntervalId] = useState(0);

    return (

        <Container>
            <div style={positionButtons}>
                <Button text={"Done"} onClick={() => {
                    // The 'Done" button handle the fast forward feature
                    setSeconds(seconds => 0);
                    setOnStart(onstart => true);
                    setFastForward(fastforward => true);
                    clearInterval(intervalId);
                    setIntervalId(intervalId => null);
                    setOnStart(onstart => false)
                }
                }
                        disabled={true} style={roundedbuttons}/>
                <Button text={"Start"} onClick={() => {
                    // seconds = originalseconds;
                    setFastForward(fastforward => false);
                    // start timer if it not already started
                    if (!onstart) {
                        setIntervalId(setInterval(() => {
                            setSeconds(seconds => seconds + 1)
                        }, 1000))
                        setOnStart(onstart => true)
                        //change the color of the display
                        setCounterDisplay(counterdisplay => myColors["yellow-green"])
                    }


                }
                }
                        style={roundedbuttons}
                        disabled={true} id="idStopWatchButton"/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    //intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"])
                    // change the start button to "resume" to continue after a pause
                    let changeText = document.getElementById('idStopWatchButton')
                    changeText.innerHTML = "Resume "


                }} style={roundedbuttons}/>
                <Button text={"Reset"} onClick={() => {
                    // reset everything back to it original values
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    //intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"])
                    let changeText = document.getElementById('idStopWatchButton');
                    changeText.innerHTML = "Start";
                }} style={roundedbuttons}/>
            </div>
        </Container>
    );

}
//===============================CountDown and XY Timers=====================================================================================
/**
 * The Functional Component handles 2 of the stop watches
 * CountDown Timer
 * XY Timer
 */


export const StopWatchButtonsCountDown = () => {
// get vales from CountDown Context
    const {
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        onstart,
        setOnStart,
        reset,
        setReset,
        repeat,
        setRepeat,
        originalseconds,
        originalminutes,
        originalhours,
        setOriginalHours,
        setOriginalMinutes,
        setOriginalSeconds,
        originalrepeat,
        setOriginalRepeat,
        fastforward,
        setFastForward,

    } = useContext(CountDownContext);
    //Get the values from the theme context
    const {roundedbuttons, counterdisplay, setCounterDisplay} = React.useContext(ThemeContext)
    const [intervalId, setIntervalId] = useState(0);
    //--------------Save Previous values ---------------------------
    const [previousseconds, setPreviousSeconds] = useState(0);
    const [previousminutes, setPreviousMintues] = useState(0);
    const [previoushours, setPreviousHours] = useState(0);
    // handle when the stop button have been pressed
    const [paused, setPaused] = useState(false)

    //if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {

        // console.log("repaet" + repeat);
        setSeconds(seconds => originalseconds);
        setMinutes(minutes => originalminutes);
        setHours(hours => originalhours);
        //setReset(reset => false);
        setOnStart(onstart => true);
        // the repeat variable handles the number of rounds
        setRepeat(repeat => repeat + 1);
    }


    // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
    if (((hours === 0 && minutes === 0 && seconds === 0) && onstart && intervalId !== null && repeat >= originalrepeat)) {
        // pause timer for the seconds
        clearInterval(intervalId);

        setInterval(intervalId => null);
        setOnStart(onstart => false);
        setSeconds(seconds => 0);
        setOnStart(onstart => true);
        setFastForward(fastforward => true);
        setOnStart(onstart => false)
    }

    // return vales to render
    return (


        <Container>
            <div style={positionButtons}>
                <Button text={"Done"} onClick={() => {
                    // Fast Forward Feature
                    setSeconds(seconds => 0);
                    setOnStart(onstart => true);
                    setFastForward(fastforward => true);
                    clearInterval(intervalId);
                    setIntervalId(intervalId => null);
                    setOnStart(onstart => false)


                }
                }
                        disabled={true} style={roundedbuttons}/>

                <Button text={"Start"} onClick={() => {
                    setFastForward(fastforward => false);
                    // if the stop watch is pauses get the values of the seconds minutes hours from the previous seconds
                    if (paused) {
                        setSeconds(seconds => previousseconds);
                        setHours(hours => previoushours);
                        setMinutes(minutes => previousminutes);
                        // get the value from the original number of second minutes and seconds
                    } else {
                        setSeconds(seconds => originalseconds);
                        setHours(hours => originalhours);
                        setMinutes(minutes => originalminutes);


                    }
                    setRepeat(repeat => 0);
                    // if the start button is not click start the timer
                    if (!onstart) {

                        // start interval timer
                        setIntervalId(setInterval(() => {
                            setSeconds(seconds => seconds - 1)

                        }, 1000))
                        setOnStart(onstart => true);
                        setReset(reset => false);
                        // change counter display color
                        setCounterDisplay(counterdisplay => myColors["yellow-green"]);

                    }

                }
                }
                        disabled={true} style={roundedbuttons} id="sButton"/>

                <Button text={"Stop"} onClick={() => {
                    // when "stop button is press pause the stopwatch
                    setPaused(paused => true);
                    // save the current hours minutes and seconds
                    setPreviousSeconds(previousseconds => seconds);
                    setPreviousMintues(previousminutes => minutes);
                    setPreviousHours(previoushours => hours);
                    // pause or stop timer
                    clearInterval(intervalId);

                    setOnStart(onstart => false)
                    // change the display color
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"])
                    // change "Start" button to "Resume"
                    let changeText = document.getElementById('sButton')
                    changeText.innerHTML = "Resume "

                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {
                    // Put everything back to it original values
                    setFastForward(fastforward => false);
                    clearInterval(intervalId);
                    // reset to the original values
                    setSeconds(seconds => originalseconds);
                    setHours(hours => originalhours);
                    setMinutes(minutes => originalminutes);
                    setInterval(intervalId => null);
                    setOnStart(onstart => false);
                    setReset(reset => true);
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"]);
                    let changeText = document.getElementById('sButton');
                    changeText.innerHTML = "Start";

                }} style={roundedbuttons}/>
            </div>


        </Container>


    );

}
// ========================================== Tabata Buttons countdown =====================================

export const StopWatchButtonsCountDownTabata = () => {

    const {
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        onstart,
        setOnStart,
        reset,
        setReset,
        repeat,
        setRepeat,
        originalseconds,
        setOriginalSeconds,
        originalminutes,
        setOriginalMinutes,
        originalhours,
        setOriginalHours,
        setWorkOutPeriod,
        workoutperiod,
        originalsecondsrest,
        originalminutesrest,
        originalhoursrest,
        setOriginalHoursRest,
        setOriginalMinutesRest,
        setOriginalSecondsRest,
        originalrepeat,
        setOriginalRepeat,
        setSecondsRest,
        setMinutesRest,
        setHoursRest,
        fastforward,
        setFastForward,
    } = useContext(CountDownTabataContext);
    const {roundedbuttons, counterdisplay, setCounterDisplay} = React.useContext(ThemeContext)
//--------------Save Previous values ---------------------------
    const [previousseconds, setPreviousSeconds] = useState(0);
    const [previousminutes, setPreviousMintues] = useState(0);
    const [previoushours, setPreviousHours] = useState(0);
    const [paused, setPaused] = useState(false)
    const [intervalId, setIntervalId] = useState(0);
    const toddleworkout = workoutperiod === "Workout" ? "Resting" : "Workout";
    //if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {


        if (toddleworkout === "Resting") {
            setSeconds(seconds => parseInt(originalsecondsrest));
            setMinutes(minutes => parseInt(originalminutesrest));
            setHours(hours => parseInt(originalhoursrest));
            setWorkOutPeriod(workoutperiod => "Resting")

            //setCounterDisplay(counterdisplay => myColors["resting"])

        }


        if (toddleworkout === "Workout") {
            setSeconds(seconds => parseInt(originalseconds));
            setMinutes(minutes => parseInt(originalminutes));
            setHours(hours => parseInt(originalhours));
            setWorkOutPeriod(workoutperiod => "Workout")
            setRepeat(repeat => repeat + 1);
            //setCounterDisplay(counterdisplay => myColors["yellow-green"]);

        }

        setReset(reset => false);
        setOnStart(onstart => true);

    }


    //const [, updateState] = useState();
    //const forceUpdate = useCallback(() => updateState({}), []);

    // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= originalrepeat) {
        clearInterval(intervalId);

        setRepeat(repeat => 0);
        setIntervalId(intervalId => null);
        setOnStart(onstart => false);
        //setOnStart(onstart => true);
        setReset(reset => true);
        setFastForward(fastforward => true);


        setWorkOutPeriod(workoutperiod => "");


    }

    if (toddleworkout === "Resting" && onstart) {
        setCounterDisplay(counterdisplay => myColors["yellow-green"]);


    }
    if (toddleworkout === "Workout" && onstart) {
        setCounterDisplay(counterdisplay => myColors["resting"])
    }

    return (


        <Container>
            <div style={positionButtons}>
                <Button text={"Done"} onClick={() => {
                    setSeconds(seconds => 0);
                    setOnStart(onstart => true);
                    setFastForward(fastforward => true);
                    clearInterval(intervalId);
                    setIntervalId(intervalId => null);
                    setOnStart(onstart => false)

                }
                }
                        disabled={true} style={roundedbuttons}/>


                <Button text={"Start"} onClick={() => {
                    if (paused) {
                        setSeconds(seconds => previousseconds);
                        setHours(hours => previoushours);
                        setMinutes(minutes => previousminutes);
                    } else {
                        setSeconds(seconds => originalseconds);
                        setHours(hours => originalhours);
                        setMinutes(minutes => originalminutes);
                    }

                    setRepeat(repeat => 0);

                    if (!onstart) {

                        console.log(seconds);
                        setIntervalId(setInterval(() => {
                            //console.log("interval" + seconds);
                            const calcsecs = convertToSeconds(hours, minutes, seconds);
                            setSeconds(seconds => seconds - 1)
                            //setCounterDisplay(counterdisplay => "green")

                        }, 1000))
                        setOnStart(onstart => true);
                        setReset(reset => false);
                        setCounterDisplay(counterdisplay => myColors["yellow-green"])
                    }
                }
                }
                        disabled={true} style={roundedbuttons} id="idStopWatchTabataButton"/>

                <Button text={"Stop"} onClick={() => {

                    // initialize the resting values

                    setPaused(paused => true);
                    setPreviousSeconds(previousseconds => seconds);
                    setPreviousMintues(previousminutes => minutes);
                    setPreviousHours(previoushours => hours);

                    clearInterval(intervalId);
                    setIntervalId(intervalId => null);
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"]);
                    let changeText = document.getElementById('idStopWatchTabataButton')
                    changeText.innerHTML = "Resume "
                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {

                    // Put everything back to it original values
                    setFastForward(fastforward => false);
                    clearInterval(intervalId);
                    // reset to the original values
                    setSeconds(seconds => originalseconds);
                    setHours(hours => originalhours);
                    setMinutes(minutes => originalminutes);
                    setSecondsRest(secondsrest => originalsecondsrest);
                    setMinutesRest(minutesrest => originalminutesrest);
                    setHoursRest(hoursrest => originalhoursrest);
                    setRepeat(repeat => originalrepeat);
                    setMinutes(minutes => 0);

                    setSeconds(seconds => 0);
                    setHours(hours => 0);

                    setInterval(intervalId => null);
                    setOnStart(onstart => false);
                    setReset(reset => true);
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"]);
                    let changeText = document.getElementById('idStopWatchTabataButton');
                    changeText.innerHTML = "Start";
                    setRepeat(repeat => 0);
                }} style={roundedbuttons}/>
            </div>
        </Container>
    );
}
export default StopWatchButtons;
