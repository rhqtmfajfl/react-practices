import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);  //여기안에 상태가 들어가 있다 처음에 color에는 검은색이 들어가 있다.
    const [title, setTitle] = useState('');
    const h3Ref = useRef(null);

    // 처음에 property

    /**
     *   1. Alternative 01: getDerivedStateFromProps
     */
    if(boxColor !== color ) {
        setBoxColor(color);
    }

    /**
     *   2. After Rendering 함수( 상태의 변화 -> 렌더링 -> 함수)
     *   class component lifecycle(componentDidMount, componentDidUpdate)
     *///랜더링 다음에 곡 실행해야 되는 함수다 하면 usr 
     // 특정상태 일때만 불러지게 할 수 있다.
     //userEffect에다가
    useEffect(() => {  //여기함수를 특정상태가 변경된다음에 시행되게 하고싶으면 3에서 boxClolor 넣는ㄷ;
        console.log('After Rendering');
    });

    /**
     *  3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
     *     : 관심 분리
     */
         //3번에서는 타이틀만 바뀔때는 이 부분은 안일어 난다.

    useEffect(() => {  //여기다가 상태 변화에 대해서 
        console.log('Update Color(DB) Using APIs...');
    }, [boxColor]);  //색상 변경을 하면 이부분에서 boxColor가 바뀐다. 그리고 이부분이 호출 된다.

    /**
     *  4. Alternative 02: componentDidMount & componentWillUnmount
     */
    useEffect(() => { //여기 함수는 컴포넌트 Did 함수이다.
        console.log('After Mount(componentDidMount)');  
        return (function(){
            console.log('After Unmount(componentWillUnmount)');
        });
        //unmount를 하고 싶으면 return을넣어준다.
        // mount 된것 만 처리하고 싶으면 return 부분의 함수를 뺘준다.
        // userEffect를 이렇게 써라고 페이스 북에서 만듬
    }, []);  //여기는 배열을 넣어 준다. 여기에 빈결 넣어주게 되면   위에 return을 없애주면 처음에 랜더랑 다음에 불려진다.
    // unMount           
    // 여기는 마운트 된다음에 첫번째 데이터를 가지고 온다음에는 여기에서 가지고 온다. 
    // return을 해주게 되면 unmount될때 사용된다.                                                                                                                                                     

    return (
        <Fragment>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                } }
                ref={ h3Ref } />
            <input
                type='text'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) } />
        </Fragment>
    );
}