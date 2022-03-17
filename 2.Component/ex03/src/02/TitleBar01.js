import React, {Component} from 'react'

 
//Component(a, a, a)
class TitleBar01 extends Component {
    // this.no VS this.state.no

    constructor() {
    //     //arguments는 배열
        super(...arguments);  //배열 분해하는 연산자.  ...
        //argument는 유사배열이다.
    //     //this.no VS this.state.no 와의 차이점    
        
        // this.no = 0;
        //초기값을 세팅할 때는 이렇게 한다.
        this.state = { //초기값 세팅에는 this.state
            no:0
        };
        
    }

    onClickHandler(){
        //this.no VS this.state.no
        // console.log(`TitleBar01 Clicked!!${this.no}`)
        
        
        //초기 html에서 카운트가 된다.
        this.no++;
        this.setState({  //원래 있던 no에 1 씩 더해준다.
            no: this.state.no + 1
        });
        

        //2. 수정 이렇게 하면 랜더링이 되지 않는다.
        // this.state.no= this.state.no +1;
        // console.log(`TitleBar01 Clicked!!${this.state.no}`);

        // console.log('TitleBar1 Clicked!');
    }

    render() {
        return (
         <h1
            style={{cursor: 'pointer'}}
            onClick={this.onClickHandler.bind(this)}>
            ex03: Functional Event Handler(Class Component)
            <br/>
                {
                    //this.no VS this.state.no
                    

                    // this.no
                    this.state.no

                }
            
         </h1>
    );
}
}

export default TitleBar01;
