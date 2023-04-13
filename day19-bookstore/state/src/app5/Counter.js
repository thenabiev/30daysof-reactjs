import React, { useContext } from 'react';
import { context } from './statemanager/ContextManager';
import { add, reduce } from './statemanager/ActionCreator';
const Counter = () => {

  const globalState=useContext(context)

  const {state, dispatch}=globalState
  return (
    <>
      <h1>{state}</h1>
      <div className="buttons">
        <button onClick={()=>dispatch(reduce())}>-</button>
        <button onClick={()=>dispatch(add())}>+</button>
      </div>
    </>
  )
}

export default Counter
