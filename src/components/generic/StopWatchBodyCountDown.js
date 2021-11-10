import React, {useContext} from "react";
import {CountDownContext} from "../../mycontext/MyContexts";
import {customStyleInput} from "../timers/Countdown";

const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();

const StopWatchBodyCountDown = () => {
    const {seconds, setSeconds, minutes, setMinutes, hours, setHours ,reset,setReset,onstart,setOnStart} = useContext(CountDownContext)
    // reset the selected values
    if(reset ){
        hoursInput.current.value = 0;
        minutesInput.current.value = 0;
        secondsInput.current.value = 0;
        setReset(reset =>false);
    }
    return (
        <>
            <p>(Hours)</p>
            <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={(e) => {
               // console.log(e.target.value);

                setHours(hours => hours + 1)
            }}
                   min="0"
                   style={customStyleInput}/>
            <p>(Minutes)</p>
            <input ref={minutesInput} type="number" placeholder={0} name="minutes" onChange={(e) => {


                setMinutes(minutes => minutes + 1)

            }}
                   min="0" style={customStyleInput}/>

            <p>(Seconds)</p>
            <input ref={secondsInput} type="number" placeholder={0} name="seconds" onChange={(e) => {

                setSeconds(seconds => seconds + 1)

            }}
                   min="0" style={customStyleInput}/>
        </>
    )
}

export default StopWatchBodyCountDown;
