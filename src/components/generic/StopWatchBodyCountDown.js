import React, {useContext} from "react";
import {CountDownContext} from "../../mycontext/MyContexts";
import {customStyleInput} from "../timers/Countdown";
import {ThemeContext} from "../../mycontext/MyThemeContexts";

const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();

const StopWatchBodyCountDown = () => {
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
        originalseconds,
        orginalhours,
        orginalminutes,
        setOriginalMinutes,
        setOriginalSeconds,
        setOriginalHours
    } = useContext(CountDownContext)
    const {counterdisplay, setCounterDisplay} = React.useContext(ThemeContext);
    // reset the selected values
    /*if (reset && (seconds <= 0 && minutes <= 0 && hours <= 0)) {
        hoursInput.current.value = 0;
        minutesInput.current.value = 0;
        secondsInput.current.value = originalseconds;
        setCounterDisplay(counterdisplay => myColors["eggshell-white"])
        //setOriginalSeconds(originalseconds => 0);
        //setOriginalMinutes(originalminutes => 0);
        //setOriginalHours(originalhours => 0);
        setReset(reset => false);
    }*/
    return (


        <>
            <p>(Hours)</p>
            <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={(e) => {

                setOriginalHours(originalhours => hoursInput.current.value)
            }}
                   min="0"
                   style={customStyleInput}/>
            <p>(Minutes)</p>
            <input ref={minutesInput} type="number" placeholder={0} name="minutes" onChange={(e) => {

                setOriginalMinutes(originalminutes => minutesInput.current.value)

            }}
                   min="0" style={customStyleInput}/>

            <p>(Seconds)</p>
            <input ref={secondsInput} type="number" placeholder={0} name="seconds" onChange={(e) => {

                setOriginalSeconds(originalseconds => secondsInput.current.value);

            }}
                   min="0" style={customStyleInput}/>
        </>
    )
}

export default StopWatchBodyCountDown;
