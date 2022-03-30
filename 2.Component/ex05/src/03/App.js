import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = this.getCurrentClockTime;  //마운트 됐을때 나오게끔 한다.

     
    }

    getCurrentClockTime(){
        const date = new Date();  //new date로 시간을 뽑아 내야 한다.
        // console.log(date);

        const hours = date.getHours();  //시간에서 두자리로 나오게 한다.
        // const minutes = ('0' + date.getMinutes()).slice(-2);
        // const seconds = ('0' + date.getSeconds()).slice(-2);
        // const session = hours > 12 ? 'pm' : 'am';
        

        //객체를 넘겨주도록 한다.
        //hours가 12 이기때문에
        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours-12 : hours))).slice(-2),  //뒤의 괄호는 결과가 1이 나오게 도니다. 
            minutes: ('0' + date.getMinutes()).slice(-2),
            seconds: ('0' + date.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm' : 'am',  
            ticks: this.state ? this.state.ticks + 1 : 0
        };
        // if 문대신

        //this.state.ticks를
    }

    //시계를 꺼야 할 때 unmount 됐을 때
    // 시계를 켜야 할 때 

    render() {
        //부모는 여기 값들을 상태에 넣어놔야 한다.
//
//
//this.state.ticks % 10 == 0 ? 10번 되면 사라지게 하고 20번 되면 사라지게 하는 것
//  10 이되면 null로 사라지게 된다.

        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                {
                    this.state.ticks % 10 == 0 ?
                    null : 
                    <Clock  
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    session={this.state.session} />
                
                }
            </div>
        );
    }

    //여기는 새로 1초마다 깜빡거리지 않고 변하게끔 해야한다.//타이머를 써서 상태를 변화 시켜줘야 한다.
    //마운트가 된 다음
    componentDidMount(){  //componentDidMount가 된 다음
        this.interval = setInterval(function() {  //컴포넌트  //setInterval의 callback이기 때문에 이 콜백 함수에서 this 함수는
            this.setState(this.getCurrentClockTime()) //이 컴포ㅌ넌트가 아니기 때문에 bind를 사용한다.
        }.bind(this), 1000);
    }

    // componentWillUnmount() {  unmount 사용
    //
    //
    componentWillUnmount() {
        // console.log("unmount!!!");
        clearInterval(this.interval);
    }
}