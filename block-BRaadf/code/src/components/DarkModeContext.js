import { createContext, useState } from "react";

export let DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);


const changeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  return(
    <DarkModeContext.Provider value={{isDarkMode,changeMode}}>
        {children}
    </DarkModeContext.Provider>
  )

}
