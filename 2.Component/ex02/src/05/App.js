import React from 'react';
import styles from'./assets/scss/App.scss';

//5번 예제는 scss이다.
// 설정은 webpack.config에서 test use 부분에 다 설정이 되어있다.

const App = () => {
  return (
    <div className={styles.App}>
        <h1 className ={styles.Header}>{`SACC & SCSS(css-loader options: {module: true})`}</h1>
    </div>
  )
}

export default App