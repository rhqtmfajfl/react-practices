import React, { Component } from 'react'

export default class FoodListItem extends Component {
    //class 에서 props라는 것이 내장되어있다. .name  this.props
    render() {
        return (
            <li>{this.props.name }: {this.props.quantity}</li>
        );
    }
};