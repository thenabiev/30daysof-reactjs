import React, { createContext, useReducer } from 'react';
import './App.css'
import Home from './Home';
export const context=createContext();


const App = () => {
    
  
  const reducer=(state, action)=>{
    switch(action.type){
      case 'INCREMENT':
        return state+1;
      case 'DECREMENT':
        return state-1;
      default:
        return state
    }
  }
  const [state, dispatch]=useReducer(reducer, 0);
  const info={state, dispatch};


  return (
    <context.Provider value={info}>
      <Home />
    </context.Provider>
  )
}

export default App
