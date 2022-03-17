import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component {
    render() {  
        // this.props.foods;  //이거는 배열로 들어오는 것이다.
        // 이걸로 return을 어떻게 루프를 돌아서 나타내느냐

        // const components = []; //처음에 배열로 components를 만든다.
        // 안에 FoodListItem name = 과 quantity= 을 만든다.
        
        // this.props.foods.forEach(function(food){  //foreach에다가 food가 하나씩 들어가고
        //     components.push(<FoodListItem name={food.name} quantity={food.quantity} />);  //function에다가 food가 하나씩 들어온다.
                //food에다가 components 배열에 하나씩 푸시한다. 
        // });
        //// 여기 내용들이 푸시가 될내용들
        // // <FoodListItem name="Egg" quantity="20" />
        // // <FoodListItem name="Milk" quantity="5" />
        // // <FoodListItem name="Bread" quantity="10" />
        // const result = [1,2,3,4].map(function(e){ //map이라는 함수는 배열을 하나씩 요소로 받아서 새로운 배열을 만든다.
        //     return e*e;  //결과
        //// e*e가 리턴해야 되는 것은 push함수 안에 들어있는 것이다.
        // })

        //여기서는 return의 components 변수를 따로 만들지 않았다.
        // const components = this.props.foods.map(function(food){
        //     return <FoodListItem name={food.name} quantity={food.quantity} />;

        // });
        //// 그리고 return도 생략할 수 있다.
        ////구문
        // result ===[1,4,9,16];

//1. this.props.foods.map(function(food){
//    return <FoodListItem name={food.name} quantity={food.quantity} />;
//})

//2.
// this.props.foods.map((food) =>{
//    return <FoodListItem name={food.name} quantity={food.quantity} />;
//})

//3.
//this.props.foods.map( (food) =>
//    <FoodListItem name={food.name} quantity={food.quantity} />;
//)

        return(
            <ul>
                {
                    this.props.foods.map( (food) =><FoodListItem 
                                                    key={food.no}
                                                    name={food.name} 
                                                    quantity={food.quantity} />) 
                }

            </ul>
        );
    }
};