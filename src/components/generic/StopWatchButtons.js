import React from "react";
import Button from "./Button";
import styled from "styled-components";
import PropTypes from "prop-types";


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

class StopWatchButtons extends React.Component {
  state = {
    // start cornflowerblue
    backgroundColor: "#6488ea",
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    float: "top",
    disabled:false,
  };

  handleStart = () => {
    this.setState({disabled:true});

    this.props.parentCallback("startButton");

    console.log("Button Start have been clicked");
    this.setState({ backgroundColor: "green" });

  };
  handleStop = () => {
    console.log("Button Stop have been clicked");
    this.props.parentCallback("stopButton");
    this.setState({ backgroundColor: "red" });
  };
  handleReset = () => {
    console.log("Button Reset have been clicked");
    this.props.parentCallback("resetButton");
    this.setState({ backgroundColor: "#6488ea" });
  };


  render() {

    return (
      <Container>
        <div style={positionButtons}>
          <Button text={"Start"} onClick={() => {

            this.handleStart();
          } } style={this.props.style} disabled={this.state.disabled}/>
          <Button text="Stop" onClick={() => {
            this.handleStop();
          }} style={this.state} />
          <Button text="Reset" onClick={() => {
            this.handleReset();
          }} style={this.props.style} />
        </div>
      </Container>

    );
  }
}

StopWatchButtons.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  props: PropTypes.object
};
export default StopWatchButtons;
