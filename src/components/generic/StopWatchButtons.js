import React, {useContext, useEffect, useState} from "react";
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

// align text in a grid


export const StopWatchButtons = () => {
    const {roundedbuttons, setCounterDisplay} = React.useContext(ThemeContext)
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

    const [intervalId, setIntervalId] = useState(0);

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
                    // seconds = originalseconds;
                    setFastForward(fastforward => false);
                    if (!onstart) {
                        setIntervalId(setInterval(() => {
                            setSeconds(seconds => seconds + 1)
                        }, 1000))
                        setOnStart(onstart => true)
                        //setReset(reset => false);
                        setCounterDisplay(counterdisplay => myColors["yellow-green"])
                    }


                }
                }
                        style={roundedbuttons}
                        disabled={true}/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    //intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"])
                }} style={roundedbuttons}/>
                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    //intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"])
                }} style={roundedbuttons}/>
            </div>


        </Container>


    );

}
//===============================CountDown and XY Timers=====================================================================================
export const StopWatchButtonsCountDown = () => {

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
    //const {roundedbuttons} = React.useContext(ThemeContext);
    const {roundedbuttons, counterdisplay, setCounterDisplay} = React.useContext(ThemeContext)
    const [intervalId, setIntervalId] = useState(0);

    //if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {

       // console.log("repaet" + repeat);
        setSeconds(seconds => originalseconds);
        setMinutes(minutes => originalminutes);
        setHours(hours => originalhours);
        //setReset(reset => false);
        setOnStart(onstart => true);
        setRepeat(repeat => repeat + 1);
    }


    // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
    if (((hours === 0 && minutes === 0 && seconds === 0) && onstart && intervalId !== null && repeat >= originalrepeat)) {
        clearInterval(intervalId);
        //setSeconds(seconds => originalseconds);
        //setHours(hours => originalhours);
        //setMinutes(minutes => originalminutes);
        // intervalId = null;
        setInterval(intervalId => null);
        setOnStart(onstart => false);
        //setOnStart(onstart => true);
        //setReset(reset => true);
        setSeconds(seconds => 0);
        setOnStart(onstart => true);
        setFastForward(fastforward => true);
        setOnStart(onstart => false)
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
                    setFastForward(fastforward => false);
                    setSeconds(seconds => originalseconds);
                    setHours(hours => originalhours);
                    setMinutes(minutes => originalminutes);
                    setRepeat(repeat => 0);


                    if (!onstart) {

                        console.log(seconds);
                        setIntervalId(setInterval(() => {
                            console.log("interval" + seconds);
                            const calcsecs = convertToSeconds(hours, minutes, seconds);
                            setSeconds(seconds => seconds - 1)
                            //setCounterDisplay(counterdisplay => "green")
                            console.log("Seconds <> " + seconds);

                        }, 1000))
                        setOnStart(onstart => true);
                        setReset(reset => false);
                        setCounterDisplay(counterdisplay => myColors["yellow-green"]);

                    }

                }
                }
                        disabled={true} style={roundedbuttons}/>

                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    //setInterval(intervalId => null);
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"])
                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {
                    setFastForward(fastforward => false);
                    clearInterval(intervalId);
                    setSeconds(seconds => originalseconds);
                    setHours(hours => originalhours);
                    setMinutes(minutes => originalminutes);
                    setInterval(intervalId => null);
                    setOnStart(onstart => false);
                    setReset(reset => true);
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"]);


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

    const [intervalId, setIntervalId] = useState(0);
    const toddleworkout = workoutperiod==="Workout" ? "Resting" : "Workout" ;
    //if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {

        console.log("VVV" + toddleworkout);

        if (toddleworkout === "Resting" ) {
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
    useEffect(() => {
    if (toddleworkout === "Resting"  && onstart ) {

        setCounterDisplay(counterdisplay => myColors["yellow-green"]);
    }
    if (toddleworkout === "Workout"  && onstart ){
        setCounterDisplay(counterdisplay => myColors["resting"])
    }
    }, [counterdisplay,setCounterDisplay,toddleworkout]);
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
                    setFastForward(fastforward => false);
                    setSeconds(seconds => originalseconds);
                    setHours(hours => originalhours);
                    setMinutes(minutes => originalminutes);
                    setRepeat(repeat => 0);

                    if (!onstart) {

                        console.log(seconds);
                        setIntervalId(setInterval(() => {
                            console.log("interval" + seconds);
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
                        disabled={true} style={roundedbuttons}/>

                <Button text={"Stop"} onClick={() => {

                    // initialize the resting values
                    setSecondsRest(secondsrest => originalsecondsrest);
                    setHoursRest(hoursrest => originalhoursrest);
                    setMinutesRest(minutesrest => originalminutesrest)


                    clearInterval(intervalId);
                    setIntervalId(intervalId => null);
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"]);
                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                   setIntervalId(intervalId => null);
                    setOnStart(onstart => false);
                    //setReset(reset => true);
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"])

                }} style={roundedbuttons}/>
            </div>
        </Container>
    );
}
export default StopWatchButtons;
