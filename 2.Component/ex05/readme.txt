ex05 : Component - Lifecycle

(예제들)
01: Class Component
  

02. Alternative(대용) : Function Component Lifecycle : useEffect Hook -(Component에서의 라이프 사이클을 알아봐야 한다. class Component보다 사용하기 ㅈㅎ은)

 
 

03. 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
   상태 컴포넌트 중에 input은 제어 컴포넌트라고 한다.

  1. 상태 컴포넌트
    - 상태를 관리하는 컴포넌트
    - 보통 상태 컴포넌트는 컴포넌트 계층에서 상위에 있다.
    - 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑하는 경우가 있다.
  
  2. 순수 컴포넌트
    - 상태관리 없이 속성(props)로 화면만 랜더링하는 컴포넌트
    - 재사용성이 좋다. 테스트하기도 좋다.
  
  3. 애플리케이션의 컴포넌트들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 만드는 것이 좋다.

  4. 어떤 컴포넌트가 상태 컴포넌트인가?
    - 상태를 기반으로 랜더링 하는 컴포넌트 ex)  제어 컴포넌트
    - 많은 하위 컴포넌트를 가지고 있는 공통(하나)의 상위 부모 컴포넌트
    - 컴포넌트 hierachy에서 상위에 있는 상태를 가져야만 하는 컴포넌트
    - 못 찾겠으면, 상태를 관리하는 컴포넌트를 만들고 하위(pure) 컴포넌트를 래핑한다.
    
    ()

  5. 예제
    emiallist


04. Data Flow(Bottom -> Up)
  emaillist


설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types


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



