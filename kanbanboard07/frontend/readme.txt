ex03 : Component - React Event

01: Inline Handler
<div onclick='click();'

02: Function Handler

03: Synthetic Event(이벤트 합성)

04: Event Handler 예제들

05: Event Handler에서 'ref'를 사용하기:  Functional Component

06: Event Handler에서 'ref'를 사용하기 : Class Component



1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions 
$ npm i react react-dom prop-types


설정

config/babel.conig.json 설정
config/webpack.config.js 설정


스크립트 추가하기
  "scripts": {
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "npx webpack --config config/webpack.config.js --mode production",
    "build:backend": "cd ../backend && mvn clean package",
    "dev": "", 
    "dev:frontend": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "dev:backend": "cd ../backend && mvn spring-boot:run"
  },

 4. 실행
     $ npm run dev:frontend



