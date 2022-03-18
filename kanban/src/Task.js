import React,{useState} from 'react'
import styles from './assets/css/TaskList.css'

const Task = ({name,done}) => {
  const [stateDone, setStateDone] = useState(done) //여기서 초기값이 true 또는 false로 들어가 있따.
  // console.log("===여기는 useState");
  // console.log(stateDone, setStateDone);
  const onChangeStateDone = function(e){
    // console.log("여기는 onChangeStateDone")
    // console.log(e.target.value);
    // console.log(stateDone);


    if(stateDone ===false){
      setStateDone(true);
    }

    if(stateDone === true){
      setStateDone(false);
    }

  }
  return (
    <div className={styles.TaskList__Task}>
      <input 
        type="checkbox" 
        checked ={stateDone ===true}
        onChange={onChangeStateDone}
        />
      {name}<a href="" className={styles.TaskList__Task__remove}></a>
      </div>
      
  )
}

export default Task