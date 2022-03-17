import React from 'react';

// const Header = function({
//     return ( <div>
//             <h1>"hello world"</h1>
//         </div>)
// });

const App = function() {
 
    //const App = React.createElement('h1', null, 'Hello World');  //dom api 브라우저의 돔 
    //여기는 리액트의 돔에 h1을 만든다.
    // createElement는 react에 있는 함수이다.
   // return App;
   const message = "Hello World";
   return (
        <div> 
            <h1>{message}</h1>;  
        </div>
    );  //처음에는 이부분이 error 발생했지만 babel을 설치 해주고 난뒤에는 괜찮아 졌다.

    
    //return의 코드를 밑의 코드 처럼 바꿔야 한다. transfileing이라 한다.
    // React.createElement('div',React.createElement('h1', null, 'Hello World'), null);
}

export{App}

// export {
//     {'App': App}
// }
