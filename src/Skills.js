import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./Skills.css');

function Skill(){
    return (
        <div>
        <div className="body">
        <Navbar/>
        <div className="PL">
            <h1>Programming Languages</h1>
            <div className="row1">
                <div className="lan">
                    <h3>Python</h3><br/>
                    <img src="./images/python.jpg" alt="Python Logo" className="img" />
                </div>
                <div className="lan">
                    <h3>Scala</h3><br/>
                    <img src="./images/scala.png" alt="Scala Logo" className="img" />
                </div>
                <div className="lan">
                    <h3>C</h3><br/>
                    <img src="./images/C.png" alt="C Logo" className="img" />
                </div>
                <div className="lan">
                    <h3>Java</h3><br/>
                    <img src="./images/java.png" alt="Java Logo" className="img" />
                </div>
                <div className="lan">
                    <h3>Javascript</h3><br/>
                    <img src="./images/JS.png" alt="JS Logo" className="img" />
                </div>
                <div className="lan">
                    <h3>SQL</h3><br/>
                    <img src="./images/SQL.png" alt="SQL Logo" className="img" />
                </div>
            </div><br/><br/>
            <h1>Web Development Tools</h1>
            <div className="row1">
              <div className="lan">
                  <h3>HTML</h3>
                  <img src="./images/html.png" alt="html Logo" className="img" />
              </div>
              <div className="lan">
                  <h3>CSS</h3>
                  <img src="./images/css.png" alt="css Logo" className="img" />
              </div>
              <div className="lan">
                  <h3>React</h3>
                  <img src="./images/React.png" alt="React Logo" className="img" />
              </div>
            </div>
            <br/><br/>
            <h1>Tools</h1>
            <div className="row1">
              <div className="lan">
                  <h3>Trello</h3>
                  <img src="./images/Trello.png" alt="Trello Logo" className="img" />
              </div>
              <div className="lan">
                  <h3>Ubuntu</h3>
                  <img src="./images/Ubuntu.png" alt="css Logo" className="img" />
              </div>
              <div className="lan">
                  <h3>PgAdmin</h3>
                  <img src="./images/pgadmin.png" alt="PgAdmin Logo" className="img" />
              </div>
              <div className="lan">
                  <h3>Shell Script</h3>
                  <img src="./images/shell.png" alt="Shell Script Logo" className="img" />
              </div>
              <div className="lan">
                  <h3>Microsoft Office</h3>
                  <img src="./images/office.png" alt="Microsoft Office Logo" className="img" />
              </div>
            </div>
        </div>
        </div>
        <section className="bottom" id="contactSection">
            <h1 className="contactheader">Contact</h1>
            <p className="contactdes">
                <span>Email: wchen83@buffalo.edu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>CellPhone: (917)-327-8334</span><br/><br></br>
                <span className="copyrights">&copy;Wei Chen 2023</span>
            </p>
        </section>
        </div>
        

    )
}

export default Skill;