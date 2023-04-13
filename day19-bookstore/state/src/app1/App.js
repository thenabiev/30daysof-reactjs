import React, { useState } from 'react';
import './App.css'
import Home from './Home';

const App = () => {
    const [counter, setCounter]=useState(0);

  return (
    <div>
      <Home counter={counter} setCounter={setCounter}/>
    </div>
  )
}

export default App
