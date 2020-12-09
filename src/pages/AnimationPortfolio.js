import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import reactDom, { createPortal } from "react-dom";

import ProjectCard from '../components/ProjectCard/ProjectCard.js'

import animationProjects from '../components/json/animationALL.json'

const Portfolio = () => {
    
    const [ animationProjectsArr, setAnimationProjectArr] = useState([])

    useEffect(() => {
        loadContent();
        // Modal.setAppElement(document.getElementById("#modalDisplay"));
    })

    function loadContent() {
        setAnimationProjectArr(animationProjects)
    }

    console.log(animationProjectsArr)
    return (
        <div className="darkPortfolioBackground">
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Animation</h3>
                </div>
            </div>

            <div className="row">                
                {animationProjectsArr.map(project => (
                    <ProjectCard key={project._id} {...project}/>
                ))}
            </div>

            <div className="row">
            <div className="col">
                    <h3 className="categoryHeadline">More Coming Soon...</h3>
            </div>
            </div>

            <div className="row">
            <div className="col">
                <h4><center>I am in the process of organizing my best work, and will feature it here as soon as it's ready.</center></h4>
            </div>
            </div>
        </div>
        
    );
}

export default Portfolio;