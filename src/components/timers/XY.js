import React from "react";
import { StopWatchTimerDisplay } from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import { customStyleInput } from "./Countdown";
import { Container } from "../../utils/helpers";


const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",
  alignItems: "center",
  //border: ".1rem red solid",
  borderRadius: "20%",
  //float: "top"
  paddingTop: "20px"
};

class XY extends React.Component {
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
        this.xyTimer = setInterval(this.countDown, 1000);
        break;
      case "stopButton":
        clearInterval(this.xyTime);
        break;
      case "resetButton":
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        clearInterval(this.xyTime);
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
        <StopWatchTimerDisplay hrs={hours} mins={minutes} secs={seconds} />

        <p>(Hours)</p>
        <input ref={this.hoursInput} type="number" placeholder={0} name="hours" onChange={this.inputHandler} min="0"
               style={customStyleInput} />
        <p>(Minutes)</p>
        <input ref={this.minutesInput} type="number" placeholder={0} name="minutes" onChange={this.inputHandler}
               min="0" style={customStyleInput} />
        <p>(Seconds)</p>
        <input ref={this.secondsInput} type="number" placeholder={0} name="seconds" onChange={this.inputHandler}
               min="0" style={customStyleInput} />
        <p>Repeat number of Times</p>
        <input ref={this.secondsInput} type="number" placeholder={0} name="numTimes" onChange={this.inputHandler}
               min="0" style={customStyleInput} />
        <div style={ButtonPosition}>
          <StopWatchButtons parentCallback={this.callbackFunction} style={ButtonPosition} />
        </div>
      </Container>
    );
  }
}

export default XY;
