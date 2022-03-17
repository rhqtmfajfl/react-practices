import React from 'react'
//공백 처리시 {' '} 사용한다.

//HTML 에서는 <div /> 는 에러가 발생하지만 여기서는 안생긴다.


//return 안에 객체 생성해주낟.
function Clock() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const html = "<span>" +
                  ('0' + (hours > 12 ? hours -12 : hours)).slice(-2) +
                  " : " +
                  ('0' + minutes).slice(-2) +
                  " : " +
                  ('0' + seconds).slice(-2) +
                  " " +
                  (hours> 12 ? 'PM' : 'AM') +
                "</span>"
    
    //const o = {
    //    __html : html
    //};
    return (
        
        //
        // HTML 태그를 동적으로 생성하여 JSX element의 특정 속성(dangerouslySetInnerHTML)
        // 으로 렌더링 하는 작업은 금지 하고 있지만 , 
        // XSS(Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다. 

    <div dangerouslySetInnerHTML={ {__html : html}} />
            
        
    

    )
}

export default Clock