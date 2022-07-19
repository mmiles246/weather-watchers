import { useState, useEffect } from "react";
function SearchBar ({placeholder, setLat, setLng}) {
    const [userPostalCodeSearch, setUserPostalCodeSearch] = useState('')

    function userSearch (e) {
        setUserPostalCodeSearch(e.target.value)
    }

    function onSubmit (e) {
        e.preventDefault()
        fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=OsURg1PXKrkIswSEQHCGvY7yHyTJpVkP&q=${userPostalCodeSearch}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setLat(res[0].GeoPosition.Latitude)
            setLng(res[0].GeoPosition.Longitude)
        })
    }
    return(
        <form onSubmit={onSubmit} >
        <div className="search--primary">
            <div className="search-input">
                    <input type='text' placeholder={placeholder} onChange={userSearch} />
                    <div className="search-icon">
                        <button type='submit'>
                        <i class="fa-solid fa-magnifying-glass" ></i>
                        </button>
                    </div>
                
            </div>
        </div>
        </form>
    )

}

export default SearchBar;