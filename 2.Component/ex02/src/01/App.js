import React from 'react'

const App = () => {
    //const h1Style 처럼 줘서 return 안에 h1Style이 적용되게
    //하는 것을 Inline Styling 이라고 한다.
  
    const h1Style = {
        width:280,
        height:50,
        padding:5,
        color:'#111',
        backgroundColor: "#eeff99"
        
    };
    //여기에는 html 형식으로 안된다.
  return (
    <div id="App">
        <h1 style={h1Style}>Inline Styling</h1>  

    </div>
  )
}

export default App;