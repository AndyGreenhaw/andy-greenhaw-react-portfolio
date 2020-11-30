import React from "react";

import ProjectCard from '../ProjectCard/ProjectCard.js'

import codingProjects from '../json/codingProjects.json'
import animationProjects from '../json/animationProjects.json'
import videoProjects from '../json/videoProjects.json'
import writingProjects from '../json/writingProjects.json'

class Portfolio extends React.Component {
    
    state = {
        codingProjectsArr: codingProjects,
        animationProjectsArr: animationProjects,
        videoProjectsArr: videoProjects,
        writingProjectsArr: writingProjects
    }

    render(){
        return (
            <div>
                
                {/* DEMO REEL */}

                <div className="row">
                    <div className="col-12">
                        <div className="youtube-container">
                            <div className="iframe-container">
                                <iframe title="demo"width="560" height="315" src="https://www.youtube.com/embed/EBv4r806oUs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FULL-STACK DEVELOPMENT */}

                <div className="row">
                    <div className="col">
                        <h3 className="project-class">Full-Stack Web Development</h3>
                    </div>
                </div>

                <div className="row">
                    {this.state.codingProjectsArr.map(project => (
                        <ProjectCard key={project.id} {...project}/>
                    ))}
                </div>

                {/* ANIMATION */}

                <div className="row">
                    <div className="col">
                        <h3 className="project-class">Animation</h3>
                    </div>
                </div>

                <div className="row">
                    {this.state.animationProjectsArr.map(project => (
                        <ProjectCard key={project.id} {...project}/>
                    ))}
                </div>

                {/* VIDEO EDITING */}

                <div className="row">
                    <div className="col">
                        <h3 className="project-class">Video Production</h3>
                    </div>
                </div>

                <div className="row">
                    {this.state.videoProjectsArr.map(project => (
                        <ProjectCard key={project.id} {...project}/>
                    ))}
                </div>
                
                {/* WRITING  */}

                <div className="row">
                    <div className="col">
                        <h3 className="project-class">Writing</h3>
                    </div>
                </div>

                <div className="row">

                    {this.state.writingProjectsArr.map(project=> (
                        <ProjectCard key={project.id} {...project}/>
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
            </div>
        );
    }
}

export default Portfolio;