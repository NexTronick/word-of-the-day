// Context.js
import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const CustomThemeContext = React.createContext();

// You can add more to these and move them to a separate file if you want.
const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      paper: "#000000",
      default: "#000000",
    },
    color: {
      paper: "#f8eca1",
      default: "#f8eca1",
    },
    text: {
      paper: "#f8eca1",
      default: "#f8eca1",
      primary: "#f8eca1",
    },

    // primary: {
    //   main: "#000000",
    // },
    // secondary: {
    //   main: "#f9f9f7",
    // },
    // contrastThreshold: 3,
    // tonalOffset: 0.2,
  },
};
const lightTheme = {
  palette: {
    mode: "light",
    background: {
      paper: "#fcf8e0",
      default: "#fcf8e0",
    },
    color: {
      paper: "#000000",
      default: "#000000",
    },
    text: {
      paper: "#000000",
      default: "#000000",
      primary: "#000000",
    },
    // primary: {
    //   main: "#fcfbf4",
    // },
    // secondary: {
    //   main: "#000000",
    // },
    // contrastThreshold: 3,
    // tonalOffset: 0.2,
  },
};

export function CustomThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false);

  function toggleTheme() {
    if (dark === true) {
      console.log("to Light theme");
      setDark(false);
    } else {
      setDark(true);
    }
  }

  const theme = React.useMemo(() => {
    if (dark === true) {
      console.log(createTheme(darkTheme));
      return createTheme(darkTheme);
    }
    console.log(createTheme(lightTheme));
    return createTheme(lightTheme);
  }, [dark]);

  return (
    <CustomThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export function useToggleTheme() {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error(
      "useCustomThemeContext must be used within an CustomThemeProvider"
    );
  }
  return context;
}
