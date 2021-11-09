import React from "react";
import {StopWatchTimerDisplay} from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import styled from "styled-components";
import {customStyleInput} from "./Countdown";

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 20px;
  border-radius: 20%;
  align-items: center;
  padding-left: 50px;
  animation: shake 0.8s;
  @keyframes shake {
    0% {
      transform: translateX(0)
    }
    25% {
      transform: translateX(25px);
    }

    50% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0px);
    }

  };
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  /*---------------------------------*/
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
`;

const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",
  alignItems: "right",
  //border: ".1rem red solid",
  borderRadius: "20%",
  float: "left"

};
const AlignGrid = {

  //display: "flex",
  display: "flex",
  //alignItems: "center",
  flexDirection: "column",

  justifyContent: "center", /* align items vertically, in this case */
  alignItems: "flex-start",
  marginLeft: "10px",
  paddingBottom: "10px"
  //float: "left"
};

class Tabata extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      buttonPressed: ""
    };

  }

  callbackFunction = (childData) => {

    this.setState({ buttonPressed: childData });
    console.log(childData.toString());
    switch (childData.toString()) {
      case "startButton":
        this.tabataTimer = setInterval(this.countDown, 1000);
        break;
      case "stopButton":
        clearInterval(this.tabataTimer);
        break;
      case "resetButton":
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        clearInterval(this.tabataTimer);
        break;
      default:
        break;
    }

  };
  inputHandler = (e) => {
    //this.setState({ [e.target.name]: e.target.value });


    switch (e.target.name) {
      case "hours":
        this.setState({ hours: e.target.value });
        break;
      case "minutes":
        this.setState({ minutes: e.target.value });
        break;
      case "seconds":
        this.setState({ seconds: e.target.value });
        break;
      default:
        break;
    }


  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <Container style={this.props.style}>

        <div style={{ float: "left" }}>
          <StopWatchTimerDisplay hrs={hours} mins={minutes} secs={seconds} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={AlignGrid}>
            <p>Timer 1 (Hours)</p>
            <input ref={this.hoursInput} type="number" placeholder={0} name="hours" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
            <p>Timer 1 (Minutes)</p>
            <input ref={this.minutesInput} type="number" placeholder={0} name="minutes" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
            <p>Timer 1 (Seconds)</p>
            <input ref={this.secondsInput} type="number" placeholder={0} name="seconds" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
          </div>
          <div style={AlignGrid}>
            <p>Timer 2 (Rest Hours)</p>
            <input ref={this.hoursInput} type="number" placeholder={0} name="hours" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
            <p>Timer 2 (Rest Minutes)</p>
            <input ref={this.minutesInput} type="number" placeholder={0} name="minutes" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
            <p>Timer 2 (Rest Seconds)</p>
            <input ref={this.secondsInput} type="number" placeholder={0} name="seconds" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
          </div>

          <div style={AlignGrid}>
            <p>Repeat number of Times</p>
            <input ref={this.secondsInput} type="number" placeholder={0} name="numTimes" onChange={this.inputHandler}
                   min="0" style={customStyleInput} />
          </div>
        </div>
        <div style={ButtonPosition}>
          <StopWatchButtons parentCallback={this.callbackFunction} style={ButtonPosition} />
        </div>
      </Container>
    );
  }
}

export default Tabata;
