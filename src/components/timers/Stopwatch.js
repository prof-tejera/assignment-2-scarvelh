import {StopWatchTimerDisplay} from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import {Container} from "../../utils/helpers";

import {CountProvider} from "../../mycontext/MyContexts";
import ReactDOM from "react-dom";
//import ReactDOM from "react-dom";
// align text in a grid
const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    borderRadius: "20%"

};
export const H = () => {
};

function App() {

    return (

        <CountProvider>
            <Container>
                <StopWatchTimerDisplay/>
                <StopWatchButtons/>
            </Container>

        </CountProvider>
    );
};

ReactDOM.render(
    <App/>,

    document.getElementById('root')
);


export default App;
