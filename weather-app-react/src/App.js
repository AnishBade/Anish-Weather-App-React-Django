import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  // const url = `http://127.0.0.1:8000/api/weathers/`

  const currentDate = new Date().toLocaleDateString(undefined,{
    day: 'numeric',
    month: 'numeric'
  });

  const searchLocation = (event) => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
  }

  const [selectedValue, setSelectedValue] = useState("");
  
  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  // axios
  // .get("http://localhost:8000/api/weathers/")
  // .then(response => {const items = response.data;console.log(items);})
  // .catch(err => console.log(err));




  return (
    <div className="app">
      <div className="search">
          <select 
          id="location"
          onClick={searchLocation}
          value={location} 
          placeholder={location}
          onChange={event => setLocation(event.target.value)}>
            <option>Select location</option>
            <option>Kathmandu</option>
            <option>Toronto</option>
            <option>Florida</option>
            <option>San Francisco</option>
            <option>London</option>
          </select>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        
          <div className='down'>
            <div className='elements'>
              {currentDate}<br></br>
              {data.main ?<p>{data.main.temp.toFixed()}°F</p> :null}
            </div>
            <div className='elements'>
              3/28<br></br>
              
            </div>
            <div className='elements'>
              3/29<br></br>
              Temp
            </div>
            <div className='elements'>
              3/30<br></br>
              Temp
            </div>
            <div className='elements'>
              4/1<br></br>
              Temp
            </div>
            <div className='elements'>
              4/2<br></br>
              temp
            </div>
            <div className='elements'>
              4/3<br></br>
              Temp
            </div>
            <div className='elements'>
              4/4<br></br>
              Temp
            </div>
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;