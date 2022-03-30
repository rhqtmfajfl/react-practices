import React, {useState} from 'react'
import styles from './assets/css/TaskList.css';

const Task = ({no, name, done, DeleteTask}) => {
const [stateDone, setStateDone] = useState(done)

  return (
    <li className={styles.TaskList__Task}>

      <a href='' className={styles.TaskList__Task__remove}
      onClick={() => DeleteTask(no)}>
        
        <input
          type='checkbox'
          checked={stateDone === 'Y'}
          onClick={e => {
            if(stateDone ==='N'){
              setStateDone('Y');
            }
        
            if(stateDone === 'Y'){
              setStateDone('N');
            }
          }} />
          
          {no}
        {name}

        </a>

    </li>
  );
}

export default Task;