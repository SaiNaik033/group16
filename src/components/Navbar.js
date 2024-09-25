import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <Link to='/' className=' fs-1 fst-italic' style={{'color':"black","fontSize":"25px"}}>MyFood</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button type="button" className="btn btn-light"><Link className="nav-item nav-link" to="/login">Login</Link></button>
                        <button type="button" className="btn btn-light spc"><Link className="nav-item nav-link " to="/Signup">Sign up</Link></button>
                        
                    </div>
                    
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
