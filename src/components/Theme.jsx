import React, { useEffect } from "react";
import { useToggleTheme } from "../Context";
import { useCookies } from "react-cookie";
import { useTheme } from "@mui/material/styles";

export default function Theme() {
  const toggleTheme = useToggleTheme();
  const [cookie, setCookie] = useCookies(["theme"]);
  const theme = useTheme().palette.mode;
  useEffect(() => {
    if (cookie.theme && cookie.theme !== theme) {
      handleToggle();
    }
  }, []);

  const handleToggle = () => {
    toggleTheme();
    //console.log(window.location.pathname);
    setCookie("theme", theme === "light" ? "dark" : "light", {
      path: window.location.pathname,
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      maxAge: 365 * 24 * 60 * 60 * 1000,
    });
  };
  return (
    <div>
      <button onClick={handleToggle}>toggleTheme</button>
    </div>
  );
}
