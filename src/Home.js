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
import info from "../src/Assets/images/alert-chat-bubble.png"

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
                <MiniSection 
                title="Launch a website in 7 days or less!"
                btnLabel="Hire us today!"
                />
                <Section 
                className="section-light"
                image={info}
                title="WHy own a website!?"
                content="According to Forbes Having a website is an opportunity to make a great first impression and give people comfort that you're a real business. With the invention of the Internet, life started a whole new journey with generation of computers getting better. It has grown to be the most preferrable way of communication.
                        With roughly over 60% of the global population using the internet, Websites play an important role as over 70% of small business today own a Website. A website does not only give an easy finding and up to date info about a brand/company but also increases your business' credibility."
    
                />

                <Question />
                
                <Section 
                className="section-light"
                image={rocket}
                title="Timely delivery!"
                content="Asides focusing on building efficient, user-friendly apps we are pretty mindful of time. Get your projects at the stipulated time!"
                showButton={true}
                buttonLabel="See reviews"
                />
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