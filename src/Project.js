import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./Project.css');


function Project(){
    return (
        <div>
            <section className="project">
              <Navbar/>
              <div className="ProjectHeader">
                    <h1>Projects</h1>
            </div>
            <div className="R1">
                <div className="col1">
                  <p>
                      <h3>Self-Checkout Machine</h3>
                      <span className="large">Scala</span><br/>
                      <ul class="bullet">
                            <li>emphasizing polymorphism and inheritance for item and cart management</li>
                            <li>Ensured an interactive and user-friendly UI for a seamless checkout experience</li>
                            <li>Opt for state changes over conventional conditionals in your code</li>
                        </ul>
                        <img src="./images/Checkout.png" alt="Checkout Machine" className="PJimg" />
                  </p>
                </div>
                <div className="col2">
                  <p>
                      <h3>Enemy AI</h3>
                      <span className="large">Scala</span><br/>
                      <ul class="bullet">
                            <li>Create a game featuring enemy AI movement simulation, employing Breadth-First Search (BFS) for optimal pathfinding</li>
                        </ul>
                        <img src="./images/enemyai.png" alt="Enemy AI Game" className="PJimg1" />
                  </p>
                </div>
                <div className="col3">
                  <p>
                      <h3>University Application Diversity</h3>
                      <span className="small">Javascript, HTML, CSS, PostgreSQL</span><br/>
                      <ul class="bullet">
                            <li>Analyzed and decomposed large data sets of the University Applications into BCNF forms.</li>
                            <li>Collaborated with team members to develop a website relying on PostgreSQL as the backend and generating tables displaying necessary information from the user’s perspective.</li>
                        </ul>
                        <img src="./images/Application.png" alt="University Application" className="PJimg" />
                  </p>
                </div>
            </div>
            <div className="R1">
                <div className="col1">
                  <p>
                      <h3>Web Page of Vaccination Data Graph </h3>
                      <span className="small">Python, Javascript, HTML</span><br/>
                      <ul class="bullet">
                            <li>A web page that runs with a Bottle web server and uses AJAX to send the necessary data to the webpage while displaying the data as a graph. </li>
                            <li>Implemented AJAX for dynamic data updates and a responsive user interface</li>
                        </ul>
                        <img src="./images/Vaccine.png" alt="Vaccine" className="PJvac" />
                  </p>
                </div>
                <div className="col3">
                  <p>
                      <h3>Personal Portfolio</h3>
                      <span className="small">Javascript, React, HTML, CSS</span><br/>
                      <ul class="bullet">
                            <li>Developed an engaging and creative personal portfolio website featuring an interactive navigation bar for enhanced user experience.</li>
                            <li>Carefully curated content and design elements to effectively showcase my technical skills and individual projects.</li>
                        </ul>
                        <img src="./images/Portfolio.png" alt="Personal Portfolio" className="PJimg" />
                  </p>
                </div>
            </div>
            </section>
                    <section className="bottom" id="contactSection">
            <h1 className="contactheader">Contact</h1>
            <p className="contactdes">
                <span>Email: wchen83@buffalo.edu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>CellPhone: (917)-327-8334</span><br/><br></br>
                <span className="copyrights">&copy;Wei Chen 2023</span>
            </p>
        </section>
        </div>
    );
}

export default Project;