SASS 모듈 번들링 하기
설치 항목
순서대로

1. 설치 패키지
$npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. Image Loader 설정(webpack.config.js)
      output: {
        [ 생략]

        path: path.resolve('public'),  여기랑
        filename: 'bundle.js',          여기 생략

        생략][
        assetModuleFilename: 'assets/images/[hash][ext]'
    },

   module: {
        rules:[{  //두가지 항목 설정
            test: /\.(sa|sc|c)ss$/i,      //.css로 끝난다.                      
            use: ['style-loader', 'css-loader', 'sass-loader']
         }, {
            test: /\.(png|git|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'   //지금은 webpack에서 처리하게 해준다.   
            //여기에 src에서
            
        }]  //배열로 설정    앞에는 css와 관련된 rule 뒤에는 image와 관련된 rule     // $ 끝에

    },

3 . 개발 서버 실행 

 $npm start
 

