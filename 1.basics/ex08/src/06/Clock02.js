import React from 'react'
//공백 처리시 {' '} 사용한다.
function Clock02() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return (
        <div>
            {('0' + (hours > 12 ? hours -12 : hours)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '}
            {('0'+seconds).slice(-2)}
            {' '}
            {hours  > 12 ? 'PM' : 'AM'}

        </div>

    )
}

export default Clock02