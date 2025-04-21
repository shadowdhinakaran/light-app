import React, { useState } from 'react';
import "./App.css"
import lightOn from "../src/assests/lightonimage.png";   // adjust path if needed
import lightOff from "../src/assests/3-bulb-png-image.png";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => setIsOn(!isOn);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px', backgroundColor: 'yellowgreen', height: '100vh' }}>
      <h2>{isOn ? "💡 Light is ON" : "🌑 Light is OFF"}</h2>
      <img
        src={isOn ? lightOn : lightOff}
        alt="bulb"
        style={{ width: '300px', margin: '20px 0',height:"300px" }}
      />
      <br />
      <button onClick={toggleLight} style={{padding:"5px",borderRadius:"10px"}}>
        turn {isOn ? "off" : "on"}
      </button>
    </div>
  );
}

export default App;
