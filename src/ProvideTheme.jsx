import React, { Children, createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../theme";

const getThemeByName = (theme) => {
  return themeMap[theme];
};

const themeMap = {
  lightTheme,
  darkTheme,
};

export const ThemeContext = createContext(getThemeByName("darkTheme"));

export default function ProvideTheme(props) {
  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(props.theme);

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>{Children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
