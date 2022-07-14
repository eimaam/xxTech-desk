import React, { useState } from "react";
import logo from "../Assets/images/favicon.png"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import ReactSwitch from "react-switch";

function Nav(){
    const [navBg, setNavBg] = useState(true) //state for NavBar background change
    const [mode, setMode] = useState() //toggle dark/light mode State
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

    // Dark/Light Mode Toggle function
    const toggleMode = () => {
    //   if(mode == "light"){
    //       setMode("dark")
    //   }else{
    //       setMode("light")
    //   }
    this.state
    console.log("hello")
  }
    return(
        <nav className={navBg ? "nav active" : "nav"}>
            <div id="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div id="site-title">
                <h2>Tech Desk Inc.</h2>    
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><HashLink to="#services">Services</HashLink></li>
                <li><Link to="">About us</Link></li>
                <li><Link to="">Contact us</Link></li>
                <li><Link to="">Portfolio</Link></li>
            </ul>
            <ReactSwitch onChange={toggleMode}/>
            
            
        </nav>

    )
}

export default Nav;