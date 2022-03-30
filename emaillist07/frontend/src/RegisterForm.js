import React, {useRef} from 'react'
import styles from './assets/scss/RegisterForm.scss';

const RegisterForm = ({callback}) => {
  //등록을 하는 폼을 리셋을 시켜주기 위해서 useRef 사용 ref를 사용한다. (리엑트에서는 리셋을 지원안하기 때문)
  //
  
  //useRef사용
  const refForm = useRef(null);  // useRef는 dom에 접근
  
  return (
    <form 
    ref={refForm}  // 랜더링 하면서 이 변수에다가 진짜 Rdom 에 생긴 html 엘레먼트를 여기다가 세팅해준다. refForm은 callback을 부르거나 부른후에 사용
    className={styles.RegisterForm}
    onSubmit={function(e) {
      e.preventDefault();
      //배열로부터 시작해서 걸러내고 걸러내서 데이터가 점점 흘러가면서 스트림 프로그램이라고 한다 자바 스크립트에서 사용 자바에서 사용한다.
      try{
      //좀더 어렵게 코드를 바꾸는 것 
        //이름 값으로 배열을 만든다.
        // [{n:'firstName', v :'홍'}]
        //여기 코드는 어떤 폼에서든지 input의 내용을 어떻게서든 사용가능하다 validation을 간단하게 한다.
        const newEmail = Array.from(e.target, input => {
          //simple validation
          if(input.value === ''){
            throw new Error(`${input.placeholder}이 비어있습니다.'}`)
          }
          return {n: input.name, v: input.value}; 
        })
        .filter(({n}) => n !== '')//들어오는 것은 name이 아니라 n이된다.
        .reduce((res, {n, v}) => {
          //o는 배열
          res[n] = v;   //n은 name이다.  // 이코드가 다시 돌면 두번째 값 lastName 이 돌게 된다. 두번째 배열의 요소 세번째 파라미터는 email이 돈다.
          return res;
        }, {});   //이함수를 매번 실행 시키게 되는 데 res에 1을 넣어주게 되면 1이 계속 반복이 된다. 그리고 {}는 초기값을 넣는다. 
        
        /*
           res = {  //첫번째 o.n의 첫번째 
             'firstName':'홍'
             'lastName':'길동'
           }
        */
          
      // console.log(result)  //result가 밑에 모양처럼 하면서 등록이 안나오게 하려면 위에서 filter를 걸어야 한다.
      // const newEmail = {
      //   firstName: e.target.firstName.value,
      //    lastNmae:e.target.lastName.value,
      //     email: e.target.email.value};

      refForm.current.reset();        //여기까지가 html 엘레먼트에 접근하는것 rdom에 접근 . 찍고 나서 reset()사용
      callback(newEmail);


    }catch(err){
      console.log(err.message);  //나중에 여기를 alert로 
    }
    }}>
      
        <input type={'text'} name={'firstName'} placeholder={"성"} className={styles.InputFirstName} />
        <input type={'text'} name={'lastName'} placeholder={"이름"} className={styles.InputLastName} />
        <input type={'text'} name={'email'} placeholder={"이메일"} className={styles.InputEmail} />
        <input type={'submit'} value={'등록'} />
    </form>
  )
}

export default RegisterForm