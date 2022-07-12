import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";


function UnauthenticatedApp () {

    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}>
            </Route>
        </Routes>
        </>
    )

}

export default UnauthenticatedApp;