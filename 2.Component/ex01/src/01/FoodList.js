import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component {
    render() {
        // this.props.foods; //기반으로 만들어야 한다.
        // const components = [
        // <FoodListItem name="Egg" quantity="20" />,
        // <FoodListItem name="Milk" quantity="5" />,
        // <FoodListItem name="Bread" quantity="10" />
        // ];
        // //원래는 리턴안에 FoodListItem에 대한 것들이 들어가 있었따. 그리고 return에는 components로 대체
        // this.props.foods

        return (
            <ul>
            <FoodListItem name="Egg" quantity="20" />
            <FoodListItem name="Milk" quantity="5" />
            <FoodListItem name="Bread" quantity="10" />
            </ul>
        );
    }
};