import React from "react";
import headerImg from "../Assets/images/Web Developer_Isometric.svg"


function Header(){
    return (
        <header>
            <div className="hero">
                <h2>Affordable Web/I.T Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad sequi ut quas ullam, explicabo, animi similique excepturi sit accusamus impedit eum corporis rem. Deleniti ratione vitae iure.</p>
                <h3 className="tagline">Create.Deploy.Connect!</h3>
                <button>Hire US TODAY!</button> 
                &nbsp; <button>About us <i className="fa-solid fa-info"></i></button>
            </div>
            <div className="headerImage">
                <img src={headerImg} alt=""/>
            </div>  
        </header>
    )
}

export default Header;