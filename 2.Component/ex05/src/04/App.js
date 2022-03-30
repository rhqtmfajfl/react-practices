import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    //const getCurrentClockTime은 호출 될때마다 만드어진다.
    const getCurrentClockTime = () =>{
        const date = new Date();
        const hours = date.getHours();
    

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours-12 : hours))).slice(-2),  //뒤의 괄호는 결과가 1이 나오게 도니다. 
            minutes: ('0' + date.getMinutes()).slice(-2),
            seconds: ('0' + date.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm' : 'am',  
    
        };
}

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime);
    const [ticks, setTicks] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks+1)
    //     });
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks+1)
        }, 1000);
    }, [currentClockTime]); //currentClockTime이 변경되면 실행될 수 있도록


    //여기서 span에 {ticks} 하면 웹에 1만 계속 나타난다.
     return (
            <div>
                <span>{ticks}</span>
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={currentClockTime.hours}
                    minutes={currentClockTime.minutes}
                    seconds={currentClockTime.seconds}/>
            </div>    
    );


}