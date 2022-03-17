ex07: ex00.cra Reconfiguration(내가 직접 설정)


설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
preset.env 자바 스크립트와 관련된것

preset-react 자바스크립트를 바꿔주는것

$npm i react react-dom    dom은 라이브러리 꼭 있어야 한다.




2. 설정
    af. babel.conig.json 설정
    b. webpack.config.js 설정


3. npm 스크립팅
    "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack" 
 },


 4. 실행 
    $ npm start
      npm start 시 index.js에서 import React from 'react';가 되어있는지 확인 npm start에서 실행 시 에러는 발생하지 않지만 아무것도 안뜨면 웹페이지에서 f12 키로 확인해보면 된다.

    $ npm run build