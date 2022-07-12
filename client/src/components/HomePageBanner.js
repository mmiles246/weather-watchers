import {useState, useEffect} from 'react'

function HomePageBanner () {

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


    return (
        <>
            <div className="home-banner">
                <div className="temp-widget">
                    <div className="temp-widget-icon">
                        <i class="fa-solid fa-3x fa-temperature-half" onClick={getLocation}></i>
                    </div>
                    <div className="local-temp">

                    </div>
                </div>
                <div className="events-widget">
                    Weather Events will post here!
                </div>
            </div>
        </>
    )

}

export default HomePageBanner;