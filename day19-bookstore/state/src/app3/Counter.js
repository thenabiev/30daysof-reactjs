import React, { useContext } from 'react'
import { context } from './App'

const Counter = () => {

  const globalState=useContext(context)

  const state=globalState.state;
  const dispatch=globalState.dispatch;
  return (
    <>
      <h1>{state}</h1>
      <div className="buttons">
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      </div>
    </>
  )
}

export default Counter
