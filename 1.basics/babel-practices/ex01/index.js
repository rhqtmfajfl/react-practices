const babel = require('@babel/core');

// const fn = function() {
//     return 1;
// }  //이코드와 밑의 코드는 같은 의미
//=> 리턴하는 부분 화살표함수 문법이다.

const result = babel.transform('const fn = () => 1;', {});  
console.log(result);
