import React from "react";
import logo from "../Assets/images/favicon.png"

function Nav(){
    return(
        <nav>
            <div id="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div id="site-title">
                <h2>Tech Desk Inc.</h2>    
            </div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Portfolio</li>
            </ul>
        </nav>

    )
}

export default Nav;