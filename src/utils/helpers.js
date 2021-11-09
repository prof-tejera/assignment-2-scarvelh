// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

// Move to utils after
import styled from "styled-components";

export function convertToSeconds(hours, minutes, seconds) {
  return seconds + minutes * 60 + hours * 60 * 60;
}

// interval timer used for stopwatches
export function getIntervalTimer(myFunction) {

  return setInterval(myFunction, 1000);
}
// build component Container for 'StopWatch' 'CountDown' and 'XY' types of stop watches
export const Container = styled.div`
  width: auto;
  height: auto;
  border-radius: 20%;
  align-items: center;
  padding-bottom: 30px;
  padding-left: 40px;
  /*---------- automation  ------------ */
  animation: shake 1s;
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

`;
// from
export function secondsToTime(secs)
{
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var timerObject = {
    "hours": hours,
    "minutes": minutes,
    "seconds": seconds
  };
  return timerObject;
}
