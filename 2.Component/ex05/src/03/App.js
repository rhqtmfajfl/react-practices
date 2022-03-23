import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);


        const date = new Date();  //new date로 시간을 뽑아 내야 한다.
        console.log(date);

        const hours = date.getHours();  //시간에서 두자리로 나오게 한다.
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const session = hours > 12 ? 'pm' : 'am';


    }
    //시계를 꺼야 할 때 unmount 됐을 때
    // 시계를 켜야 할 때 

    render() {
        //부모는 여기 값들을 상태에 넣어놔야 한다.

        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock  hours={10}
                    minutes={20}
                    seconds={40}
                    session={'am'} />
            </div>
        );
    }
}