import React from 'react';

const App = function() {
    //const App = document.createElement('h1');
    //App.textContent = 'Hello World';
    const App = React.createElement('h1', null, 'Hello World');  //dom api 브라우저의 돔 
    //여기는 리액트의 돔에 h1을 만든다.
    // createElement는 react에 있는 함수이다.
    return App;
    
}

export{App}

// export {
//     {'App': App}
// }
