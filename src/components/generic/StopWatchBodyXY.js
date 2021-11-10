import {customStyleInput} from "../timers/Countdown";
import {CountDownContext} from "../../mycontext/MyContexts";
import React, {useContext} from "react";

const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();
const repeatInput = React.createRef();

const StopWatchBodyXY = () => {
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
        setOriginalMinutes
    } = useContext(CountDownContext)
    // reset the selected values
    if (reset) {
    //if (reset && repeat !== 0) {
        hoursInput.current.value = 0;
        minutesInput.current.value = 0;
        secondsInput.current.value = 0;
        repeatInput.current.value = 0;
        setReset(reset => false);
        //-----------------------------------Just Added
        //setRepeat(repeat=>repeat-1);
    }
    return (
        <>
            <p>(Hours)</p>
            <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={(e) => {


                setHours(hours => hours + 1);
                setOriginalHours(originalhour =>originalhour +1);
            }} min="0"
                   style={customStyleInput}/>
            <p>(Minutes)</p>
            <input ref={minutesInput} type="number" placeholder={0} name="minutes" onChange={(e) => {


                setMinutes(minutes => minutes + 1);
                setOriginalMinutes(originalminutes=> originalminutes+1);

            }}
                   min="0" style={customStyleInput}/>
            <p>(Seconds)</p>
            <input ref={secondsInput} type="number" placeholder={0} name="seconds" onChange={(e) => {


                setSeconds(seconds => seconds + 1);
                setOriginalSeconds(originalseconds=>originalseconds+1)

            }}
                   min="0" style={customStyleInput}/>
            <p>Repeat number of Times</p>
            <input ref={repeatInput} type="number" placeholder={0} name="numTimes" onChange={(e) => {


                setRepeat(repeat => repeat + 1)

            }}
                   min="0" style={customStyleInput}/>

        </>
    )

}
export default StopWatchBodyXY;
