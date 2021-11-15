import React, {useState} from "react";


// Create Context
export const StopContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        setSeconds: () => {
        },
        onstart: 0,
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
// Context used for all count down timer except for Tabata
export const CountDownContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        orginalhours: 0,
        orginalminutes: 0,
        originalseconds: 0,
        onstart: false,
        repeat: 0,
        originalrepeat:0,
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
        setOriginalRepeat:()=>{

        }
    },

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
    const [originalrepeat,setOriginalRepeat] = useState(0);
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
            originalrepeat,
            setOriginalRepeat,
        }}>{children}</CountDownContext.Provider>
}

//------------CONTEXT Tabata---------------------------------------------------------------------------------------------
export const CountDownTabataContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        hoursrest: 0,
        minutesrest: 0,
        secondsrest: 0,
        orginalhours: 0,
        orginalminutes: 0,
        originalseconds: 0,
        // rest  timer
        orginalhoursrest: 0,
        orginalminutesrest: 0,
        originalsecondsrest: 0,
        onstart: false,
        repeat: 1,
        reset: false,
        workoutperiod: "workout",
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
        // rest timer
        setOriginalSecondsRest: () => {
        },
        setOriginalMinutesRest: () => {
        },
        setOriginalHoursRest: () => {
        },
        setWorkOutPeriod: () => {
        },

    }
);

// create context CountDown Tabata provider
export function CountDownTabataProvider({children}) {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [originalseconds, setOriginalSeconds] = useState(0);
    const [originalminutes, setOriginalMinutes] = useState(0);
    const [originalhours, setOriginalHours] = useState(0);
    // rest Timer information
    const [secondsrest, setSecondsRest] = useState(0);
    const [minutesrest, setMinutesRest] = useState(0);
    const [hoursrest, setHoursRest] = useState(0);
    const [originalsecondsrest, setOriginalSecondsRest] = useState(0);
    const [originalminutesrest, setOriginalMinutesRest] = useState(0);
    const [originalhoursrest, setOriginalHoursRest] = useState(0);


    const [onstart, setOnStart] = useState(false);
    const [repeat, setRepeat] = useState(1);
    const [reset, setReset] = useState(false);
    const [workoutperiod, setWorkOutPeriod] = useState("workout");

    return <CountDownTabataContext.Provider
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
            //===== Tabata Rest timer =================
            originalhoursrest,
            setOriginalHoursRest,
            originalminutesrest,
            setOriginalMinutesRest,
            originalsecondsrest,
            setOriginalSecondsRest,
            //========== set work out period =============
            workoutperiod,
            setWorkOutPeriod,
        }}>{children}</CountDownTabataContext.Provider>
}

export default CountProvider;



