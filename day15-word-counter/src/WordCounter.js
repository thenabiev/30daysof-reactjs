import React from 'react';
import { useState } from 'react';

const WordCounter = () => {

    const [word, setWord]=useState('');
    const [max, setMax]=useState(30);

    const resetInput=()=>{
        setWord('')
    }

  return (
    <div className='count'>
      <div className="container">
        <h1>Word Counter</h1>
        <div className="input-group">
            <input 
            value={word}
            onChange={(e)=>setWord(e.target.value)}
            maxLength={max}
            type="text" />
            <button onClick={resetInput}>Reset</button>
        </div>
        <small>You can use max {max} characters</small>
        <p>Character count : <b>{word.length}</b></p>
        <p>Character remains : <b>{max - word.length}</b></p>

      </div>
    </div>
  )
}

export default WordCounter
