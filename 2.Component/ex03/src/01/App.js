import React from 'react'

const App = () => {

  // return으로 div와 h1을 주고 h1에 onClick이라고 하고
  // 안에 함수가 들어간다.
  //style은 객체로 들어와야 한다. {{cursor: 'pointer'로 }}
  //클릭하면 함수가 실행된다.
  //처음에는 onClick={function(e) = {console.log('click');}} 이었다.
  // onClick={e=}
  return (
    <div>
        <h1
            onClick={e => console.log('click!')}
            style={{
                cursor: 'pointer'
            }}>
                ex03: InlineHandler</h1>
    </div>
  )
}

export default App;