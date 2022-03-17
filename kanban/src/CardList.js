import React from 'react'
import styles from './assets/css/CardList.css';
import Card from './Card';
// import cards from './data.json';

//title과 cards는 함수에 들어갈 파라미터이다.

const CardList = ({title, cards}) => {
  console.log("========");
  console.log(title, cards);
  console.log("여기부터는 뭘까");


  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        {cards.map( card => <Card
                                  key ={card.no}
                                  />)}
     
    </div>
    
  ) 

}

export default CardList 