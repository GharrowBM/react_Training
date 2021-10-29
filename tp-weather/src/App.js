import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherAction } from './store/weatherSlices';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const [inputCity, setInputCity] = useState('Paris')
  const [inputCountryCode, setInputCountryCode] = useState('FR')

  const state = useSelector(state => state)
  const {weather, loading, error} = state

  function getWeatherIcon(id) {
    return `http://openweathermap.org/img/wn/${id}@2x.png`
  }

  function formatDescription(input) {
    return input.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
  }

  function formatTemperature(temp) {
    return Math.round(temp - 273.15)
  }

  return (
    <div className="App">
      <h1>Weather Tracker</h1>
      <div className="input-area">
      <input type="text" name="input-city" id="input-city" placeholder="Vile" value={inputCity} onChange={(e) => setInputCity(e.currentTarget.value)}/>
      <input type="text" name="input-country" id="input-country" placeholder="Vile" value={inputCountryCode} onChange={(e) => setInputCountryCode(e.currentTarget.value)}/>
      <button onClick={() => dispatch(fetchWeatherAction({city: inputCity, countryCode: inputCountryCode.toLowerCase()}))}>Chercher</button>
      </div>
      <div className="output-area">
          {weather ? <> 
            <h2>{weather?.name}, {weather?.sys.country}</h2>
          <img src={getWeatherIcon(weather?.weather[0].icon)} alt="Weather icon" />
          <span>{formatDescription(weather?.weather[0].description)}</span>
          <span>{formatTemperature(weather?.main.temp)}°C</span>
          <span>{formatTemperature(weather?.main.temp_min)}°C {formatTemperature(weather?.main.temp_max)}°C</span>
          <span>{weather?.main.pressure}hPa {weather?.main.humidity}%</span>
          </>: null}
      </div>
    </div>
  );
}

export default App;
