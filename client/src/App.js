import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticateApp';

function App() {
  const [currentUser, setCurrentUser] = useState(false)     //future implementation of user account creation feature.
  const [authCheck, setAuthCheck] = useState(false)         //future implementation of user account creation feature.
  const [userLocationKey, setUserLocationKey] = useState(null)  //possibly no longer needed, TBD.
  const [dailyForcast, setDailyForcast] = useState({})          //holds object contains users location forcast.
  const [localTemps, setLocalTemps] = useState({})              //probably going to replace with variables.
  const [currentConditions, setCurrentConditions] = useState({})  //holds object containing users locations current conditions.
  const [lat, setLat] = useState(null)                         //users lat  
  const [lng, setLng] = useState(null)                         //users long
  const [status, setStatus] = useState(null)                   //geolocater status
  const [locate, setLocate] = useState(false)

  function triggerLocation () {               //"Buffer" function to help handle conditional icon rendering based on users local temps 
    setLocate(true);
    getLocation();
}

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
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP&q=${lat}%2C${lng}`)  
    .then((res) => res.json())
    .then((res) => {
      setUserLocationKey(res.Key)
      return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${res.Key}?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP`)  
      })
      .then(res => res.json())
      .then(res =>  {
         setCurrentConditions(res[0])
         console.log(res)
      })
    }, [triggerLocation])
  
  return (
    <BrowserRouter>
    {
      currentUser ? <AuthenticatedApp /> 
      : 
      <UnauthenticatedApp 
      userLocationKey={userLocationKey}
      currentConditions={currentConditions} 
      getLocation={getLocation} 
      triggerLocation ={triggerLocation}
      locate={locate}
      />
    }
    </BrowserRouter>
  );
}

export default App;
  


  //     return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${res.Key}?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP`)  
  //     })
  //     .then(res => res.json())
  //     .then(res => {
  //       setLocalTemps(res.DailyForecasts[0].Temperature)
  //     })