import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const[fan,setFan] = useState(0)
  return (
    <>
    <div>
      <p className='result' >{fan}</p>
  <p></p>
  <button className='bttn' onClick={() =>{
    setFan(fan + 1)
  }} >Increament</button>
  <button className='bttn' onClick={()=>{
    setFan(fan - 1)
  }}>Decreament</button>
    </div>
    </>
  
    
  );
}

export default App;
