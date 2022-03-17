import React, { Component } from 'react'
import FoodList from './FoodList';

export default class App extends Component {
  //app가 시작하자마자 foodlist에서 데이터를 가지고 왔다고 가정한다.
  constructor(){
    super(arguments); //여기서 부모 호출
    //food 데이터를 만든다. 그리고 배열로 3개 전도 만든다.
    this.foods = [{  //여기는 클래스이다.  데이터를 서버에서 가지고 왔다고 가정한다.
      no: 1,
      name: 'Bread',
      quantity: 40      
    }, {
      no: 2,
      name: 'Egg',
      quantity: 80      
    }, {
      no: 3,
      name: 'Milk',
      quantity: 50      
    }];
}

//foodlist한테 위의 데이터를 전달한다.
//어트리뷰트로 전달한다. foods/ 데이터가 바로 들어가는게 아니고
  render() {
    return (
      <div id="App">
        <FoodList foods={this.foods}/>  
      </div>
    );
  }
}
//default는 하나가 있어야하므로 밑에 건 지운다.

// export default App;
