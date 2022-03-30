import React, {useState} from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css';
import cards from './data.json';

const KanbanBoard = () => {
  // console.log("===여기는 cards===");
  // console.log(cards);
  // console.log("===여기는 cards===");

  // const [datas, setDatas] = useState(cards);

  // const kanbanBoardData = function(keyword){

  // }

  //filter 에제
  //ex 짝수만 골라내고 싶을때
  //const result = [0,1,2,3,4].filter(function(e){
  // return e % 2 ===0;  //여기서 어떤 조건만 리턴  //짝수 필터
  // })
  //console.log(result)  //false일때는 아무것도 안나온다. 

  /*const result = [0,1,2,3,4].filter(e => e %2 ===0)
    const.log([0,1,2,3,4].filter(e => e %2 ===0));
  */
 //여기서 cards에서 datajson의 데이터를 필터로 거른다. ToDo인건 Todo 별로
 //여기의 cards는 datajson의 card이다. 
 // cards에서 데이터가 들어가는 데 각 status마다 데이터가 자동으로 나뉜다.cd kan
 return (
    <div className={styles.KanbanBoard}>
      <CardList title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')}/>
      <CardList title={'Doing'} cards={cards.filter(e => e.status === 'Doing')}/>
      <CardList title={'Done'} cards={cards.filter(e => e.status === 'Done')}/>
    </div>
  )
}

export default KanbanBoard