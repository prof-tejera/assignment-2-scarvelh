import React, {useContext, useEffect, useRef, useState} from "react";

//const [timerSeconds, setTimerSeconds] = useState(0);

// from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const StartTimer = () => {
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);
    const [seconds,setSeconds] = useContext(StopContext);
    useInterval(() => {
        // Your custom logic here
        setSeconds(seconds + 1);
        //CountUp();
    }, isRunning ? delay : null);


}

export const CountUp = () => {

    let {hours, minutes, seconds} = useContext(CountProvider);



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
            StartTimer();
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

};

// Create Context
export const StopContext = React.createContext({
        hours: 0,
        minutes: 0,
        seconds: 0,
        CallBackParent: () => {
            console.log('Im CallBackParent provider :(');
        },
        setSeconds:() =>{}

    }
);

// Create Context Provider
export function CountProvider({children}) {
    const [hours, minutes, seconds,setSeconds] = useState({hours:0,minutes:0,seconds:0,setSeconds:0});
    return <StopContext.Provider value={{seconds, setSeconds,CallBackParent}}>{children}</StopContext.Provider>
}


export default CountProvider



