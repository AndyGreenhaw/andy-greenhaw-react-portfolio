import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import reactDom, { createPortal } from "react-dom";

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
    const [ show, setShow] = useState(false)

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

    const Modal = ({children, show, setShow}) => {

        const content = show && (
    
            <div className="youtube-container" id="modalDisplay">
                <div className="iframe-container">
                    <iframe title="demo"width="560" height="315" src="https://www.youtube.com/embed/EBv4r806oUs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
                
        )
        return createPortal(content, document.body)
    }

    function openModal(e) {
        e.preventDefault()
        setShow(true)
    }


    console.log(codingProjectsArr)
    return (
        <div className="darkPortfolioBackground">
            
            {/* DEMO REEL */}

            <div className="row">
                <div className="col-12">
                    <button className="demoButton" onClick={()=>setShow(true)}>
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <h3 className="project-class">Full-Stack Web Development</h3>
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
                    <h3 className="project-class">Animation</h3>
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
                    <h3 className="project-class">Video Production</h3>
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
                    <h3 className="project-class">Writing</h3>
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
                    <h3 className="project-class">More Coming Soon...</h3>
            </div>
            </div>

            <div className="row">
            <div className="col">
                <h4><center>I am in the process of organizing my best work, and will feature it here as soon as it's ready.</center></h4>
            </div>
            </div>
            <Modal
                show={show}
                setShow={setShow}
            >
                <div className="youtube-container" id="modalDisplay">
                    <div className="iframe-container">
                        <iframe title="demo"width="560" height="315" src="https://www.youtube.com/embed/EBv4r806oUs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </Modal>
        </div>
        
    );
}

export default Portfolio;