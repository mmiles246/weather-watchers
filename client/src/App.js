import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticateApp';

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [authCheck, setAuthCheck] = useState(false)
  const [userLocationKey, setUserLocationKey] = useState(null)
  const [localTemps, setLocalTemps] = useState({})
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [status, setStatus] = useState(null)

  function getLocation () {
    if (!navigator.geolocation) {
      setStatus('Geolocation not supported by your browser.');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrive your location.');
      })
    }
  }

  useEffect(() => {
    fetch('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP&q=40.2273547%2C-74.0025902')
    .then((res) => res.json())
    .then((res) => {
      setUserLocationKey(res.Key)
      return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${res.Key}?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP`)
      })
      .then(res => res.json())
      .then(res => {
        console.log(res.DailyForecasts.Temperature)
        setLocalTemps(res.DailyForecasts.Temperature)
      })
    })
    // .then(fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${userLocationKey}?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP`)
    // .then(res => res.json)
    // .then(res => console.log(res))) 
  // })

  return (
    <BrowserRouter>
    {
      currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />
    }
    </BrowserRouter>
  );
}

export default App;
