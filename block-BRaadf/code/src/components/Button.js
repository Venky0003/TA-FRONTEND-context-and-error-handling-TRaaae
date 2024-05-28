import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export default function SwitchButton() {
  const { isDarkMode, changeMode } = useContext(DarkModeContext)
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}