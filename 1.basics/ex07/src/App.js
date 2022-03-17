import logo from './assets/images/logo.svg';  //여기 부분 코드 수정
import './assets/css/App.css';

import React from 'react';



function App() {
  /*
  여기서는 표기법 주석이나 들어갈수 있따.
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
