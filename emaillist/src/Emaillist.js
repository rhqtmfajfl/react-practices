import React from 'react'
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

export default function  Emaillist({emails}){

  //map으로 컴포넌트 배열을   만든다.

  return (
    <ul className={styles.Emaillist}>
     {
       emails.map(e => <Email 
                            key={e.no}
                            firstName={e.firstName}
                            lastName={e.lastName}
                            email={e.email}/>)
     } 
        
    </ul>
  )
}

// export default Emaillist

Emaillist.propTypes= {
  emails: PropThpes.arrayOf(ProtoTypes.shape(Email.propType)) 
   //배열안의 객체 shape으로 정의
}