import { useState, useEffect} from 'react'

function EventsWidget ({userState}) {
    const [alertArray, setAlertArray] = useState([])
    const [actualAlerts, setActualAlerts] = useState([])

    useEffect(() => {
        fetch(`https://api.weather.gov/alerts?message_type=alert&area=${userState}`)
        .then(res => res.json())
        .then(res => {
            setAlertArray(res.features)
        })
    }, [])

        for (alert of alertArray) {
            let alertD = alert.properties.description;
            actualAlerts.push(alertD)
        }


    console.log(alertArray)

    return(
        <>

        </>
    )

}

export default EventsWidget;
