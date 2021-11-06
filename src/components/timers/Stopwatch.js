import React from "react";
import { StopWatchTimerDisplay } from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import { Container, getIntervalTimer } from "../../utils/helpers";

// align text in a grid
const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",
  borderRadius: "20%"

};

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.incrementer = null;
  }


  callbackFunction = (childData) => {

    this.setState({ buttonPressed: childData });
    console.log(childData.toString());
    switch (childData.toString()) {
      case "startButton":
        this.stopWatchtimer = getIntervalTimer(this.countUp);
        break;
      case "stopButton":
        clearInterval(this.stopWatchtimer);
        break;
      case "resetButton":
        this.setState({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        ;
        clearInterval(this.stopWatchtimer);
        break;
      default:
        break;
    }

  };
  countUp = () => {
    this.setState({ seconds: this.state.seconds + 1 });
    const { hours, minutes, seconds } = this.state;
    if (seconds === 59) {
      this.setState({ minutes: this.state.minutes + 1 });
      this.setState({ seconds: 0 });

    }
    if (minutes === 59) {
      this.setState({ hours: this.state.minutes + 1 });
      this.setState({ minutes: 0 });
    }
    //when the clock have reach "00:00:00" clear the interval timer
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(this.stopWatchtimer);
    }

  };


  render() {
    const { hours, minutes, seconds } = this.state;

    return (

      <Container style={this.props.style}>

        <StopWatchTimerDisplay style={ButtonPosition} hrs={hours} mins={minutes} secs={seconds} />
        <div style={ButtonPosition}>

          <StopWatchButtons parentCallback={this.callbackFunction} style={ButtonPosition} />
        </div>
      </Container>
    );
  }
}

export default Stopwatch;
