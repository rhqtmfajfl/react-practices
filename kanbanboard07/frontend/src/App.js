import React, { useEffect, useState } from 'react'
import KanbanBoard from './KanbanBoard';
import './assets/css/App.css';

// Kanbanboard
// import './assets/css/App.css';에는

 const App = () => {

  
      //Appㅁ를 모듈로 안받으면 해싱이 안되게 하려면 :global을 사용한다. 그러면 여기서 그냥 App 사용 가능


  return (
    
     < KanbanBoard/>
  
  )
}

export default App;