import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherAction } from './store/weatherSlices';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction({city: 'Paris', countryCode: 'fr'}))
  })

  const [inputCity, setInputCity] = useState('Paris')
  const [inputCountryCode, setInputCountryCode] = useState('FR')

  const state = useSelector(state => state)
  const {weather, loading, error} = state

  return (
    <div className="App">
      <div className="input-area">
      <input type="text" name="input-city" id="input-city" placeholder="Vile" value={inputCity} onChange={(e) => setInputCity(e.currentTarget.value)}/>
      <input type="text" name="input-country" id="input-country" placeholder="Vile" value={inputCountryCode} onChange={(e) => setInputCountryCode(e.currentTarget.value)}/>
      <button onClick={() => dispatch(fetchWeatherAction({city: inputCity, countryCode: inputCountryCode.toLowerCase()}))}>Chercher</button>
      </div>
      <div className="output-area">

      </div>
    </div>
  );
}

export default App;
