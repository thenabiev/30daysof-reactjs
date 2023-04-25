import React, { useState } from "react";

//Custom Hooks
import useLocalStorage from './hooks/useLocalStorage'

//Custom Components
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";

function App() {

const [tasks, setTasks]=useLocalStorage("react-todo.tasks", []);
const [editedTask, setEditedTask]=useState(null);
const [isEditing, setIsEditing]=useState(false);
const [previousFocusEl, setPreviousFocusEl]=useState(null)


const addTask=(task)=>{
  setTasks(prevState => [...prevState, task])  //prevState bir onceki tasks arrayi ; 
}

const deleteTask=(id)=>{
  setTasks(prevState=>prevState.filter(t=>t.id!==id));
}

const toggleTask=(id)=>{
  setTasks(prevState=>prevState.map(t=>(
    t.id===id ? {...t, checked: !t.checked}
    : t
    )))
}

const updateTask=(task)=>{
  setTasks(prevState=>prevState.map(t=>(
    t.id===task.id 
      ? {...t, name: task.name}
      : t
    )))
  
    closeEditMode();

}

const closeEditMode=()=>{
  setIsEditing(false);

  previousFocusEl.focus();
}

const enterEditMode=(task)=>{
  setEditedTask(task);
  setIsEditing(true);

  setPreviousFocusEl(document.activeElement)
}

  return (
    <div className="container">
      <header>
        <h1>Task List</h1>
      </header>

      {
        isEditing &&(
          <EditForm 
          editedTask={editedTask} 
          updateTask={updateTask} 
          closeEditMode={closeEditMode}/>
        )
      }

      <CustomForm addTask={addTask}/>
      <div>
        {
          tasks && (
          <TaskList tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
          />
          )
        }
      </div>
    </div>
  );
}

export default App;
