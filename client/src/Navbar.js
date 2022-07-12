import {Link} from 'react-router-dom'

function NavBar () {

    return (
        
            <nav className='nav--primary'>
                <div className='nav-container'>  
                <Link to='/' className='navbar-logo'>
                    Weather Watchers <i class="fa-solid fa-2x fa-cloud"></i>
                </Link>
                </div>
            </nav>
       
    )

}

export default NavBar;