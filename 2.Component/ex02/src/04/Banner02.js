import React from 'react'
import styles from './assets/css/Banner02.css';

//컴포넌트마다 css가 다 따로 있다.
//컴포넌트마다 다른 css를 주려면 styles와 같이 모듈을 적용시켜서 스타일을 다르게 적용시키면 된다.

const Banner02 = () => {
  return (
    <h1 className={styles.Header}>Hello React</h1>
  )
}

export default Banner02