import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./nav.css";



export default function Navbar(){

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
        <Link  className="Experience" to="/Experience">Experience </Link>
        <div class="dropdown">
            <ul>
            </ul>
        </div>
      </li>
      <li>
        <Link  className="Skills" to="/Skills">Skills</Link>
      </li>
      <li>
        <Link  className="Project"to="/Project">Project</Link>
      </li>
      <li>
        <Link href="#" className="Contact" to="/Contact">Contact</Link>
      </li>
    </ul>
   </nav>
    )
}