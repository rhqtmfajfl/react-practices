import React from 'react'
import styles from './assets/css/TaskList.css'
const Task = ({name,done}) => {
  return (
    <div className={styles.TaskList__Task}>
      <input type="checkbox" defaultChecked ={done}></input>
      {name}<a href="" className={styles.TaskList__Task__remove}></a>
      </div>
      
  )
}

export default Task