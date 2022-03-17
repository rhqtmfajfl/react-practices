import React, {Fragment} from 'react';

import Header from './Header';

import Content from './Content';




const App = function() {
  //여기는 jsx 내부가 아니고 자바스크립트이다.
  //그래서 여기는 이렇게 주석을 줘도 되지만 
  // return안의 jsx 부분은 return 부분이 나와버린다.

  //함수에서는 return을 실행 시킨다.
  //react는 return부분의 여기를 만드는 기술이다.
  //<Header/>

  //return에서는 하나의 elemnet만을 사용한다. 두개 사용시 에러 발생 아니면 render.(createElementApp(createElementApp('h1')), null,{})
  // return (
  //     <Fragment>
  //       <Header />
  //       <Content />
  //     </Fragment>
  // );

  return React.createElement(
        Fragment,
        null, 
        React.createElement(Header, null),
        React.createElement(Content, null)
      
    );
}

export default App;
