import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import reactDom, { createPortal } from "react-dom";

import ProjectCard from '../components/ProjectCard/ProjectCard.js'

import videoProjects from '../components/json/videoALL.json'

const Portfolio = () => {
    
    const [ videoProjectsArr, setVideoProjectArr] = useState([])

    useEffect(() => {
        loadContent();
        // Modal.setAppElement(document.getElementById("#modalDisplay"));
    })

    function loadContent() {
        setVideoProjectArr(videoProjects)
    }

    console.log(videoProjectsArr)
    return (
        <div className="darkPortfolioBackground">
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Video Production</h3>
                </div>
            </div>

            <div className="row">                
                {videoProjectsArr.map(project => (
                    <ProjectCard key={project._id} {...project}/>
                ))}
            </div>

            
        </div>
        
    );
}

export default Portfolio;