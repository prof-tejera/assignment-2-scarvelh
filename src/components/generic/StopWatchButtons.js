import React, {useContext} from "react";
import Button from "./Button";
import styled from "styled-components";
import PropTypes from "prop-types";
import {StopContext} from "../../mycontext/MyContexts";


const Container = styled.div`
  //   background-color: lightgrey;
  align-items: center;
  font-size: 20px;
`;
// align text in a grid
const positionButtons = {
    display: "flex",
    justifyContent: "space-between",
    width: "10rem",
    borderRadius: "20%",
    alignItems: "center",
    //padding: "40px",
    //float: "right",
    fontSize: "20px",
    paddingLeft: "5px",
    justifyItems: "center"

};
const State = {
    // start cornflowerblue
    backgroundColor: "#6488ea",
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    float: "top",
    disabled: false,
};

const HandleStart = () => {

    //const {CallBackParent} = useContext(StopContext)



    console.log("Button Start have been clicked");


};
const HandleStop = () => {
    console.log("Button Stop have been clicked");
   // this.props.parentCallback("stopButton");
    //this.setState({backgroundColor: "red"});
};
const HandleReset = () => {
    console.log("Button Reset have been clicked");
    //this.props.parentCallback("resetButton");
    //this.setState({backgroundColor: "#6488ea"});
};

//class StopWatchButtons extends React.Component {
const StopWatchButtons = () => {
    const {CallBackParent} = useContext(StopContext)
    return (

        <Container>
            <div style={positionButtons}>
                <Button text={"Start"} onClick={() => CallBackParent("startButton")}
                />
                <Button text={"Stop"} onClick={() => {
                    HandleStop();
                }}/>
                <Button text={"Reset"} onClick={() => {
                    HandleReset();
                }}/>
            </div>
        </Container>


    );

}

export default StopWatchButtons;
