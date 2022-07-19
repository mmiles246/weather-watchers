import {Link} from 'react-router-dom'
import { useState } from 'react';
import SearchBar from './Searchbar';
import { NavBarData } from './NavBarData';

function NavBar ({setLat, setLng}) {
    const [clicked, setClicked] = useState(false)

    function showNavBar () {
        setClicked(!clicked)
    }

    return (
        <div className='nav-container'>  
            <Link to='/' className='nav-logo'>
                Weather Watchers <i class="fa-solid fa-2x fa-cloud"></i>
            </Link>
            <SearchBar placeholder='search by zipcode' setLat={setLat} setLng={setLng} />
            <Link to='/' className='nav-icon'>
                <i class="fa-solid fa-2x fa-bars" onClick={showNavBar}></i>
            </Link>
            <nav className={clicked ? 'nav-menu-active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='nav-menu-toggle'>
                        <Link to='/' className='menu-bars'>
                            <i class="fa-solid fa-xmark" onClick={showNavBar}></i>
                        </Link>
                    </li>
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to ={item.path}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )

}

export default NavBar;