import React, {useState} from "react";

const themes = {
    customStylingStopWatch: {backgroundColor: "#add8e6", alignItems: "center"},

    customStylingCountDown: {backgroundColor: "#ffffe0", alignItems: "center"},
    customStylingXY: {backgroundColor: "#20b2aa", alignItems: "center"},
    customStylingTabata: {backgroundColor: "#FF7F7F", alignItems: "center", justifyItems: "center"},
    roundedButtons: {fontSize: "20px", borderRadius: "20%"}

}
const initialState = {

    themestopwatch: themes.customStylingStopWatch,
    themecountdown: themes.customStylingCountDown,
    themexy: themes.customStylingXY,
    themetabata: themes. customStylingTabata,
     roundedbuttons:themes.roundedButtons,
}

const ThemeContext = React.createContext(initialState);


function ThemeProvider({children}) {
    const [themestopwatch,setThemeStopWatch] =  useState(themes.customStylingStopWatch);
    const [themecountdown,setThemeCountDown] =  useState(themes.customStylingCountDown);
    const [themexy,setThemeXY] =  useState(themes.customStylingXY);
    const [themetabata,setThemeTabata] =  useState(themes.customStylingTabata);
    const [roundedbuttons,setRoundedButtons] =  useState(themes.roundedButtons);

    return (
        <ThemeContext.Provider value={{themestopwatch,themecountdown,themexy,themetabata,setThemeStopWatch,setThemeCountDown,setThemeXY,setThemeTabata,roundedbuttons,setRoundedButtons}}>
            {children}
        </ThemeContext.Provider>
    )

}

export {ThemeProvider, ThemeContext}
