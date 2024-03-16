"use client";
import { useState, createContext, useContext } from "react";

type BarStateProviderProps = {
   children: React.ReactNode
}

export type contextType = {
   barState: boolean
   setBar: () => void
}

export const BarStateContext = createContext<contextType>({} as contextType)

export default function BarProvider({ children }:BarStateProviderProps){
   const [barState, setBarState] = useState(true)
   const setBar = () => {
      barState ? setBarState(false) : setBarState(true)
   }
   return <BarStateContext.Provider value={{barState, setBar}}>{children}</BarStateContext.Provider>
}


export const LayoutConsumer = ({children}:BarStateProviderProps) => {
   const {barState} = useContext(BarStateContext)
   return (
      <div className="content w-full transition-all duration-300" style={{paddingLeft: barState ? 229 : 59 }}>
         {children}
       </div>
   )
}