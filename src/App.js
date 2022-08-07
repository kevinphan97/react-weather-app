import React, { useState } from 'react';
import axios from 'axios';

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=b441dd6636d6c89557d63d18d5c4b85e`

  return (
    <div className= 'app'>
      <div className = 'container'>
        <div className= 'top'>
          <div className = 'location'>
            <p>Phoenix</p>
          </div>
          <div className = 'temp'>
            <h1>101°F</h1>
          </div>
          <div className = 'description'>
            <p>Sunny</p>
          </div>
        </div>
        <div className= 'bottom'>
          <div className = 'feels'>
            <p className = 'bold'>105°F</p>
            <p>Feels like</p>
          </div>
          <div className = 'humidity'>
            <p className = 'bold'>8%</p>
            <p>Humidity</p>
          </div>
          <div className = 'wind'>
            <p className = 'bold'>0 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
