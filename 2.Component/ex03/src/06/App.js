import React, { Component } from 'react';
import './assets/scss/App.scss';


export default class App extends Component {
    
    constructor(){
        this.outterRef = null;
    }
    //이코드는 스크롤 할때 실행
    onScroll(e){
        console.log(this.outterRef.clientHeight," : ", this.outterRef.scrollTop," : ", this.innerRef.clientHeight) //여기서는 current를 안써도 된다.
    }

    render(){
    return (
        <div
            ref={ref => this.outterRef = ref }
            className={'App'}
            onScroll={this.onScroll.bind(this)}>
            
            <div
                ref={ref => this.innerRef = ref}>
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
    
}