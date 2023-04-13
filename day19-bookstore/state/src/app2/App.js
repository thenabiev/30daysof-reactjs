import React, { createContext, useState } from 'react';
import './App.css'
import Home from './Home';
export const context=createContext();


const App = () => {
    const [counter, setCounter]=useState(0);
    const info={counter, setCounter}

  return (
    <context.Provider value={info}>
      <Home />
    </context.Provider>
  )
}

export default App
