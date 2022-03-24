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
        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours-12 : hours))).slice(-2),  //뒤의 괄호는 결과가 1이 나오게 도니다. 
            minutes: ('0' + date.getMinutes()).slice(-2),
            seconds: ('0' + date.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm' : 'am',
            ticks: this.state ? this.state.ticks + 1 : 0
        };

    }

    //시계를 꺼야 할 때 unmount 됐을 때
    // 시계를 켜야 할 때 

    render() {
        //부모는 여기 값들을 상태에 넣어놔야 한다.

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

    componentDidMount(){
        this.interval = setInterval(function() {
            this.setState(this.getCurrentClockTime())
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        // console.log("unmount!!!");
        clearInterval(this.interval);
    }
}