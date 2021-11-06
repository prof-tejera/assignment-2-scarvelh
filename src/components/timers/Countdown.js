import React from "react";
import { StopWatchTimerDisplay } from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import { Container, getIntervalTimer } from "../../utils/helpers";


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

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      buttonPressed: ""
    };
    this.hoursInput = React.createRef();
    this.minutesInput = React.createRef();
    this.secondsInput = React.createRef();
  }


  inputHandler = (e) => {

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
  callbackFunction = (childData) => {
    this.setState({ buttonPressed: childData });
    console.log(childData.toString());
    switch (childData.toString()) {
      case "startButton":
        this.countDownTimer = getIntervalTimer(this.countDown);
        break;
      case "stopButton":
        clearInterval(this.countDownTimer);
        break;
      case "resetButton":
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        this.hoursInput.current.value = 0;
        this.minutesInput.current.value = 0;
        this.secondsInput.current.value = 0;
        clearInterval(this.countDownTimer);
        break;
      default:
        break;
    }
  };

  countDown = () => {
    const { hours, minutes, seconds } = this.state;
    if (this.state.hours > 0 || this.state.minutes > 0 || this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    }
    if (seconds === 0 && minutes !== 0) {
      this.setState({ seconds: 59 });
      this.setState({ minutes: this.state.minutes - 1 });
    }
    if (minutes === 0 && hours !== 0) {
      if (hours !== 0) {
        this.setState({ hours: this.state.hours - 1 });
      }
      this.setState({ minutes: 59 });
    }
    //when the clock have reach "00:00:00" clear the interval timer
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(this.countDownTimer);
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

        <div style={ButtonPosition}>

          <StopWatchButtons parentCallback={this.callbackFunction} style={ButtonPosition} />
        </div>
      </Container>
    );
  }
}

export default Countdown;
