import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./Contact.css');

function Contact(){
    return (
        <div>
            <Navbar/>
            <div className="Skillover">
                <h1 className="Con">Contact</h1>
                <p className="Email">Email:</p>
                <a href='mailto:wei1070580217@Gmail.com' className="email1">wei1070580217@Gmail.com</a>
                <a href='mailto:wchen83@buffalo.edu' className="email2">wchen83@buffalo.edu</a>
            </div>
        </div>
    );
}

export default Contact;