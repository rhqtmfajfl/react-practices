import React, {Fragment} from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

function content() {


    // document.write("현재시간: " + today);


   
    return (
        <Fragment>
        <p>{'특징3: JSX 표현식 표기법({js expression})과 문제점'}</p>
        <Clock01 />
        <Clock02 />

        </Fragment>
    );
}

export default content
