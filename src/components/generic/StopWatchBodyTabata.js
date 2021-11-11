import styled from "styled-components";
import {customStyleInput} from "../timers/Countdown";
import React, {useContext} from "react";
import {CountDownTabataContext} from "../../mycontext/MyContexts";

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 20px;
  border-radius: 20%;
  align-items: center;
  padding-left: 50px;
  animation: shake 0.8s;
  @keyframes shake {
    0% {
      transform: translateX(0)
    }
    25% {
      transform: translateX(25px);
    }

    50% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0px);
    }

  };
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  /*---------------------------------*/
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
`;
const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "right",
    //border: ".1rem red solid",
    borderRadius: "20%",
    float: "left"

};
const AlignGrid = {

    //display: "flex",
    display: "flex",
    //alignItems: "center",
    flexDirection: "column",

    justifyContent: "center", /* align items vertically, in this case */
    alignItems: "flex-start",
    marginLeft: "10px",
    paddingBottom: "10px"
    //float: "left"
};
const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();
// Rest counters
const hoursRestInput = React.createRef();
const minutesRestInput = React.createRef();
const secondsRestInput = React.createRef();

const repeatInput = React.createRef();

export const StopWatchBodyTabata = () => {
    const {
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        reset,
        setReset,
        onstart,
        setOnStart,
        repeat,
        setRepeat,
        originalseconds,
        orginalminutes,
        originalhours,
        setOriginalHours,
        setOriginalSeconds,
        setOriginalMinutes,
        setOriginalHoursRest,
        setOriginalSecondsRest,
        setOriginalMinutesRest,
    } = useContext(CountDownTabataContext)
    // reset the selected values
    if (reset) {
        hoursInput.current.value = 0;
        minutesInput.current.value = 0;
        secondsInput.current.value = 0;
        hoursRestInput.current.value = 0;
        minutesRestInput.current.value = 0;
        secondsRestInput.current.value = 0;
        repeatInput.current.value = 0;

        setReset(reset => false);
        //-----------------------------------Just Added

    }
    if (repeat === 0 && repeat !== null) {
        //repeatInput.current.value = 1;

    }
    return (
        <>

            <div style={{display: "flex"}}>
                <div style={AlignGrid}>
                    <p>Timer 1 (Hours)</p>
                    <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={(e) => {


                        setHours(hours => hours + 1);
                        setOriginalHours(originalhour => originalhour + 1);
                    }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 1 (Minutes)</p>
                    <input ref={minutesInput} type="number" placeholder={0} name="minutes"
                           onChange={(e) => {


                               setMinutes(minutes => minutes + 1);
                               setOriginalMinutes(originalminutes => originalminutes + 1);

                           }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 1 (Seconds)</p>
                    <input ref={secondsInput} type="number" placeholder={0} name="seconds"
                           onChange={(e) => {


                               setSeconds(seconds => seconds + 1);
                               setOriginalSeconds(originalseconds => originalseconds + 1)

                           }}
                           min="0" style={customStyleInput}/>
                </div>
                <div style={AlignGrid}>
                    <p>Timer 2 (Rest Hours)</p>
                    <input ref={hoursRestInput} type="number" placeholder={0} name="hours" onChange={(e) => {
                       // setHours(hours => hours + 1);
                        setOriginalHoursRest(originalhoursrest => originalhoursrest + 1);
                    }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 2 (Rest Minutes)</p>
                    <input ref={minutesRestInput} type="number" placeholder={0} name="minutes"
                           onChange={(e) => {


                              // setMinutes(minutes => minutes + 1);
                               setOriginalMinutesRest(originalminutesrest => originalminutesrest + 1);

                           }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 2 (Rest Seconds)</p>
                    <input ref={secondsRestInput} type="number" placeholder={0} name="seconds"
                           onChange={(e) => {


                              // setSeconds(seconds => seconds + 1);
                               setOriginalSecondsRest(originalsecondsrest => originalsecondsrest + 1)

                           }}
                           min="0" style={customStyleInput}/>
                </div>

                <div style={AlignGrid}>
                    <p>Repeat number of Times</p>
                    <input ref={repeatInput} type="number" placeholder={0} name="numTimes"
                           onChange={(e) => {


                               setRepeat(repeat => repeat + 1)

                           }}
                           min="0" style={customStyleInput}/>
                </div>
            </div>

        </>
    )
}
export default StopWatchBodyTabata;
