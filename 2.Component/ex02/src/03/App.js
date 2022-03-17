import React from 'react';
import './assets/css/App.css';

const App = () => {
  //3번 예제 실행 할때는 css-modules를 true로 주던지 안준다.
  //css가 깨진 이ㄴ유는 style 이 해싱이된다 그게 모듈이다.  
  //저거는 그냥 있는 css를 그대로 써준면 안된다 -> 모듈로 받아서 거기에 해당되는 이름으로 써줘야 한다.
  //객체로 받은 다음에 헤더이름을 쓰게 되면은 해싱된 이름으로 사용할 수 있다.
  // 다음예제에서 import css from './assets/css/App.css' 라고 하고 
  // className의 'Header 부분을 css.Header로 해주면 해싱된 값으로 나오게 된다.
  //이번예제는 일부러 에러가 나오는 것이다.

  // 뭐가 문제가 된ㄴ지 보고 모듈이 해싱하는 거구나 클래스이름이랑 아이디를 
  //여러 css에 같은 이름의 클래스나 아이디가 있으면 충돌이 나니까 모듈로 볼려면 
  //컴포넌트마다 제각각 css를 모듈화 시키는것이다. 이컴포넌트에서는 이 css를 쓰고 나눈다.

  return (
    <div>
        <h1 className={'Header'}>{`Normal CSS(css-loader options: {module: true})`}</h1>
    </div>
  )
}

export default App