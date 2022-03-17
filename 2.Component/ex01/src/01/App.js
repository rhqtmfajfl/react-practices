import React, { Component } from 'react'
import FoodList from './FoodList';

export default class App extends Component {
  //오버라이드 해줘야 할 함수를 render()로 한다.
  //처음에는 div App안에 li bread 등이 있었다.


  render() {
    return (
      <div id="App">
        <FoodList />
      </div>
    );
  }
}
//default는 하나가 있어야하므로 밑에 건 지운다.

// export default App;
