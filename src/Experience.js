import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./Experience.css');

function Experience(){
    return (
        <div>
            <Navbar/>
            <div className="Experiences">
                            <h1>Experiences</h1>
            </div>
            <div className="timeline">
                <ul>
                    <li>
                        <div className="UTA">
                            <h3>Undergraduate Teaching Assistant(Algorithm and Complexity) August 2023-present</h3>
                            <span>-Conducted office hours, providing personalized support and guidance to students on course material and assignments.</span><br/>
                            <span>-Assessed and graded homework submissions, delivering constructive feedback to enhance student comprehension.</span><br/>
                            <span>-Proficiently addressed questions, facilitating a deeper understanding of algorithmic concepts and problem-solving techniques.</span>
                        </div>
                        <div className="Research">
                            <h3>Undergraduate Research(CTF Platform Development) August 2023-present</h3>
                            <span>Working as a group to develop a CTF platform to support IoT architecture and defensive challenges.</span><br/>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;