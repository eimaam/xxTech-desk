import React, { useState } from "react";
import logo from "../Assets/images/techDesk_logo.png"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import App from "../App";
// import ReactSwitch from "react-switch";

function Nav(){
    const [navBg, setNavBg] = useState(true) //state for NavBar background change
// Change NavBar background color on scroll
    const changeNavBg = () => {
        const scrollSize = window.scrollY;
        if(scrollSize >= 90){
            setNavBg(true)
        }else{
            setNavBg(false)
        }
    }
    window.addEventListener("scroll", changeNavBg);
// Function end

// Mobile Navigation setup
    const body = document.getElementById('container');
    function showHideNav(){
        const hamburger = document.getElementById("hamburger") 
        const mNav = document.getElementById("mNav");
        const closeNav = document.getElementById("closeNav");
        if(mNav.style.display != "block"){
            mNav.style.display = "block"
            closeNav.style.display = "block"
            hamburger.style.display = "none"
        }else{
            mNav.style.display = "none"
            closeNav.style.display = "none"
            hamburger.style.display = "block"
        }
    }
// Function end
    return(
        <>
        {/* <marquee behavior="scroll" direction="" scrollamount="15">Your Business/Brand needs an Online presence! &nbsp;&nbsp;&nbsp; Your Business needs an Online presence! &nbsp;&nbsp;&nbsp; Your Business needs an Online presence!</marquee> */}
        {/* Desktop
                    Nav Bar */}
        <nav className={navBg ? "nav active" : "nav"}>
            <div id="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div id="site-title">
                <h2>Tech Desk Inc.</h2>    
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><HashLink to="#services">Services</HashLink></li>
                    <li><Link to="/About">About us</Link></li>
                    <li><Link to="">Contact us</Link></li>
                    <li><Link to="">Portfolio</Link></li>
                </ul>
                {/* <ReactSwitch className="react-switch"/>   */}
                <div id="toggler">
                    <i class="fa-solid fa-bars" id="hamburger" onClick={showHideNav}></i>
                    <i class="fa-solid fa-xmark" id="closeNav" onClick={showHideNav}></i>
                </div>          
            </div>
        </nav>
        {/* Mobile
                    Nav Bar */}
        <div id="mNav">
                <div>
                    <img src={logo} alt="tech desk logo" id="mLogo" />
                </div>
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><HashLink to="#services">Services</HashLink></li>
                    <li><Link to="">About us</Link></li>
                    <li><Link to="">Contact us</Link></li>
                    <li><Link to="">Portfolio</Link></li>
                </ul>
                <p>support@techdesk.io</p>
        </div>
        </>
    )
}

export default Nav;