import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ('./text.css');
import ('./header.css');

function App(){
    return (
    
    <div> 
        <section className="header">
          <p class="Name">Wei Chen</p>
          <button onClick={() => window.open('https://www.linkedin.com/in/wei-chen-38b084254/?trk=public-profile-join-page', '_blank')} className="Linkeldin">in</button>
        </section>
        <Navbar/>
        <section className="Educations">
            <h1 className="edu">Education</h1>
            <p className="edudes">
                University at Buffalo<br />
                <img src="./images/ub.png" alt="UBlogo" className="ublogoedu" /> <br/>
                Computer Science B.S.<br />
                Fall 2021-Fall 2024
            </p>
            <br/><br/>
            <h2>Courses Taken</h2>
            <div className="row2">
            <div className="c2">
                <p className="cse115">
                    <h3>CSE115</h3>
                    <span>Introduction To Computer Science I</span><br/><br/>
                    <span>"The fundamentals of computer science with an emphasis on applying programming skills to solve problems and increase human efficiency. Topics include variables, data types, expressions, control flow, functions, input/output, data storage, networking, security, selection, sorting, iteration and the use of aggregate data structures such as lists and more general collections"</span>
                </p>
            </div>
            <div className="c2">
                <p className="cse116">
                    <h3>CSE116</h3>
                    <span>Introduction To Computer Science II</span><br/><br/>
                    <span>"Emphasizes design decisions that affect the efficiency, expandability, and maintainability of code while analyzing the differences amongst a variety of approaches. Design decisions analyzed include choice of data structures and object-oriented techniques such as encapsulation, polymorphism, and inheritance. Additional topics include the use of recursion, multithreading, parallelism, hardware, graph and tree traversals, asymptotic analysis, divide and conquer, databases, testing, and multi-language integration"</span>
                </p>
            </div>
            <div className="c2">
                <p className="cse191">
                    <h3>CSE191</h3>
                    <span>Discrete Structure</span><br/><br/>
                    <span>"Foundational material for further studies in computer science. Topics include logic, proofs, sets, functions, relations, recursion, recurrence relations, mathematical induction, graphs, trees, basic counting theory, regular languages, and context free grammars."</span>
                </p>
            </div>
            </div>
            <div className="row2">
            <div className="c2">
                <p className="cse220">
                    <h3>CSE220</h3>
                    <span>System Programming</span><br/><br/>
                    <span>"Hardware/Software interfaces (e.g., data representation in memory), OS/application interfaces (e.g., syscalls), and an overview of a complete computer system, the hardware, operating system, compiler, and network."</span>
                </p>
            </div>
            <div className="c2">
                <p className="cse250">
                    <h3>CSE250</h3>
                    <span>Data Structure</span><br/><br/>
                    <span>"Provides a rigorous analysis of the design, implementation, and properties of advanced data structures. Topics include time-space analysis and tradeoffs in arrays, vectors, lists, stacks, queues, and heaps; tree and graph algorithms and traversals, hashing, sorting, and data structures on secondary storage. Surveys library implementations of basic data structures in a high-level language. Advanced data structure implementations are studied in detail. Illustrates the importance of choosing appropriate data structures when solving a problem by programming projects in a high-level language."</span>
                </p>
            </div>
            <div className="c2">
                <p className="cse331">
                    <h3>CSE331</h3>
                    <span>Algorithm & Complexity</span><br/><br/>
                    <span>"Introduces paradigms for designing algorithms and fundamental limitations to what algorithms can do. Covers basic algorithm design paradigms of greedy algorithms, divide and conquer algorithms and dynamic programming, as well as a selection of advanced algorithmic topics, such as randomized algorithms, algorithms for distributed systems and basic algorithms for machine learning. Topics related to limitations of algorithms include NP-completeness and undecidability. Coverage includes analyzing algorithms via proofs and programming assignments to implement algorithms."</span>
                </p>
            </div>
            </div>
            <div className="row3">
            <div className="c3">
                <p className="cse341">
                    <h3>CSE341</h3>
                    <span>Computer Organization</span><br/><br/>
                    <span>"Basic hardware and software issues of computer organization. Topics include computer abstractions and technology, performance evaluation, instruction set architecture, arithmetic logic unit design, advanced computer arithmetic, datapath and control unit design, pipelining, memory hierarchy, input-output."
                    </span>
                </p>
            </div>
            <div className="c3">
                <p className="cse365">
                    <h3>CSE365</h3>
                    <span>Computer Security</span><br/><br/>
                    <span>"Introductory concepts of computer security. The main foci of this course will be network, web security, and application security. Part of the work will be dedicated to ethical aspects of security, and online privacy. The course will be heavily hands-on, as opposed to theoretical teaching. Category: Software Systems."
                    </span>
                </p>
            </div>
            <div className="c3">
                <p className="cse460">
                    <h3>CSE460</h3>
                    <span>Data Models and Query Language</span><br/><br/>
                    <span>"focuses on the issues of data models and query languages that are relevant for building present-day database applications, covering both well-established and cutting-edge frameworks. It adopts the user's point of view, discussing primarily conceptual and foundational topics. Specific topics include: Entity-Relationship and relational database design, integrity constraints, graph and semi-structured data models, relational, graph and semi-structured query languages, DATALOG, recursion, path expressions, selected current topics."
                    </span>
                </p>
            </div>
            </div>
            <br/><br/>
            <h1>Awards</h1>
            <div className="Awd">
                <div className="awardinfo">
                    <div className="editAwd">
                        <h3 className="GWC">Grace W. Capen Award 2023</h3>
                        <p className="GWCdes">
                            <span>Issued by UB Women's Club · May 2023</span><br/><br/>
                            <span>"This award is made to a sophomore who has completed three semesters of full-time work at the University at Buffalo and scored a GPA of 3.95 or better"</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bottom" id="contactSection">
            <h1 className="contactheader">Contact</h1>
            <p className="contactdes">y
                <span>Email: wchen83@buffalo.edu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>CellPhone: (917)-327-8334</span><br/><br></br>
                <span className="copyrights">&copy;Wei Chen 2023</span>
            </p>
        </section>
    </div>)
}

export default App;