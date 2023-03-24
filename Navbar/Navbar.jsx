import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar=()=>{
    return(<div className="container">
        <>
            <h1 id="head">Header</h1>
        </>
        <div id="links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">LogIn</Link></li>
            </ul>
        </div>
    </div>)
}
export default Navbar