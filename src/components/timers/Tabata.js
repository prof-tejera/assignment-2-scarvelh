import React from "react";
import {StopWatchTimerDisplayCountDown, StopWatchTimerDisplayTabataCountDown} from "../generic/TimerDisplay";
import {StopWatchButtonsCountDown, StopWatchButtonsCountDownTabata} from "../generic/StopWatchButtons";
import ReactDOM from "react-dom";
import {Container} from "../../utils/helpers";
import {CountDownTabataProvider} from "../../mycontext/MyContexts";
import StopWatchBodyTabata from "../generic/StopWatchBodyTabata";


const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "right",
    //border: ".1rem red solid",
    borderRadius: "20%",
    float: "left"

};


function App() {
    return (
        <CountDownTabataProvider>
            <Container>
                <StopWatchTimerDisplayTabataCountDown/>
                <StopWatchBodyTabata/>
                <StopWatchButtonsCountDownTabata/>
            </Container>

        </CountDownTabataProvider>
    );
}

ReactDOM.render(
    <App/>,

    document.getElementById('root')
);


export default App;
