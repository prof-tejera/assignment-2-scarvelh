import React from "react";
import {StopWatchTimerDisplay, StopWatchTimerDisplayCountDown} from "../generic/TimerDisplay";
import StopWatchButtons, {StopWatchButtonsCountDown} from "../generic/StopWatchButtons";
import {Container} from "../../utils/helpers";
import StopWatchBodyXY from "../generic/StopWatchBodyXY";
import ReactDOM from "react-dom";
import {CountDownProvider} from "../../mycontext/MyContexts";
import StopWatchBodyCountDown from "../generic/StopWatchBodyCountDown";


const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    //float: "top"
    paddingTop: "20px"
};


function App() {
    return (
        <CountDownProvider>

                <Container>
                    <StopWatchTimerDisplayCountDown/>
                    <StopWatchBodyXY/>
                    <StopWatchButtonsCountDown/>
                </Container>

        </CountDownProvider>
    );
}

ReactDOM.render(
    <App/>,

    document.getElementById('root')
);


export default App;
