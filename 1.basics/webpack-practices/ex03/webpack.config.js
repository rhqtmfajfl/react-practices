const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },

    devServer:{
        host:'0.0.0.0',
        port:9090,
        liveReload:true,   //이걸해야 소스가 변경되었을 때 src/index 디펜 .. 안다? 
        hot:false,
        compress: true
            
    }

}