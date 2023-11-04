import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./Skills.css');

function Skill(){
    return (
        <div>
        <Navbar/>
        <div className="overlay">
        <h1 className="ProgLan">Programming Languages</h1>
        <div className="body">
            <p className="python">
                Python Java Scala C Javascript HTML&CSS 
                <img src="./images/python.jpg" alt="Python Logo" className="custom-image" />
                <img src="./images/java.png" alt="Java Logo" className="java" />
                <img src="./images/scala.png" alt="Scala Logo" className="scala" />
                <img src="./images/C.png" alt="C Logo" className="C" />
                <img src="./images/JS.png" alt="C Logo" className="JS" />
                <img src="./images/htmlcss.png" alt="C Logo" className="htmlcss" />
            </p>
            <a className="line2">
                MIPS 
            </a>
            
        </div>
        <h1 className="Languages">Languages</h1>
        <p className="lang"> 
            Chinese English
        </p>
      </div>
        </div>

    )
}

export default Skill;