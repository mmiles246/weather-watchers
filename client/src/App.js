import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticateApp';

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [authCheck, setAuthCheck] = useState(false)

  return (
    <BrowserRouter>
    {
      currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />
    }
    </BrowserRouter>
  );
}

export default App;
