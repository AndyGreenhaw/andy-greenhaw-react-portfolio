import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import reactDom, { createPortal } from "react-dom";

import ProjectCard from '../components/ProjectCard/ProjectCard.js'

import codingProjects from '../components/json/codingALL.json'

const Portfolio = () => {
    
    const [ codingProjectsArr, setCodingProjectArr] = useState([])

    useEffect(() => {
        loadContent();
        // Modal.setAppElement(document.getElementById("#modalDisplay"));
    })

    function loadContent() {
        setCodingProjectArr(codingProjects)
    }

    console.log(codingProjectsArr)
    return (
        <div className="darkPortfolioBackground">
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Full-Stack Web Development</h3>
                </div>
            </div>

            <div className="row">                
                {codingProjectsArr.map(project => (
                    <ProjectCard key={project._id} {...project}/>
                ))}
            </div>
        </div>
        
    );
}

export default Portfolio;