import React from "react";
import Card from "./card";
import dummy from "../Assets/images/Brainstorming session.png" 


export default function CardSection(){
    return(
        <div id="services">
            <h2>OUR SERVICES:</h2>
            <div class="card-container">
                <Card 
                image={dummy}
                title="Web Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad"
                />
                <Card 
                image={dummy}
                title="Web Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad"
                />
                <Card 
                image={dummy}
                title="Web Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad"
                />
                <Card 
                image={dummy}
                title="Web Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad"
                />
            </div>
        </div>

    )
}