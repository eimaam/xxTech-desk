import React from "react";
import Card from "./card";
import dummy from "../Assets/images/Brainstorming session.png" 
import repairs from "../Assets/images/task.png"
import dataManagement from "../Assets/images/data-management.png"
import illustration from "../Assets/images/illustration.png"

export default function CardSection(){
    return(
        <div id="services">
            <h2 id="test">OUR SERVICES:</h2>
            <div class="card-container">
                <Card 
                image={dummy}
                title="Web Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                />
                <Card 
                image={dataManagement}
                title="Data Management"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                />
                <Card 
                image={illustration}
                title="Graphic Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                />
                <Card 
                image={repairs}
                title="Tech Support &amp; Maintainance"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                />
            </div>
        </div>

    )
}