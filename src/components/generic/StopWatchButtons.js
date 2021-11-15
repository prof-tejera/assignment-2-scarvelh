import React, {useCallback, useContext, useState} from "react";
import Button from "./Button";
import styled from "styled-components";
import {CountDownContext, CountDownTabataContext, StopContext} from "../../mycontext/MyContexts";
import {convertToSeconds, myColors} from "../../utils/helpers";
import {ThemeContext} from "../../mycontext/MyThemeContexts";
//import {Container, convertToSeconds} from "../../utils/helpers";


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
const State = {
    // start cornflowerblue
    backgroundColor: "#6488ea",
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    float: "top",
    disabled: false,
};
// align text in a grid


//class StopWatchButtons extends React.Component {
export const StopWatchButtons = () => {
    const {roundedbuttons, counterdisplay, setCounterDisplay} = React.useContext(ThemeContext)
    let {seconds, setSeconds, onstart, setOnStart, originalseconds} = useContext(StopContext)

    let [intervalId, setIntervalId] = useState(0);

    return (

        <Container>
            <div style={positionButtons}>

                <Button text={"Start"} onClick={() => {
                    // seconds = originalseconds;
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
                    intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"])
                }} style={roundedbuttons}/>
                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"])
                }} style={roundedbuttons}/>
            </div>


        </Container>


    );

}
export const StopWatchButtonsCountDown = () => {

    let {
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

    } = useContext(CountDownContext);
    //const {roundedbuttons} = React.useContext(ThemeContext);
    const {roundedbuttons, counterdisplay, setCounterDisplay} = React.useContext(ThemeContext)
    let [intervalId, setIntervalId] = useState(0);

    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
        setRepeat(repeat => repeat - 1);
        console.log("repaet" + repeat);
        setSeconds(seconds => originalseconds);
        setMinutes(minutes => originalminutes);
        setHours(hours => originalhours);
        setReset(reset => false);
        setOnStart(onstart => true);
        //setOriginalSeconds(originalseconds => 0);
        //setOriginalMinutes(originalminutes => 0);
        //setOriginalHours(originalhours => 0)
        //setOriginalRepeat(originalrepeat => 0);
    }

    //const [, updateState] = useState();
    //const forceUpdate = useCallback(() => updateState({}), []);

    // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
    if (((hours === 0 && minutes === 0 && seconds === 0) && onstart && intervalId !== null && repeat <= 0)) {
        clearInterval(intervalId);
        setSeconds(seconds => 0);
        setHours(hours => 0);
        setMinutes(minutes => 0);
        intervalId = null;
        setOnStart(onstart => false);
        //setOnStart(onstart => true);
        setReset(reset => true);
        //setReset(reset => false);
        // NEED TO SIMULATE A BUTTON CLICK
        setOriginalSeconds(originalseconds => 0);
        setOriginalMinutes(originalminutes => 0);
        setOriginalHours(originalhours => 0);
        setOriginalRepeat(originalrepeat => 0);

    }


    return (


        <Container>
            <div style={positionButtons}>

                <Button text={"Start"} onClick={() => {
                    setSeconds(seconds => originalseconds);
                    setHours(hours => originalhours);
                    setMinutes(minutes => originalminutes);
                    setRepeat(repeat => originalrepeat);


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
                    intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"])
                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    setHours(hours => 0);
                    setMinutes(minutes => 0);
                    intervalId = null;
                    setOnStart(onstart => false);
                    setReset(reset => true);
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"]);
                    setOriginalSeconds(originalseconds => 0);
                    setOriginalMinutes(originalminutes => 0);
                    setOriginalHours(originalhours => 0);
                    setOriginalRepeat(originalrepeat => 0);
                    setRepeat(repeat => 0);

                }} style={roundedbuttons}/>
            </div>


        </Container>


    );

}
// ========================================== Tabata Buttons countdown =====================================

export const StopWatchButtonsCountDownTabata = () => {

    let {
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
    } = useContext(CountDownTabataContext);
    const {roundedbuttons, counterdisplay, setCounterDisplay} = React.useContext(ThemeContext)
    let [intervalId, setIntervalId] = useState(0);

    //if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
        if (workoutperiod !== "workout" && repeat >= 0) {
            setRepeat(repeat => repeat - 1);
            //  console.log("repaet" + repeat);
            setSeconds(seconds => originalseconds);
            setMinutes(minutes => originalminutes);
            setHours(hours => originalhours);
            setWorkOutPeriod(workoutperiod => "workout")
            //setTimeout(() => {  console.log("World!"); }, 1000);
            setCounterDisplay(counterdisplay => myColors["yellow-green"]);

        }

        if (originalsecondsrest !== 0 && workoutperiod === "workout")
            //setRepeat(repeat => repeat - 1);
        {
            setSeconds(seconds => originalsecondsrest);
            setMinutes(minutes => originalminutesrest);
            setHours(hours => originalhoursrest);
            setWorkOutPeriod(workoutperiod => "rest")
            setCounterDisplay(counterdisplay => myColors["resting"])

        }
        setReset(reset => false);
        setOnStart(onstart => true);

    }


    //const [, updateState] = useState();
    //const forceUpdate = useCallback(() => updateState({}), []);

    // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
    if (((hours === 0 && minutes === 0 && seconds === 0) && onstart && intervalId !== null && repeat <= 0)) {
        clearInterval(intervalId);
        setSeconds(seconds => 0);
        setHours(hours => 0);
        setMinutes(minutes => 0);
        intervalId = null;
        setOnStart(onstart => false);
        //setOnStart(onstart => true);
        setReset(reset => true);

        //=============== reset variables original values
        setOriginalSecondsRest(originalsecondsrest => 0);
        setOriginalMinutesRest(originalminutesrest => 0);
        setOriginalHoursRest(originalhoursrest => 0);
        setOriginalSeconds(originalseconds => 0);
        setOriginalMinutes(originalminutes => 0);
        setOriginalHours(originalhours => 0);

        setWorkOutPeriod(workoutperiod => "workout");
        setRepeat(repeat => 0);

    }


    return (


        <Container>
            <div style={positionButtons}>

                <Button text={"Start"} onClick={() => {
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
                    clearInterval(intervalId);
                    intervalId = null;
                    setOnStart(onstart => false)
                    setCounterDisplay(counterdisplay => myColors["orange-yellow"]);
                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    setHours(hours => 0);
                    setMinutes(minutes => 0);
                    intervalId = null;
                    setOnStart(onstart => false);
                    setReset(reset => true);
                    setCounterDisplay(counterdisplay => myColors["eggshell-white"])
                }} style={roundedbuttons}/>
            </div>
        </Container>
    );
}
export default StopWatchButtons;
