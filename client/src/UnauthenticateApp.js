import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Signup from "./components/Signup";


function UnauthenticatedApp ({userLocationKey, userLocationName, userState, currentConditions, triggerLocation, locate, iconNum}) {

    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={
            <Home 
            userLocationKey={userLocationKey}
            userLocationName={userLocationName}
            userState={userState} 
            currentConditions={currentConditions} 
            triggerLocation={triggerLocation} 
            locate={locate} 
            iconNum={iconNum} 
            />
            }>
                <Route path='signup' element={<Signup />} />
            </Route>
        </Routes>
        </>
    )

}

export default UnauthenticatedApp;