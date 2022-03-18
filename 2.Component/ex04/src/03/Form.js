import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import './assets/Form.css';

export default function Form() {
    const onSubmit = function(e) {
        e.preventDfault();
        
        // validation이 딱히 필요가 없으며....
        console.log(e.target.email.value, ':', e, target.password.value);

        //ajax 통신
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
             type="password" />

            
            <input type="submit" value="가입" />
        </form>
    );
}