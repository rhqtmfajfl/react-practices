import React from 'react'
import './assets/css/App.css';

//css를 import 한다.
const App = () => {
  //나중에 헤더이름 같은 것들이 외부 컴포넌트를 많이쓰게 되면 헤더네임이 중첩되게 된다.
  //같은 헤더가 여러개 생긴다. 
  //충돌을 피하려면 개별적으로 모듈로 봐야한다. 충돌을 막으려면
  // import swd from './assets/css/App.css'; 같이 해야한다.
  // 이렇게 하면 충돌나는 것을 막을 수 있다.
  // 이거 보다는 css 모듈을 import 해와서 클래스를 사용한다.
  return (
    <div>
        <h1 className={'Header'}>{`Normal CSS(css-loader options:{module: false})`}</h1>

    </div>
  )
}

export default App