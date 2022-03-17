import React from 'react'
import styles from './assets/css/Banner01.css';

const Banner01 = () => {
  //처음에 h1 Hello React를 만든다.
  //그리고 import styles form './assets/css/Banner01';을 만든다.
  // 그다음에 className={styles.Header를 써준다. Header는 style 안에 들어있다.}
  return (
    <h1 className={styles.Header}>Hello React</h1>
  )
}

export default Banner01