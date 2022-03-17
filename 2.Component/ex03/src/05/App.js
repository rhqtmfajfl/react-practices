import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    
    //함수형에서는 다시 그려질때 불려진다.
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    //div className{App } 이부분이 outter가 된다.
    //div는 어떤 엘리멘트를 세팅해라는 의미이다.
    /// out와 inner가 랜더링이(화면에 출력되는것) 끝난다음에
    //Hooking

    /*
        [1,2,3,4,5,6,7].map(e => <li>{`아이템${e} 입니다.`}</li>)   e 엘리먼트를 받아서 안의 값을 리턴한다.
    */

    //여기서 e 는 안쓰는 element다.
    // const result = Array.from({length:100},function(e,i){
    //     return i+1;
    // });

    // const result = Array.from({length:100}, (_,i) => i+1);
    //이 코드가 안에 들어있는것이다.

    //{} 이안에서는  for문을 쓸수가 없다.
    a = [];
    for(let i =0;i<100;i++){
        a.push(<li>daasf</li>)
    }
    console.log(result);
    return (
        <div
            ref={outterRef}
            className={'App'}
            onScroll={ e => console.log(outterRef.current.clientHeight," : ", outterRef.current.scrollTop," : ", innerRef.current.clientHeight) //  current를 꼭 찍어줘야한다. 왜지? 35분쯤에 나온다.
            }>
            <div
                ref={ innerRef }>
                <ul>
                    { 
                        Array.from({length: 100}, (_, e) => e+1).map(e =>
                            <li key={e}>
                                { `아이템 ${e} 입니다.` }
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
}