import React, { Component } from 'react';

// ...[a,b,c]


export default class extends Component {
    constructor() {
        super(...arguments);  //배열을 분해시킨것 ... 을 붙여주면 배열로 분해가 된다. 
        this.state = {
            //step: this.props.step,  //props로 넘어온 값을 step으로 보낸다.
            val: this.props.begin
        }
    }
    //this.state.val로 변화시킬 수 있다. 변화시킬 객체를 주고 this state의 객체를 준다.상태가 변화 되었을때 render가 변경 상태가 변경되야 한다.
    //render에서는 po=roptㄴ 값을 사용

    onClickButton(e) {
        // console.log('click');
        this.setState({val:this.state.val + this.props.step})    //변할놈만 지정해준다.  //이 this는 componnent일 수도 있고 어떤 것인지 모른다.
        //{this.onClickButton.bind(this)  람다 일때는 bind(this)를 안해줘도 된다.

        //props로 하면
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {'  '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}