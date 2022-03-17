import React from 'react'
import FoodList from './FoodList';
//여기서 FoodList를 import 하는것을 만든 후 FoodList를 만든다.
// 함수형과 클래스형 다 만들 수 있다.
//

const App = function() {
  //이거는 함수가 돌다가 return을 한다.
  // 컴포넌트라는 객체의 인스턴스변수를 만들 수 없다.
  // 여기는 render 할때마다 호출 되는 것이다.

  // 
    const foods = [{
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
      // 함수형에서는 return에서 this.foods 가 안된다.
  return (
    <div id="App">
        <FoodList foods={foods} />
    </div>
  )
}

export default App