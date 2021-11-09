import React from "react";
import {StopWatchTimerDisplayCountDown} from "../generic/TimerDisplay";
import {StopWatchButtonsCountDown} from "../generic/StopWatchButtons";
import {Container} from "../../utils/helpers";
import ReactDOM from "react-dom";

import {CountDownProvider} from "../../mycontext/MyContexts";
import StopWatchBodyCountDown from "../generic/StopWatchBodyCountDown";


const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    //float: "left",
    paddingTop: "20px"
};
export const customStyleInput = {
    borderRadius: "15%",
    //fontSize: "15px"
    height: "20px"
};


function App() {
    return (
        <CountDownProvider>
            <Container>
                <StopWatchTimerDisplayCountDown/>
                <StopWatchBodyCountDown/>
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
