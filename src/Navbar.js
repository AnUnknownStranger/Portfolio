import React from "react";
import { BrowserRouter as Router, Link, BrowserRouter, useMatch, useResolvedPath } from "react-router-dom";
import "./nav.css";



export default function Navbar(){
    const scrollToContact = () => {
      const contactSection = document.getElementById("contactSection");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }


    return ( 
    <nav className="navbar">
    <a href="#" className="CompSci">
        Computer Science
    </a>
    <ul>
      <li>
        <Link  className="Home"to="/">Home</Link>
      </li>
      <li>
        <Link  className="Experience" to="/Experience">Experiences </Link>
      </li>
      <li>
        <Link  className="Skills" to="/Skills">Skills</Link>
      </li>
      <li>
        <Link  className="Project"to="/Project">Projects</Link>
      </li>
      <li>
      <Link className="Contact"  onClick={scrollToContact}>Contacts</Link>
      </li>
    </ul>
   </nav>
    )
}


