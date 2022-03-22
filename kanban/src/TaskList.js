import React from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'
import PropTypes from 'prop-types'

export default function TaskList ({tasks}) {
  return (
    <div className={styles.TaskList__Task}>
    {tasks.map(task => <Task
                            key={task.no}
                            name={task.name}
                            done={task.done}/>)}
    </div>
  )
}


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.propType))

}