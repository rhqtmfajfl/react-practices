import React from 'react'

function content() {
//   return (
//     <p>JSX Tutorials - 함수 컴포넌트 만들기</p>
//   )

    return React.createElement('p', null, 'Pure React(React API)로 컴포넌트 작성하기');

}

export default content

// =>는
// function(){} 이거와 같은 것이다.

// const f = function(){};
// const f2 = ;