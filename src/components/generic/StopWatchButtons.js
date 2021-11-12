import React, {useCallback, useContext, useState} from "react";
import Button from "./Button";
import styled from "styled-components";
import {CountDownContext, CountDownTabataContext, StopContext} from "../../mycontext/MyContexts";
import {convertToSeconds} from "../../utils/helpers";
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


//class StopWatchButtons extends React.Component {
export const StopWatchButtons = () => {

    const {seconds, setSeconds, onstart, setOnStart} = useContext(StopContext)

    let [intervalId, setIntervalId] = useState(0);

    return (

        <Container>
            <div style={positionButtons}>

                <Button text={"Start"} onClick={() => {
                    if (!onstart) {
                        setIntervalId(setInterval(() => {
                            setSeconds(seconds => seconds + 1)
                        }, 1000))
                        setOnStart(onstart => true)
                        //setReset(reset => false);
                    }

                }
                }
                        disabled={true}/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    intervalId = null;
                    setOnStart(onstart => false)
                }}/>
                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    intervalId = null;
                    setOnStart(onstart => false)
                }}/>
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
        originalhours

    } = useContext(CountDownContext);

    let [intervalId, setIntervalId] = useState(0);

    if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= 0) {
        setRepeat(repeat => repeat - 1);
        console.log("repaet" + repeat);
        setSeconds(seconds => originalseconds);
        setMinutes(minutes => originalminutes);
        setHours(hours => originalhours);
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
        //setReset(reset => false);
        // NEED TO SIMULATE A BUTTON CLICK


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


                        }, 1000))
                        setOnStart(onstart => true);
                        setReset(reset => false);
                    }


                }
                }
                        disabled={true}/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    intervalId = null;
                    setOnStart(onstart => false)
                }}/>
                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    setHours(hours => 0);
                    setMinutes(minutes => 0);
                    intervalId = null;
                    setOnStart(onstart => false);
                    setReset(reset => true);

                }}/>
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


        }

        if (originalsecondsrest !== 0 && workoutperiod === "workout")
            //setRepeat(repeat => repeat - 1);
        {
            setSeconds(seconds => originalsecondsrest);
            setMinutes(minutes => originalminutesrest);
            setHours(hours => originalhoursrest);
            setWorkOutPeriod(workoutperiod => "rest")

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

        //=============== reset variables orinal values
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


                        }, 1000))
                        setOnStart(onstart => true);
                        setReset(reset => false);
                    }


                }
                }
                        disabled={true}/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    intervalId = null;
                    setOnStart(onstart => false)
                }}/>
                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds => 0);
                    setHours(hours => 0);
                    setMinutes(minutes => 0);
                    intervalId = null;
                    setOnStart(onstart => false);
                    setReset(reset => true);

                }}/>
            </div>


        </Container>


    );

}


export default StopWatchButtons;
