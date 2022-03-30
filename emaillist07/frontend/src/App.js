import React, {useState, useEffect} from 'react'  //App.js 가 상태 컴포너트가 된다.
//부모가 상태를 가지고 있고 그 상태를 가지고 자식한테 프로퍼티 형식으로 리스트를 던져서 url으 ㄹ변경하느것다 수눗가 된다.
//가라는 키워드를 위로 던져서 필터링해서 새로 만든거를 또 자식 더미한테 던져서 화면을 그리게끔 한다.

import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
 
const App = () => {
    //Appㅁ를 모듈로 안받으면 해싱이 안되게 하려면 :global을 사용한다. 그러면 여기서 그냥 App 사용 가능
    const [emails, setEmails] = useState([]);

    useEffect(async () => {
      try{
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      // console.log(response);

      if(!response.ok){
      //  console.log("error:", response.status, response.statusText);
      //return; //여기서 리턴을 안해줘도 된다.
        throw new Error(`${response.status} ${response.statusText}`);
      }


      const json = await response.json();

      if(json.result !== 'success'){
        // console.log("error:", json.message);
        //
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data); // 상태가 바꼈기 때문이 밑에 내려가서 이메일리스트를 그려준다.

    }catch(err){
      console.log(err);
    }
  }, []);


    //여기를 통신모드로 바꿔야 한다.
    //function을 await 쓰고 있기 때문에 async를 써줘야 한다.
    // 이 예제는 베이직 java-script에 async 세개의 예제가 있다.
    const notifyKeywordChange = async function(keyword) {
      // console.log("./api?kw=" + keyword)  // 
        // setKeyword(kw);
        // console.log(keyword);

        //필터 작업
        // const result = emails.filter(e => e.firstName.indexOf(kw) != -1 || e.lastName.indexOf(kw) != -1 || e.email.indexOf(kw) != -1)
        // setEmails( data.filter(e => e.firstName.indexOf(kw) != -1 || e.lastName.indexOf(kw) != -1 || e.email.indexOf(kw) != -1)); //기존의 상태를 변화시킬때 새 객채를
      // console.log(result);

      try{
        const response = await fetch(`/api?kw=${keyword}`, {
          method: 'get', //get방식으로 들어와서 apicontroller에서 getMapping"/api" 부분이다.
          headers: {
            'Content-Type': 'application/json',  //body에 보내는 타입은 json 형태다라고 하는 것
            'Accept': 'application/json'
          },
          body: null
        });
  
        // console.log(response);
  
        if(!response.ok){
        //  console.log("error:", response.status, response.statusText);
        //return; //여기서 리턴을 안해줘도 된다.
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
  
        const json = await response.json();
  
        if(json.result !== 'success'){
          // console.log("error:", json.message);
          //
          throw new Error(`${json.result} ${json.message}`);
        }
  
        setEmails(json.data); //데이터가 오면 set 이메일로 들어온다.
  
      }catch(err){
        console.log(err);
      }

    }

    // 여기서 만든것을 CALLBACK으로 넘겨준다. //여기서 notify를 form이 호출 한다 cofm 한테 callback으로 넘겨준다.
    // 자식이 부모 호출 registerForm으로 callback으로 넘겨 ㅜㄴ다.

    //여기서는 통신을 해준다.
    const notifyEmailAdd = async function(email){
      // console.log('post /api', email);  //포스트 방식으로 api를 호출 한다.  데이터가 잘넘오오는지 확인하기위해 email을 넣어준다.
      try {  
        const response = await fetch('/api', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(email)
        });
  
        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        const json = await response.json();
  
        if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`);
        }
  
        setEmails([json.data, ...emails]);   //json.data를 하면 첫번째가 들어간다. ...를 사용하면 배열을 분해시키는 연산자 
        //이렇게 emails를 쓰면 밑의 for문과 같은 의미이다.
        /*
          const newEmails = [];
          newEmails[0] = json.data;
          for(var i = 0; i < emails.length; i++){
            newEmails[i+1] = emails[i];
          }
        */

      } catch(err) {
        console.log(err);      
      }    
    }
    

  return (
    <div className={'App'}>
      <RegisterForm callback={notifyEmailAdd}/>
      <SearchBar callback={notifyKeywordChange}/>
      <Emaillist emails={emails} />

    </div>
  )
}

export default App