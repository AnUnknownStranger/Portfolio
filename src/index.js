import React from 'react';
import App from './App';
import Skill from './Skills';
import ReactDOM from 'react-dom';
import Project from './Project';
import Experience from './Experience';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

ReactDOM.render(
    
    <Router>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/Skills' element={<Skill/>}></Route>
            <Route path='/Project' element={<Project/>}></Route>
            <Route path='/Experience' element={<Experience/>}></Route>
        </Routes>
    </Router>
    


,document.getElementById('root'));