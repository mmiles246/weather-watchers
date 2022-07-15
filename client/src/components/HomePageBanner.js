import {useState, useEffect} from 'react'
import EventsWidget from './EventsWidget'

function HomePageBanner ({currentConditions, userLocationName, userState, triggerLocation, locate, iconNum}) { 
    // const [iconNum, setIconNum] = useState()
    
    console.log(currentConditions)
    function localIcon (iconNum) {
        if (iconNum <= 2 ) {
            return 'fa-solid fa-2x fa-sun'
        } else if (iconNum <= 5) {
            return 'fa-solid fa-cloud-sun'
        } else if (iconNum <= 8 || iconNum === 11 || iconNum === 37 || iconNum === 38) {
            return 'fa-solid fa-3x fa-cloud'
        } else if (iconNum <= 13 || iconNum === 18|| iconNum === 40){
            return 'fa-solid fa-3x fa-cloud-rain'
        } else if (iconNum === 14 || iconNum === 17) {
            return 'fa-solid fa-2x fa-cloud-sun-rain'
        } else if (iconNum <= 16 || iconNum === 41 || iconNum === 42) {
            return 'fa-solid fa-2x fa-cloud-bolt'
        } else if (iconNum === 30) {
            return 'fa-solid fa-2x fa-temperature-full'
        } else if (iconNum === 32) {
            return 'fa-solid fa-2x fa-wind'
        } else if (iconNum === 33 || iconNum === 34) {
            return 'fa-solid fa-2x fa-moon'
        } else if (iconNum ==35 || iconNum === 36) {
            return 'fa-solid fa-2x fa-cloud-moon'
        } else if (iconNum === 39) {
            return 'fa-solid fa-2x fa-cloud-moon-rain'
        }
    }

    return (
        <>
            <div className="home-banner">
                <div className="temp-widget">
                    {/* <div className='temp-widget-location'> */}
                        {userLocationName ? <span>{userLocationName}</span> : <></>}
                    {/* </div> */}
                    <div className="temp-widget-icon">
                        <i class={ !locate ? "fa-solid fa-3x fa-location-arrow" : localIcon(iconNum)} onClick={triggerLocation}></i>  
                    </div>
                    <div className="local-temp">
                        {iconNum ? <span>{currentConditions.Temperature.Imperial.Value}</span> : <></>}
                        {/* <span>{currentConditions.Temperature.Imperial.Value}</span> */}
                    </div>
                    
                </div>
                <div className="events-widget">
                    <EventsWidget userState={userState} />
                </div>
            </div>
        </>
    )

}

export default HomePageBanner;