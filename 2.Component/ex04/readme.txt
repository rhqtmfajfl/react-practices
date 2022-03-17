ex04 : Component - State

(예제들)
01: 기본 개념
  1. state에 대해 정리
    - 컴포넌트의 현재 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트는 this.state 안에 에러 데이터(상태)가질 수 있다. 
    - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 setState 함수를 사용(Class Component)
    - 상태가 업데이트가 되면 컴포넌트의 반응형(Reactive) 반흥형 Rendering이 트리거되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
      -> 데이터에 반응행서 그린다 반응형 랜더링이다.
    - 그래서 주로 상태는 컴포넌트의 동작(Event)과 상호작용을 수행할 수 있는 매커니즘을 제공한다.
    (사용자가 화면을 변할 수 있게 하는 것은 state state -> 리액트 변경)  
    - 클래스 컴포넌트에서는 constructory에서 초기화를 한다.

    - 클래스 컴포넌트에서는 상태 변경을 위해서는 setState 함수를 사용(Class Component)

    - 함수 컴포너트에서는 useState 후크 함수를 사용해서 초기화 한다.
    - 함수 컴포넌트에서 상태 변경을 위해 useState 후크 함수를 사용하고 반환된 배열의 두번째 배열요소를 사용한다.
    
      (리액트는 리액티브는 아니지만 반응형은 가지고 있다.) 
  2. src/01

02. 제어 컴포넌트
  
  src/02  제어 컴포넌트 예제  (input 이나 radio 버튼)
  src/03  비제어 컴포넌트 예제

03. 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
  상태 컴포넌트 중에 input은 제어 컴포넌트라고 한다.

  emiallist


04. Data Flow(Bottom -> Up)
  emaillist


설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom 


설정

config/babel.conig.json 설정
config/webpack.config.js 설정


스크립트 추가하기
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },

 4. 실행
     $ npm run debug src={01|02|03|04|....} 



