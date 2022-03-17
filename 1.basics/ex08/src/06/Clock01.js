import React from 'react'

const Clock01 = () => {
  const today = new Date();
  //변수에는 let 상수에는 const 사용
  
  let hours = today.getHours();
  let session = 'AM'
  
  const minute = ('0' + today.getMinutes().slice(-2) );
  const second = today.getSeconds();

  if(hours > 12){
    //hours = '0' + hours;
    session ='PM';
  }

  hours = ('0' + hours).slice(-2);

  return (
    <div>{session} {hours}:{minute}:{second}</div>
  )
}

export default Clock01