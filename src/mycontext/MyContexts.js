import React, {useState} from "react";


// Create Context
export const StopContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        setSeconds: () => {
        },
        onstart : 0,
        setOnStart: () => {
        },

    }
);


// Create Context Provider
export function CountProvider({children}) {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [onstart, setOnStart] = useState(false);
    //   const [button]

    return <StopContext.Provider
        value={{
            hours,
            minutes,
            seconds,
            setSeconds,
            onstart,
            setOnStart,

        }}>{children}</StopContext.Provider>
}

//-------------------------------------------------------------------------------------------------------------------
// Context used for all count down timer
export const CountDownContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        orginalhours: 0,
        orginalminutes: 0,
        originalseconds: 0,
        onstart: false,
        repeat: 0,
        reset: false,
        setSeconds: () => {
        },
        setMinutes: () => {
        },
        setHours: () => {
        },
        setOnStart: () => {
        },
        setRepeat: () => {
        },
        setReset: () => {
        },
        setOriginalSeconds: () => {
        },
        setOriginalMinutes: () => {
        },
        setOriginalHours: () => {
        },
    }
);

// create context CountDown provider
export function CountDownProvider({children}) {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [originalseconds, setOriginalSeconds] = useState(0);
    const [originalminutes, setOriginalMinutes] = useState(0);
    const [originalhours, setOriginalHours] = useState(0);


    const [onstart, setOnStart] = useState(false);
    const [repeat, setRepeat] = useState(0);
    const [reset, setReset] = useState(false);


    return <CountDownContext.Provider
        value={{
            hours,
            setHours,
            minutes,
            setMinutes,
            seconds,
            setSeconds,
            onstart,
            setOnStart,
            repeat,
            setRepeat,
            reset,
            setReset,
            originalhours,
            setOriginalHours,
            originalminutes,
            setOriginalMinutes,
            originalseconds,
            setOriginalSeconds,
        }}>{children}</CountDownContext.Provider>
}

export default CountProvider;



