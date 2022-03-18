import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import './assets/Form.css';

export default function Form() {

    //value를 쓰면 상태로 출력을 해야하는 제어컴포넌트  value값을 내가 찍어내기 때문에
    
    const [name, setName] = useState("");  //useState가 뭔지 알아보자/
    //email은 제한하는것보다 
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    //이거는 제어 컴포넌트라기보다는 보이게 하고 안보이게 하는 것이다.
    const [validEmail, setValidEmail] = useState(false);

    const [gender, setGender] = useState('female');
    
    const [birthYear, setBirthYear] = useState('1984');

    const [description, setDescription] = useState('');

    const [agreeProv, setAgreeProv] = useState('no');

    const onChangeInputName = e => {
        // setName(e.target.value);
        
        //10자 제한

        setName(e.target.value.substr(0,10));
    }


    //이메일은 비제어이고 상태랑 연동이안되어서 value를 빼도 그냥 쓰면 된다.
    //어떨때는 제어를 써야되고 어떨때는 비제어를 써야 한다.
    //name은 value를 안쓰면 칸안에 글을 쓸수가 없어서 제어를 사용해야한다.

    const onChangeInputEmail = function(e) {
        setEmail(e.target.value);  //이렇게 하면 value 값이 없어도 들어가지만 굳이 필용는 하나?

        //g는 이형식에 맞아야 된다는의미
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        //사용방법
        setValidEmail(re.test(e.target.value));  //true이면 정규식에 맞는것 아니면 false

        //여기의 결과값을 setValidEmail 여기에 저장
    }

    // 이메일형식에 맞으면 o 아니면 x

    // const onChangeInputPassword = function(e) {
    //     setPassword(e.target.value);  

    //     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    //     //사용방법
    //     setValidEmail(re.test(e.target.value));  e

    // }

    const onChangeInputGender = function(e){
        setGender(e.target.value);
    }

    // const onChangeInputDescription = function(e){
    //     setGender(e.target.value);
    // }

    const onChangeAgreeProv = function(e) {
        console.log(e.target.value);

        // if(e.target.value === 'no'){
        //     setAgreeProv('yes');
        // }

        // if(e.target.value === 'yes'){
        //     setAgreeProv('no');
        // }

        const status = e.target.value === 'no' ? 'yes' : 'no'

        // setAgreeProv(status);

          // API 호출
          const url = `/prov/agree?status=${status}`;
          console.log(url);
          if(true) {
              setAgreeProv(status);
          }

    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
        <label htmlFor="name">이름</label>
        <input 
            id="name"
            name="name"
            type="text"
            value={ name }
            onChange={onChangeInputName}/>


            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={onChangeInputEmail}/>
                    { 
                       email === '' ? 
                       null: 
                       validEmail ? 
                           <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:5, fontSize: 16, color: 'blue'}}/> :
                           <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft:5, fontSize: 16, color: 'red'}}/>
                    }

            <label htmlFor="password">패스워드</label>
            <input id="password"
             name="password" 
             type="password"
              value={ password }
              onChange={e => setPassword(e.target.value)} />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> 
                <input 
                    type="radio" 
                    name="gender" 
                    value={ "female" } 
                    defaultChecked={ true } 
                    checked={gender === 'female'}
                    onChange={onChangeInputGender}/>

                <label>남</label> 
                <input 
                    type="radio" 
                    name="gender" 
                    value={ "male" }
                    defaultChecked={ false } 
                    checked={gender === 'male'}
                    onChange={onChangeInputGender}/>
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select 
            id="birthYear" 
            value={birthYear} 
            onChange={e => setBirthYear(e.target.value)}>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov"
                type="checkbox"
                name="agreeProv"
                value= { agreeProv }
                checked={ agreeProv === 'yes' } 
                onChange={onChangeAgreeProv}/>
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}