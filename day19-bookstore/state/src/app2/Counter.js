import React, { useContext } from 'react'
import { context } from './App'

const Counter = () => {

  const {counter, setCounter}=useContext(context)

  return (
    <>
      <h1>{counter}</h1>
      <div className="buttons">
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>setCounter(counter+1)}>+</button>
      </div>
    </>
  )
}

export default Counter
