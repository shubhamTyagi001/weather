import { useEffect } from 'react';
import './App.css';
import Display from './Components/Display';
function App() {
  useEffect(()=>{
    fetch('http://api.weatherstack.com/current?access_key=6a27ee8f01a895298d8fcaef54b35ad6&query=India').then((response)=>
      response.json()
    ).then((data)=>{
      console.log(data)
    })
  })
  return (
    <div className="App">
    fjbjgfbjjf
    <Display/>
    </div>
  );
}

export default App;
