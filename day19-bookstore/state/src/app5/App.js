import React, { createContext, useReducer } from 'react';
import './App.css'
import Home from './Home';
import ContextManager from './statemanager/ContextManager';


const App = () => {

  return (
    <ContextManager>
      <Home />
    </ContextManager>
  )
}

export default App
