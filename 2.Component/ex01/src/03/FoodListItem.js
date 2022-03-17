import React, { Component } from 'react'

// FoodListItem에서는 name 받아오고 quantity 따로 받아온다.


const FoodListItem = ({name, quantity}) => {
return(
    <li>
        {name }: {quantity}

    </li>
)

}

export default FoodListItem;