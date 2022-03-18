import React, {useState} from 'react';

//함수형
export default function ({ begin, step }) {
    
    //step과 bgin 호출은 react가 한다.
    // 함수를 변경할 수 있는것을 내가 등록
    //내가 상태에 접근해서 읽을 때는 val이라고 읽고 변경하고 싶을때는 setVal을 사용 호출 될때 함수는 react가 만든다.

    //첫번째 배열이 읽을 때 사용 내가 지정가능
    // setVal은 배열 분해

    //const {a} = {a:10, b:20} 이라는 객체가 있으면
    //객체를 특정한 값으로 나타낸다.
    //const [b ,c] = [1,2,3,4]  b에는 1이 들어가고 c에는 2가 들어간다. 



    //이걸 분해하지 않으면 const r  이라고 주고 sapn 에서 r[0]이라고 준다.
    //변경할 때는 r[1](val+step 이렇게 준다.)

    //그래서 첫번째를 val 두번째를 setVal 로 주면 밑에 return 부분과 같이 사용가능하다.
    const [Val, setVal] = useState(begin);  

    console.log("!!!!");

    return (
        <div>
            <button onClick={e => setVal(val+step)}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ val }</span>
        </div>
    );

    
}