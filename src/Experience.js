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
                <div className="container left">
                    <img src="./images/ub1.png"/>
                    <div className="Research">
                        <h3>Undergraduate Research(CTF Platform Development)</h3>
                        <small>August 2023-January 2024</small>
                        <ul class="bullet-list">
                            <li>Working as a group to develop a CTF platform to support multiple architectures such as RISC-V, Cortex-M, x86/x64, and Cortex-A within a nested docker environment.</li>
                            <li>Analyzing MySQL databases and assisting in web development.</li>
                        </ul>
                        <span class="left-arrow"></span>
                    </div>
                </div>
                <div className="container right">
                    <img src="./images/ub1.png"/>
                    <div className="UTA">
                        <h3>Undergraduate Teaching Assistant(Algorithm and Complexity)</h3>
                        <small>August 2023-Present</small>
                        <ul class="bullet-list">
                            <li>Conducted office hours, providing personalized support and guidance to students on course material and assignments.</li>
                            <li>Assessed and graded homework submissions, delivering constructive feedback to enhance student comprehension.</li>
                            <li>Proficiently addressed questions, facilitating a deeper understanding of algorithmic concepts and problem-solving techniques.</li>
                        </ul>
                        <span class="right-arrow"></span>
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
    );
}

export default Experience;