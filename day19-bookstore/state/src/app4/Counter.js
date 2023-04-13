import React, { useContext } from 'react';
import { context } from './statemanager/ContextManager';

const Counter = () => {

  const globalState=useContext(context)

  const {state, dispatch}=globalState
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
