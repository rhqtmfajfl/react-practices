import React from 'react'

const TitleBar02 = () => {
  //const로 onClickHandler로 return의 ex03 클릭시
  //f12의 console 창에서 TitleBar02 가 선택되게 한다.
  const onClickHandler= e => {
    console.log('TitleBar02 Clicked!');
  }

  //return에서 onClickHandler에 의해 console 창에서 카운터
  return (
          <h1
            style={{cursor: 'pointer'}}
            onClick={onClickHandler}>
            ex03: Functional Event Handler(Functional Component)
          </h1>
  )
}


export default TitleBar02;