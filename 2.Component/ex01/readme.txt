ex01 : Property


01. props(property)
    1) Component 작성법
    2) 부모에서 자식으로 전달 된다.
        - Component Communication(컴포넌트간의 통신), Data Flow
        - Top -> Down

    3) 자식 컴포넌트에서 변경 불가

    4) 부모가 소유한다.

02. FoodList src/01 : 클래스 컴포넌트

03. FoodList src/02 : Data Flow(Top -> Down) : 클래스 컴포넌트

04. FoodList src/03 : Data Flow(Top -> Down) : 함수 컴포넌트

05. FoodList src/04 : Validation

설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
preset.env 자바 스크립트와 관련된것

preset-react 자바스크립트를 바꿔주는것

$ npm i react react-dom 

설정

    af. babel.conig.json 설정
    b. webpack.config.js 설정


스크립트 추가하기
    "scripts": {
        "debug": "npx webpack serve --progress --mode development --env",    
        "build": "npx webpack" 
 },

 4. 실행
     $ npm run debug src={01|02|03|04|....}  
    위에서 ex01 02 들의 src의 파일들이 여기로 들어간다.
