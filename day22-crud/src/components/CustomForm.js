import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";



const CustomForm = ({addTask}) => {

  const [task, setTask]=useState('');

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    addTask({
        name:task,
        checked:false,
        id:Date.now()
    })
    setTask('')
}

  return (
    <form 
    className='todo'
    onSubmit={handleFormSubmit}
    >
     <div className="wrapper">
        <input 
        id='task'
        className='input'
        type="text" 
        value={task}
        onInput={(e)=>setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder='Enter Task'
        />
        <label 
        htmlFor="task"
        className='label'
        >Enter Task</label>
     </div>
     <button 
     className="btn"
     aria-label='Add Task'
     type='submit'
     >
        <HiPlus />
     </button>
    </form>
  )
}

export default CustomForm