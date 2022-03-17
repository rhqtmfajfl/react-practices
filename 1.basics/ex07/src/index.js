import React from 'react';   //reat 설치 하고 // css 설치 하도록 한다. //App는 현재 위치 니까 괜찮다.
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
