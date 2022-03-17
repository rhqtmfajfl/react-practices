import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {

    //use로 시작하는 것을 다 hook 함수라고 한다.
    //useRef() 함수안에 파라미터는 초기값을 주는데 여기서는 null로 세팅
    //리액트가 useRef를 만나게되면은 리액트가 엘리먼트 랜더링하기전에 실행된다.
    const imgRef = useRef(null);

    // const imageRef = useRef(null);
    const onKeyPressInput = e => {
        if(e.key == 'Enter') {
            console.log(e.target.value);
        }
    }

    const onFocusInput = e => console.log('focused');
    const onBlurInput = e => console.log('blur');
    // mouseover는 마우스 나갈때 들어올때
    const onMouseOverImage = e => console.log('mouseover', `x=${e.clientX} , y=${e.clientY}`);

    //마우스가 들어갈때 나올대 좌표
    const onMouseOutImage = e => console.log('mouseover', `x=${e.clientX} , y=${e.clientY}`);

    //마우스가 이미지 안에서 움직일때 위치 좌표
    const onMouseMoveImage = e => {
        //여기서 offsetTop부분 dom api를 사용한다.
        //여기서는 jquery가 주가 아니라 잠깐 dom에 접근 하는 것이다.
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;   

        console.log('mouseover', `x=${e.clientX - offsetLeft} , y=${e.clientY - offsetTop}`);
    
    }

    const onMouseDownImage = e => console.log('mouseover', `x=${e.clientX} , y=${e.clientY}`);
    const onMouseUpImage = e => console.log('mouseover', `x=${e.clientX} , y=${e.clientY}`);
    const onClickImage = e => console.log('mouseover', `x=${e.clientX} , y=${e.clientY}`);
    const onDoubleClickImage = e => console.log('mouseover', `x=${e.clientX} , y=${e.clientY}`);



    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={onFocusInput}
                onBlur={onBlurInput}/>
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                
                onMouseOver={ onMouseOverImage}
                onMouseOut={ onMouseOutImage}
                onMouseMove={ onMouseMoveImage} 
                onMouseDown={onMouseDownImage}
                onMouseUp={onMouseUpImage}
                onClick={onClickImage}
                onDoubleClick={onDoubleClickImage}/>
        </Fragment>
    );
}