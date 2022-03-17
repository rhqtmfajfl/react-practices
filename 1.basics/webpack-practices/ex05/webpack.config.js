const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{  //두가지 항목 설정
            test : /\.(sa|sc|c)ss$/i,      //.css로 끝난다.                      
            use : ['style-loader','css-loader','sass-loader']
        }]  //배열로 설정

    },

    devServer:{
        host:'0.0.0.0',
        port:9090,
        liveReload:true,   //이걸해야 소스가 변경되었을 때 src/index 디펜 .. 안다? 
        hot:false,
        compress: true
            
    }

}