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
        
        /*
            component01: 컴포넌트 안이기 때문에 자바스크립트 구문이 가능하다.

        */
        <div    
        /**
         * comment02: 여기서도 다중행 주석이 가능하다. : 비추! 여기서 주석은 비추
         */
            className='clock'
            title='시계'
        > 
        {('0' + (hours > 12 ? hours -12 : hours)).slice(-2)}
        {' : '}

            {/*
                comment03: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다. : 추천 주석을 달때 이렇게
                
            */}

        {('0' + minutes).slice(-2)}
        {' : '}

        {/*
            JSX는 HTML이 아니다!!! <--! --> 주석은 사용할 수 없다.

        */}

        // Comment04: JSX 안에서 이주석을 사용하면 그대로 화면에 나온다.
        {('0'+seconds).slice(-2)}
        {' '}
        {hours  > 12 ? 'PM' : 'AM'}

        </div>

        
    

    )
}

export default Clock