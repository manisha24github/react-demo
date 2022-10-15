import React,{ useState } from 'react';
import './App.css';

function App() {
 
  const [count,setCount] =useState(4)
 
   function decrementCount(){
    setCount (count-1)
   }
  return (
   <>
   <button onClick={decrementCount}>-</button>
   <span>{count}</span>
   <button>+</button>
  </>
  )
}

export default App;
