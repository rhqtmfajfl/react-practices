import React from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'

const TaskList = ({tasks}) => {
  return (
    <div className={styles.TaskList__Task}>
    {tasks.map(task => <Task
                            key={task.no}
                            name={task.name}
                            done={task.done}/>)}
    </div>
  )
}

export default TaskList