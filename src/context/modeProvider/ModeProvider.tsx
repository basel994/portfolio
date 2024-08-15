import React, { createContext, useState } from "react"

interface ModeContextType {
    mode: string;
    changeMode: (modeValue: string) => void;
  }
  
  export const ModeContext = createContext<ModeContextType>({
    mode: "dark",
    changeMode: () => {}
  });
const ModeProvider = ({children}:{children:React.ReactNode}) => {
    const [mode,setMode] = useState("dark");
    const changeMode = (modeValue:string) => {
        setMode(modeValue);
    }
    return (
        <ModeContext.Provider value={{mode,changeMode}}>
            {children}
        </ModeContext.Provider>
    )
}
export default ModeProvider;