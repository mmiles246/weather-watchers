import {Link} from 'react-router-dom'
import NavBar from './Navbar';

function Signup () {

    return (
        <>
        <NavBar />
         <div className='signup-page'>
            <div className="signup-box">
                <form className="signup-form"  >
                    {/* <label htmlFor="first_name_signup">First Name</label> */}
                    <input id="first-name-signup" 
                    type="text" 
                    placeholder="First Name"
                    // value={signupInfo.first_name}
                    name='first_name'
                    // onChange={handleInputChange}
                    ></input>

                    {/* <label htmlFor="last_name_signup">Last Name</label> */}
                    <input id="last-name-signup" 
                    type='text' 
                    placeholder="Last Name"
                    // value={signupInfo.last_name}
                    name='last_name'
                    // onChange={handleInputChange}
                    ></input>

                    <br></br>

                    {/* <label htmlFor="email_signup">Email</label> */}
                    <input id="email-signup" 
                    type='email' 
                    placeholder="Email"
                    // value={signupInfo.email}
                    name='email'
                    // onChange={handleInputChange}
                    ></input>

                    <br></br>

                    {/* <label htmlFor="password_signup">Password</label> */}
                    <input id="password-signup" 
                    type='password' 
                    placeholder="Password"
                    // value={signupInfo.password}
                    name='password'
                    // onChange={handleInputChange}
                    ></input>

                    <br></br>

                    <br></br>

                    <button type='submit'>Submit</button>

                </form>

                <br></br>

            </div>
            
            <br></br>

            <div className='login-link'>
                <p>Already a member?</p>
                <Link to="/login">Login Here</Link>

            </div>
        </div>
        </>
    )

}

export default Signup;