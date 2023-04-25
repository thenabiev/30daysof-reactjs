import React, { useState } from 'react';
import styles from './TaskItem.module.css';

// Library imports
import { HiOutlineCheck , HiOutlinePencil, HiOutlineTrash} from 'react-icons/hi';


const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {

  const [isChecked, setIsChecked]=useState(task.checked);

  const handleCheckboxChange=(e)=>{
    setIsChecked(!isChecked);
    toggleTask(task.id)
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input type="checkbox"
               className={styles.checkbox}
               checked={isChecked}
               onChange={handleCheckboxChange}
               name={task.name}
               id={task.id}
        />
        <label 
        htmlFor={task.id}
        className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <HiOutlineCheck strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button 
        className="btn"
        aria-label={`Update ${task.name} Task`}
        onClick={()=> enterEditMode(task)}
        >
          <HiOutlinePencil width={24} height={24}/>
        </button>
        <button 
        className={`btn ${styles.delete}`}
        aria-label={`Delete ${task.name} Task`}
        onClick={()=>deleteTask(task.id)}
        >
          <HiOutlineTrash width={24} height={24}/>
        </button>
      </div>
    </li>
  )
}

export default TaskItem
