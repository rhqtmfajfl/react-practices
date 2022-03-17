SASS 모듈 번들링 하기
설치 항목
순서대로

1. 설치 패키지
$npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. SASS/SCSS Loader 설정(webpack.config.js)
   module:{
        rules:[{  //두가지 항목 설정
            test : /\.(sa|sc|c)ss$/i,      //.css로 끝난다.                      
            use : ['style-loader','css-loader','sass-loader']
        }]  //배열로 설정

    },


3 . 개발 서버 실행 

 $npm start
 

