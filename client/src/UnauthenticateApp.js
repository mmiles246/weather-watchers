import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";


function UnauthenticatedApp ({setLat, setLng, userLocationKey, currentConditions, triggerLocation, getLocation, locate}) {

    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home userLocationKey={userLocationKey} currentConditions={currentConditions} getLocation={getLocation} triggerLocation={triggerLocation} locate={locate} />}>
            </Route>
        </Routes>
        </>
    )

}

export default UnauthenticatedApp;