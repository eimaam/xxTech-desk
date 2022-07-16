import React from "react";
import Header from "./components/header";
import Section from "./components/details";
import MiniSection from "./components/section";
import Question from "./components/miniSection(questions)";
import CardSection from "./components/cardSection";
import Footer from "./components/footer";
import FixedContactButton from "./components/fixedContactButton";


// Images & gifs
import team from "../src/Assets/images/Brainstorming session.png" 
import rocket from "../src/Assets/images/Rocket.gif"
import design from "../src/Assets/images/hobby, design _ paint, painting, art, graphic design, activity, leisure@2x.png"
import fastMessaging from "../src/Assets/images/fast messaging.png"

function Home(){
    return (
        <>
            <Header />
            <div className="main" id="main">
                <FixedContactButton />
                <Section
                className="section-light" 
                image = {team}
                title = "Certified Team of Engineers"
                content = "Our Certified Team of Engineers are always ready to work hand-in-hand as always to make sure your job gets delivered!"
                showButton = {true}
                ImageFirst = {true}
                buttonLabel="Check the Team"
                />
                <MiniSection />
                <Section 
                className="section-light"
                image={rocket}
                title="Timely delivery!"
                content="Asides focusing on building efficient, user-friendly apps we are pretty mindful of time. Get your projects at the stipulated time!"
                showButton={true}
                buttonLabel="See reviews"
                />
                <Question />
                <Section
                className="section-light" 
                image = {fastMessaging}
                title = "24/7 Customer Support"
                content = "With our automated customer support system and fine-tuned customer care representatives, we are here to always serve you on time."
                showButton = {true}
                ImageFirst = {true}
                buttonLabel="Contact us"
                />
            {/* Cards - Our Services*/}
                <CardSection />
                <Section 
                    className="section-light"
                    image={design}
                    title="We design just what's best for you!"
                    content="Online Shopping Website? Real Estate? School Management?
                            You make the choice, we bring it to life at its best!"    
                />
            
                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}


export default Home;