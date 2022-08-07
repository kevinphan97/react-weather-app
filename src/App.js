import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b441dd6636d6c89557d63d18d5c4b85e`

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className = 'app'>
      <div className = 'search'>
        <input 
        type = 'text'
        value = {location}
        onChange = {e => setLocation(e.target.value)}
        onKeyPress = {searchLocation} 
        placeholder = 'Enter a Location'
        />
      </div>
      <div className = 'container'>
        <div className = 'top'>
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
        <div className = 'bottom'>
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
