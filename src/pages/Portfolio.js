import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import reactDom, { createPortal } from "react-dom";

import ProjectCard from '../components/ProjectCard/ProjectCard.js'

import codingProjects from '../components/json/codingProjects.json'
import animationProjects from '../components/json/animationProjects.json'
import videoProjects from '../components/json/videoProjects.json'
import writingProjects from '../components/json/writingProjects.json'

const Portfolio = () => {
    
    const [ codingProjectsArr, setCodingProjectArr] = useState([])
    const [ animationProjectsArr, setAnimationProjectsArr] = useState([])
    const [ videoProjectsArr, setVideoProjectsArr] = useState([])
    const [ writingProjectsArr, setWritingProjectsArr] = useState([])

    useEffect(() => {
        loadContent();
        // Modal.setAppElement(document.getElementById("#modalDisplay"));
    })

    function loadContent() {
        setCodingProjectArr(codingProjects)
        setAnimationProjectsArr(animationProjects)
        setVideoProjectsArr(videoProjects)
        setWritingProjectsArr(writingProjects)
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

            {/* ANIMATION */}

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

            {/* VIDEO EDITING */}

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
            
            {/* WRITING  */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Writing</h3>
                </div>
            </div>

            <div className="row">
                {writingProjectsArr.map(project=> (
                    <ProjectCard key={project._id} {...project}>
                    </ProjectCard>
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