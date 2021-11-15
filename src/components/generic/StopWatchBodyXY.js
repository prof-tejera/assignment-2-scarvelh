import {customStyleInput} from "../timers/Countdown";
import {CountDownContext} from "../../mycontext/MyContexts";
import React, {useContext} from "react";
import {myColors} from "../../utils/helpers";
import {ThemeContext} from "../../mycontext/MyThemeContexts";

const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();
let repeatInput = React.createRef();

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
        setOriginalMinutes,
        originalrepeat,
        setOriginalRepeat,

    } = useContext(CountDownContext)
    const {counterdisplay, setCounterDisplay} = React.useContext(ThemeContext);
    // reset the selected values
    if (reset && (seconds <= 0 && minutes <= 0 && hours <= 0)) {
        hoursInput.current.value = 0;
        minutesInput.current.value = 0;
        secondsInput.current.value = 0;
        repeatInput.current.value = 0;
        setReset(reset => false);
        setCounterDisplay(counterdisplay => myColors["eggshell-white"])
        setReset(reset => false);
        setOriginalRepeat(originalrepeat => 0);

        //-----------------------------------Just Added

    }
    if (repeat === 0 && repeat !== null){
        //repeatInput.current.value = 1;

    }
    return (
        <>
            <p>(Hours)</p>
            <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={(e) => {


                //setHours(hours => hours + 1);
                setOriginalHours(originalhour =>hoursInput.current.val);
            }} min="0"
                   style={customStyleInput}/>
            <p>(Minutes)</p>
            <input ref={minutesInput} type="number" placeholder={0} name="minutes" onChange={(e) => {


                //setMinutes(minutes => minutes + 1);
                setOriginalMinutes(originalminutes=> minutesInput.current.value);

            }}
                   min="0" style={customStyleInput}/>
            <p>(Seconds)</p>
            <input ref={secondsInput} type="number" placeholder={0} name="seconds" onChange={(e) => {


                //setSeconds(seconds => seconds + 1);
                setOriginalSeconds(originalseconds=>secondsInput.current.value)

            }}
                   min="0" style={customStyleInput}/>
            <p>Repeat number of Times</p>
            <input ref={repeatInput} type="number" placeholder={0} name="numTimes" onChange={(e) => {


                setOriginalRepeat(originalrepeat => repeatInput.current.value);
            }}
                   min="0" style={customStyleInput}/>

        </>
    )

}
export default StopWatchBodyXY;
