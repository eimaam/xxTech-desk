import React from "react";
import Card from "./card";
import dummy from "../Assets/images/Brainstorming session.png" 
import repairs from "../Assets/images/task.png"
import dataManagement from "../Assets/images/data-management.png"
import illustration from "../Assets/images/illustration.png"
import { Slide } from "react-awesome-reveal";

export default function CardSection(){
    return(
        <div id="services">
            <h2 id="test">OUR SERVICES:</h2>
            <div class="card-container">
                <Slide direction="left">
                    <Card 
                    image={dummy}
                    title="Web Design"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                    />
                </Slide>
                <Slide direction="right">
                    <Card 
                    image={dataManagement}
                    title="Data Management"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                    />
                </Slide>

                <Slide direction="left">
                    <Card 
                    image={illustration}
                    title="Graphic Design"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                    />
                </Slide>
                
                <Slide direction="right">
                    <Card 
                    image={repairs}
                    title="Tech Support &amp; Maintainance"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora "
                    />
                </Slide>
            </div>
        </div>

    )
}