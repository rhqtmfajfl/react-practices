import React from 'react'
import styles from './assets/css/Card.css';


const Card = ({title, description}) => {
  return (
    <div className={styles.Card__Title}>{title}
    <div className={styles.Card__Details}>{description}</div>
    </div>
  )
}

export default Card