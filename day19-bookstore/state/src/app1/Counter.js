import React from 'react'

const Counter = ({counter, setCounter}) => {
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
