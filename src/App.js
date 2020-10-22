import React, { useState } from 'react';
import './App.css';

function App() {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString())
  const UpdateTime =()=>{
    setCurrTime(new Date().toLocaleTimeString())
  }

  setInterval(UpdateTime, 1000);
  return (
    <div className="App">
      <h1>{currTime}</h1>
    </div>
  );
}

export default App;
