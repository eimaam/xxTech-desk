import React from 'react'
import info from "../src/Assets/images/chat-information.png"

export default function About() {
  return (
    <header>
            <div>
                <h2>About us:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad sequi ut quas ullam, explicabo, animi similique excepturi sit accusamus impedit eum corporis rem. Deleniti ratione vitae iure.</p>
                <h3 className="tagline">Create.Deploy.Connect!</h3> 
            </div>
            <img src={info} alt="question-bubble"/>  
        </header>
  )
}
