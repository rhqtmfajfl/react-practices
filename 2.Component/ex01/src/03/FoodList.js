import React from 'react'
import FoodListItem from './FoodListItem';
//여기서 import를 해줘야 한다.

// 반복되는것이 있으면 key 값을 주는게 좋다
// key 값은 우리가 만드는게 아닌데 유일한 값으로 index를 넣어줘도 되고
//
const FoodList = ({foods}) => {
    return (
      <ul>
          {foods.map((food) => <FoodListItem
                                  key={food.no}
                                  name={food.name}
                                  quantity={food.quantity} />)}
      </ul>   
    )
  }
  
  export default FoodList
