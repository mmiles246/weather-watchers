import { useState, useEffect } from "react";

function RadarBanner ({userLocationKey}) {
    const [radarObj, setRadarObj] = useState ({})

    useEffect(() => {
        fetch(`http://dataservice.accuweather.com/imagery/v1/maps/radsat/1024x1024/${userLocationKey}?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP`)
        .then(res => res.json())                                  
        .then(res => {
            console.log(res)
            setRadarObj(res)
        })
    }, [])

    
    return (
        <>
        <div className='radar-banner'>
            <div className='radar-container'>
            </div>
        </div>
        </>
    )

}

export default RadarBanner;