import React, {useState, useEffect} from 'react'  //App.js 가 상태 컴포너트가 된다.
//부모가 상태를 가지고 있고 그 상태를 가지고 자식한테 프로퍼티 형식으로 리스트를 던져서 url으 ㄹ변경하느것다 수눗가 된다.
//가라는 키워드를 위로 던져서 필터링해서 새로 만든거를 또 자식 더미한테 던져서 화면을 그리게끔 한다.

import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

const App = () => {
    //Appㅁ를 모듈로 안받으면 해싱이 안되게 하려면 :global을 사용한다. 그러면 여기서 그냥 App 사용 가능
    const [emails, setEmails] = useState(data);

    useEffect(async () => {
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      console.log(response);
  }, []);

    const notifyKeywordChange = function(kw) {
        // setKeyword(kw);
        // console.log(keyword);

        //필터 작업
        // const result = emails.filter(e => e.firstName.indexOf(kw) != -1 || e.lastName.indexOf(kw) != -1 || e.email.indexOf(kw) != -1)
        setEmails( data.filter(e => e.firstName.indexOf(kw) != -1 || e.lastName.indexOf(kw) != -1 || e.email.indexOf(kw) != -1)); //기존의 상태를 변화시킬때 새 객채를
      // console.log(result);

    }
  return (
    <div className={'App'}>
      <RegisterForm />
      <SearchBar callback={notifyKeywordChange}/>
      <Emaillist emails={emails} />

    </div>
  )
}

export default App