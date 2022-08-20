import React from "react";

export default function Footer(){
    return (
        <>
        <footer>
            <div>
                <h4>Tech Desk Inc.</h4>
                <p>Website Design</p>
                <p>Web Management</p>
                <p>Graphic Design</p>
                <p>Content Mangement System</p>
                <p>Computer Repairs/Sales</p>
            </div>
            <div>
                <h4>Quick Links:</h4>
                <ul>
                    <ol>Request samples</ol>
                    <ol>Book a Presentation!</ol>
                    <ol>About</ol>
                    <ol>Contact Us</ol>
                </ul>
            </div>
            <div>
                <h4>Reach Us:</h4>
                <p>No. xxx Wuse Zone 2, Abuja, Nigeria.</p>
            </div>
        </footer>
        <div className="endNote">
            <div>
                <p>&copy; 2022 Tech Desk Inc. All rights reserved.</p>
            </div>
            <div>
                <p>Privacy Policy. Terms and Conditions. Documentation.</p>
            </div>
            {/* Footer icons */}
            <div className="endNote-icons">
                <i className="fa-brands fa-twitter fa-2xl"></i>
                <i className="fa-brands fa-facebook fa-2xl"></i>
                <i className="fa-brands fa-linkedin fa-2xl"></i>
                <i className="fa-brands fa-instagram fa-2xl"></i>
            </div>
        </div>
        </>
    )
}