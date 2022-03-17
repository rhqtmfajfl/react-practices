import React, {Fragment} from 'react';

import Clock from './Clock';

function content() {


    // document.write("현재시간: " + today);


   
    return (
        <Fragment>
        <p>{' Dynamic HTML Rendering'}</p>
        <Clock />


        </Fragment>
    );
}

export default content
