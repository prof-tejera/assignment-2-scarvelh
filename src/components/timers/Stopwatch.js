import {StopWatchTimerDisplay} from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import {CountProvider} from "../../mycontext/MyContexts";
import ReactDOM from "react-dom";
import {ThemeContext, ThemeProvider} from "../../mycontext/MyThemeContexts";
import React from "react";
import {Container} from "../../utils/helpers";
//import ReactDOM from "react-dom";
// align text in a grid
const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    borderRadius: "20%"

};

function App() {

    const {themestopwatch} = React.useContext(ThemeContext)

    return (

        <CountProvider>
            <ThemeProvider>
                <Container style={themestopwatch}>

                    <StopWatchTimerDisplay/>
                    <div style={ButtonPosition}>
                        <StopWatchButtons style={ButtonPosition}/>
                    </div>
                </Container>
            </ThemeProvider>
        </CountProvider>
    );
};

ReactDOM.render(
    <App/>,

    document.getElementById('root')
);


export default App;
