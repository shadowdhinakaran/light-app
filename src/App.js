import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOn,SetIsOn] = useState(false);
  
  const ToggleLight = () => SetIsOn(!isOn);
  return (
    <div style={{textAlign:'center',paddingTop:'50px',backgroundColor:'yellowgreen',height:'100vh'}}>
      <h2>{isOn ? "💡 Light is ON" : "🌑 Light is OFF"}</h2>
      <img src={
         isOn
         ? 'https://www.w3schools.com/js/pic_bulbon.gif'
         : 'https://www.w3schools.com/js/pic_bulboff.gif'
      } 
      alt="bulb"
      style={{ width: '100px', margin: '20px 0' }}
      />
      <br />
      <button onClick={ToggleLight}>
        turn {isOn? "off":"on"}
      </button>
    </div>
  );
}

export default App;
