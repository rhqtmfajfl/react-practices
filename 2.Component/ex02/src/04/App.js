import React from 'react'
import Banner01 from './Banner01';
import Banner02 from './Banner02';

//만약 Banner01과 Banner02를 모듈로 안하면 두개가 충돌하게 되어서 문제가 발생하게 된다.
// css-modules=false로 하게되면 에러가 발생하게 된다.
//에러가 각 banner01 02 의 className에 의해 발생
// Header가 똑같으면 둘다 똑같이 css가 적용된다.

const App = () => {
  //처음에 Banner01과 Banner02를 만든다.
  return (
    <div>
        <Banner01 />
        <Banner02 />
    </div>
  )
}

export default App