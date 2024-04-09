import React from "react";
import { useToggleTheme } from "../Context";

export default function Theme() {
  const toggleTheme = useToggleTheme();
  return (
    <div>
      <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  );
}
