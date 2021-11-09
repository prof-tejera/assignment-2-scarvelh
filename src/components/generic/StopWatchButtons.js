import React, {useContext, useState} from "react";
import Button from "./Button";
import styled from "styled-components";
import {StopContext, useInterval} from "../../mycontext/MyContexts";


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




//class StopWatchButtons extends React.Component {
const StopWatchButtons = () => {

    const {seconds,setSeconds,CallBackParent} = useContext(StopContext)

    let [intervalId, setIntervalId] = useState(0);

    return (

        <Container>
            <div style={positionButtons}>

                <Button text={"Start"} onClick={() => {

                    setIntervalId(setInterval(() => {  setSeconds(seconds =>seconds + 1)}, 1000))


                }
                }
                disabled={true}/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);
                    intervalId = null;
                }}/>
                <Button text={"Reset"} onClick={() => {
                    clearInterval(intervalId);
                    setSeconds(seconds =>0);
                    intervalId = null;
                }}/>
            </div>



        </Container>


    );

}

export default StopWatchButtons;
