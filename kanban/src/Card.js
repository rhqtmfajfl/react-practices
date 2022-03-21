import React, {useState} from 'react'
import styles from './assets/css/Card.css';
import TaskList from './TaskList'

const Card = ({title, description,tasks}) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className={styles.Card}>
    <div 
      className={showDetails ? styles.Card__Title__open : styles.Card__Title}
      onClick={() => { setShowDetails(!showDetails);
      }}>
        {title}</div>
    {
    showDetails ?

    <div className={styles}>
      {description}
    <TaskList tasks={tasks}/>
    </div>
      :
      null
    }

    </div>
  )
}

export default Card