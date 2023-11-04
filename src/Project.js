import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./Project.css');


function Project(){
    return (
        <div>
            <Navbar/>
            <div className="projover">
                <h1 className="Projects">Projects</h1>
                <p className="projdes">
                    <span>Self-Checkout Machine,Scala</span><br/>
                    <span>-A self checkout machine that uses Polymorphism and Inheritance to store each item and user’s cart.</span><br/>
                    <span>-Using state changes for condition</span><br/><br/>
                    <span>Genetic Algorithm, Scala</span><br/>
                    <span>-A custom genetic algorithm that simulates survival of fitness where only the animal with best genes(random generic decimals) survives and passes down offspring. Mutations were also simulated to produce an effect within the population</span><br/><br/>
                    <span>Enemy AI, Scala</span><br/>
                    <span>-A game that simulates the movement of the enemy AI where BFS is used to find the shortest path.</span><br/><br/>
                    <span>Dynamic Memory Allocator, C</span><br/>
                    <span>-A dynamic memory pool used for allocating memory and does a simple replacement for malloc, calloc, realloc, and free</span><br/><br/>
                    <span>Data Joins, scala</span><br/>
                    <span>-Using relative information between data sets to join the information together into one rich data set while avoiding a quadratic runtime. </span><br/><br/>
                    <span>Web Page of Vaccination Data Graph, Python, Javascript, and HTML</span><br/>
                    <span>-Web page that runs with Bottle web server and using AJAX to send the necessary data upon the webpage</span><br/>
                    <span>-Graphs were done with plot.ly</span><br/><br/>
                    <span>Personal Portfolio javascript, React, HTML, CSS</span><br/>
                    <span>-Using HTML, CSS, javascript, and react.js to create a personal portfolio website</span>
        
                </p>
            </div>
        </div>
    );
}

export default Project;