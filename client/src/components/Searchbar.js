import { useState } from "react";
function SearchBar () {
    const [searchState, setSearchState] = useState("")
    return(
        <div className="search--primary">
            <div className="search-input">
                <input type='text' />
                <div className="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

        </div>
    )

}

export default SearchBar;