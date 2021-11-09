import React, {useState} from "react";
import Counter from "../utils/Counter";

//const [timerSeconds, setTimerSeconds] = useState(0);
// const state = {
//     count: 0,
//     delay: 1000,
//     isRunning: true
// };


export const CountUp = () => {

    //let {hours, minutes, seconds} = useContext(CountProvider);
    let seconds = Counter
    console.log(seconds.count)
    let minutes = 0;
    let hours = 0;
    if (seconds === 59) {
        this.setState({minutes: this.state.minutes + 1});
        this.setState({seconds: 0});

    }
    if (minutes === 59) {
        this.setState({hours: this.state.minutes + 1});
        this.setState({minutes: 0});
    }
    //when the clock have reach "00:00:00" clear the interval timer
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(this.stopWatchtimer);
    }

};

export const CallBackParent = (childData) => {
    //const [second, setSeconds] = useState(0);


    console.log(childData.toString());
    switch (childData.toString()) {
        case "startButton":
            console.log("");
            // StartTimer();
            //CountUp();
            // let stopWatchtimer = getIntervalTimer(CountUp);
            break;
        case "stopButton":
            // clearInterval(stopWatchtimer);
            break;
        case "resetButton":
            this.setState({
                hours: 0,
                minutes: 0,
                seconds: 0
            });
            ;
            //clearInterval(stopWatchtimer);
            break;
        default:
            break;
    }
    //if (childData === "startTimer") {
    //    StartTimer();
    //}

};

// Create Context
export const StopContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        CallBackParent: () => {
            console.log('Im CallBackParent provider :(');
        },
        setSeconds: () => {
        },
        OnStart: () => {
            console.log('Onstart provider :(');
        },


    }
);


// Create Context Provider
export function CountProvider({children}) {
    //const [{hours, minutes, seconds}] = useState({hours:0,minutes:0,seconds:0});
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
            setSeconds: () => {
            },
            CallBackParent,
            onstart,
            setOnStart: () => {
            }
        }}>{children}</StopContext.Provider>
}

//-------------------------------------------------------------------------------------------------------------------
// Context used for all count down timer
export const CountDownContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        onstate: false,
        repeat: 0,
        reset: false,
        setSeconds: () => {
        },
        setMinute: () => {
        },
        setHours: () => {
        },
        setOnStart: () => {
        },
        setRepeat: () => {
        },
        setReset: () => {
        }
    }
);

// create context CountDown provider
export function CountDownProvider({children}) {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [onstart, setOnStart] = useState(false);
    const [repeat, setRepeat] = useState(0);
    const [reset, setReset] = useState(false);
    //   const [button]

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
            setReset
        }}>{children}</CountDownContext.Provider>
}

// create Context for all CountDown Providers


export default CountProvider;



