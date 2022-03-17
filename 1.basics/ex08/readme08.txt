ex08: JSX Tuotorials

리엑트는 컴포넌트만 만드는 기술이다.

01. 특징1: HTML과 차이점
02. 특징2: Single Root node
03. 함수 컴포넌트 만들기
04. Pure React(React API)로 컴포넌트 작성하기
05. 클래스 컴포넌트 만들기
06. 특징3: JSX 표현식 표기법({js expression})과 문제점   (어떤 값을 찍어낸다.)
07. 특징4: 공백
08. Dynamic HTML Rendering
09. Comment



js expression 에는 어떤 것이든 다들어간다. 
예를 들어 count +1
f()

if() {

}


설치

$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
preset.env 자바 스크립트와 관련된것

preset-react 자바스크립트를 바꿔주는것

$ npm i react react-dom    dom은 라이브러리 꼭 있어야 한다.

2. 설정
    af. babel.conig.json 설정
    b. webpack.config.js 설정

3. npm 스크립팅
    "scripts": {
        "debug": "npx webpack serve --progress --mode development --env",    //start는 앱에서 예제 만들때 사용
        "build": "npx webpack" 
 },


 4. 실행 
    $ npm run debug src={01|02|03|04|....}  
    위에서 ex01 02 들의 src의 파일들이 여기로 들어간다.

   
   
   // $ npm webpack serve --progress --mode development --env src=02
