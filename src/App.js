import React, {useState} from "react";
import { FormspreeProvider } from '@formspree/react'
import ParticlesBackground from "./components/ParticleBackgrounds/ParticleBackground"

import { 
  HashRouter as Router, 
  Route,
  Switch,
  Link,
  useLocation,
  withRouter
} from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Home from "./pages/Home";
import CodingPortfolio from "./pages/CodingPortfolio";
import DataVisualization from "./pages/DataVisualizationPortfolio";
import AnimationPortfolio from "./pages/AnimationPortfolio";
import VideoPortfolio from "./pages/VideoPortfolio";
import AboutAndy from "./pages/AboutAndy";

import "./style.css"

function App() {

  return(
  <>
    <Router>
    <nav className="nav-bar">
            <NavBar/>
          </nav>
      <div className="container-fluid" id="blurMe">
        <div className="containerFix">
          
          <div id="heroSection">
            <Home id="section1"/>
          </div>
          <div id="codingSection">
            {/* <div className="particleContainer">
              <ParticlesBackground/>
            </div> */}
            <CodingPortfolio id="section2"/>
            
          </div>
          <div id="dataVisualizationSection">
            <DataVisualization id="section3"/>
          </div>
          <div id="animationSection">
              <AnimationPortfolio id="section4"/>
          </div>
          <div id="videoSection">
              <VideoPortfolio id="section5"/>
          </div>
          
          <div id="aboutSection">
              <AboutAndy id="section6"/>
          </div>
        </div>
      </div>
      
    </Router>
    
  </>
  )
}

export default App;
