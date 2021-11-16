import {CountDownContext, CountDownTabataContext} from "../../mycontext/MyContexts";
import React, {useContext} from "react";

function StopWatchRounds() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    let {

        repeat,
        setRepeat,
        originalrepeat,
        setOriginalRepeat,

    } = useContext(CountDownContext)
    //useEffect(() => {
    if (repeat <= 0) {
        repeat = 0;
    }
    if (repeat > originalrepeat) {

        setRepeat(repeat => originalrepeat)
    }
    // });
    return (

        <div>
            <p>Rounds {parseInt(repeat)} of {originalrepeat}</p>

        </div>
    );
}

export function StopWatchRoundsTabata() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    let {

        repeat,
        setRepeat,
        originalrepeat,
        setOriginalRepeat,
        workoutperiod,

    } = useContext(CountDownTabataContext)
    //useEffect(() => {
    if (repeat <= 0) {
        repeat = 0;
    }

    if (repeat > originalrepeat) {

        setRepeat(repeat => originalrepeat)
    }
    // });
    return (

        <div>
            <p>Rounds {parseInt(repeat)} of {originalrepeat}</p>
            <p>{workoutperiod}</p>
        </div>
    );
}

export default StopWatchRounds;
