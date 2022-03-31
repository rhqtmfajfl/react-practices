import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');

    const handleHashChange = () => {
        // const route = window.location.hash.substring(1)
        // console.log(route);
        console.log(window.location.hash);
        setRoute(window.location.hash.substring(1));
    };

    useEffect(() => {
        //mount 됐을때
        //window 전역객체 내 자바스크립트 코드는 브라우저에서 실행된다.
        window.addEventListener("hashchange", handleHashChange);

        //unmount 됐을 때
        return () =>{
            window.removeEventListener("hashchange",handleHashChange)
        };


    }, []);
    return (function(){
        switch(route){
            case '/' :
                return <Main />;
            case '/guestbook':
                return <Guestbook />
            case '/gallery':
                return <Gallery />;
            default:
                return null;
        }

    })();
}