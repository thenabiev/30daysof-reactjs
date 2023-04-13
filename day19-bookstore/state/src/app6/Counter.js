import React, { useContext, useState } from 'react';
import { context } from './statemanager/ContextManager';
import { add, reduce } from './statemanager/ActionCreator';
const Counter = () => {

  const globalState=useContext(context)

  const {state, dispatch}=globalState
  const [value, setValue]=useState('')
  console.log(value)
  return (
    <>
      <input 
      type="text"
      placeholder='Value' 
      onChange={e=>setValue(parseInt(e.target.value))}
       />
      <h1>{state}</h1>
      <div className="buttons">
        <button onClick={()=>dispatch(reduce(value))}>-</button>
        <button onClick={()=>dispatch(add(value))}>+</button>
      </div>
    </>
  )
}

export default Counter
