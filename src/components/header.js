import React from "react";
import headerImg from "../Assets/images/Web Developer_Isometric.svg"
import { Slide } from "react-awesome-reveal"


function Header(){
    return (
        <header>
            <Slide direction="left">
            <div className="hero">
                <h2>Affordable Web/I.T Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad sequi ut quas ullam, explicabo, animi similique excepturi sit accusamus impedit eum corporis rem. Deleniti ratione vitae iure.</p>
                <h3 className="tagline">Create.Deploy.Connect!</h3>
                <button>Hire US TODAY!</button> 
                &nbsp; <button>About us <i className="fa-solid fa-info"></i></button>
            </div>
            </Slide>

            <Slide direction="right">
            <img src={headerImg} alt="office"/>  
            </Slide>
        </header>
    )
}

export default Header;