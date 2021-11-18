# Objective
In this assignment, we will start using the foundation we lay in A1 and make our timers fully functional. Each timer will function as described in A1 and the user flow should be the following:

- User opens the application
- Select a type of timer (Stopwatch, Countdown, XY, TABATA)

- Configure timer based on type (time, rounds, work/rest, etc)

- Run timer. While running, user should be able to:
  - Pause/Resume
  - When paused, user can reset back to initial state
  - Ability to "fast forward" (ends the timer)

- When timer is complete, you can decide how to congratulate the user and allow them to start over or select a different timer

## Deliverable

- Convert all classes components that you have added to functional components. You are welcome to convert all components (including ones added by us), but this is not required.
- Get all timers functional
- Application state should be managed with context. That is, timers should NOT track time, rounds, etc, locally or pass it down to its children
- Make sure that you can switch between timers without breaking the app (e.g. I should not have to refresh in order to run another timer after a run has been completed)
- Update documentation as your components change. 
- Your application must be deployed and the link pasted somewhere in this README

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Grading Rubric 
- All components you have added are functional components
- All timers are functioning properly 
- Timers can be run one after another and it should not break the application
- Application state is managed with context
- DRY (do not repeat yourself). we should not see the same code copy pasted all over the codebase. 
- Console is free of warnings/errors

## Bonus
For people looking for an additional challenge, we have provided some bonus features that you can implement. These are not required! You can still get a 100% on the assignment without them.
- Before the timer starts, have a 10-second countdown to give user time to prepare (3pt)
- User settings
  - custom number of seconds before the timer starts (1pt)
  - configurable audio notifications (3-2-1-GO, halfway, 1 minute left, last round, beep every minute, etc) (1pt)
- Persisting state so refreshing the page does not clear application state. (2pt) 

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A1 into this repo. I recommend not copying over `node_modules` and instead re-install here. You can then commit and deploy as usual from this repo.

_**//============ Added by Scarvel Harris=================================**_

**_Please Note: The stopwatch applications are running in a docker environment on one of my test servers.
Source code have been checked in to the homework site._**
Open [http://74.208.183.29:3000](http://74.208.183.29:3000)


_**Stop Watch Buttons**_

Done - is used for the function fast-forward
Start - is used to start the Application. Once the application is started the text on
the button changes to 'Resume'.
Stop - stop the stopwatch. This button is the PAUSE Button

Reset - The reset button reset the stopwatch to it original state or values.

**_Each stopwatch component consist of 3 main parts._**

1. _Display_ - show the hour minutes and seconds
2. _Body_ - each component have it own body (StopWatchBody...)
3. _Stop Watch Button_ - consist of 4 button(Done,Start/Resume, Stop/pause and Reset

**Done**: Fast forward feature Congratulating user for finishing workout

**Start**: Start time button when you click on 'Stop' button the 'Start' changes to 'Resume'

**Stop**: This button is used to pause the stop watch

**Reset**: This button reset the timer back to it original values.

**_The javascript file "TimerDisplay.js" handles the display for the different timers._**

If you look at the javascript file  you will see three functional component
1) _StopWatchTimerDisplay_ - Handles the display for the regular stop watch.
2) _StopWatchTimerDisplayCountDown_ - Handles the display for CountDown and XY stop watches.
3) _StopWatchTimerDisplayTabataCountDown_ - Handles the display for the Tabata stop watch

**_I could have combined them together into one file for the display(TimerDisplay.js) but it was
become to complicated, so I decided to separate and decouple them._**

When all workouts are completed, the user is congratulated with "Congratulation workout Completed!" flashing
at the top where the stop watch timer display section
