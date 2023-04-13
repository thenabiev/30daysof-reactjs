import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const context=createContext();


const ContextManager = ({children}) => {


    const [state, dispatch]=useReducer(reducer, 0);
    const info={state, dispatch};

  return (
    <context.Provider value={info}>
      {children}
    </context.Provider>
  )
}

export default ContextManager
