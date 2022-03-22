import React, {Fragment, useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');  //color 처음에 검은색
//검은 색이 LifeCycle 컴포넌트에 프로퍼티로 전달이 도니다. #는 16진수

    return ( 
        <Fragment>
            <h2>ex05 - Component LifeCycle</h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <br/>
            <LifeCycle color={color}/>
        </Fragment>
    );
}