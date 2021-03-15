import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./portfolioStyle.css"
import profilePic from "../components/styleimages/profilePic500x500.png"

// ICONS
import {FaGithubSquare, FaLinkedin,FaTwitterSquare} from "react-icons/fa"

const AboutAndy = () => {

        return(
                <>
                        <div className="row">
                                <div className="col">
                                        <div className="categoryHeadline">About Andy</div>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-12">
                                        <div className="aboutOutsideArea">
                                                <div className="aboutBox">
                                                        <img className="profilePic" src={profilePic} />
                                                        
                                                        <p>I am a full-stack developer with an extensive background in data visualization and strategic communication. I completed my certification in full-stack development through an intensive and comprehensive University of Denver coding boot camp and am proficient in most major computing languages, including React, Mongo, JavaScript, as well as many others showcased throughout my portfolio. I am excited about my new career trajectory in full-stack development because every programming language augments and complements my frontend content development skills and digital capabilities.</p>
                                                                                                                
                                                        <p>My bachelor’s degree in journalism and strategic communication from The University of Kansas provides the solid foundation for nearly every form of content creation I have mastered throughout my career.</p>
                                                                
                                                        <p>I have worked on frontend content development for projects of the U.S. Air Force, the U.S. Special Operations Command, the Defense Intelligence Agency and National Defense University. I have also developed digital presentations for some of the top attorneys in the country on complex cases spanning almost every type of catastrophic injury and crash reconstruction.</p>

                                                        <p>If you are looking for a junior developer with professional experience who learns quickly and is dedicated to every assignment, send me a message and I will provide you with my resume so you can learn more.</p>
                                                
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-12">
                                        <div className="footer">
                                                <a href="https://github.com/AndyGreenhaw" target="_blank" className="reactIconSpacing" ><FaGithubSquare className="reactIcon" size={60}/></a> 
                                                <a href="https://www.linkedin.com/in/andygreenhaw/" target="_blank" className="reactIconSpacing" ><FaLinkedin className="reactIcon" size={60}/></a>
                                                <a href="https://twitter.com/AndyGreenhaw" target="_blank" className="reactIconSpacing" ><FaTwitterSquare className="reactIcon" size={60}/></a> 
                                                {/* {FaGithubSquare}
                                                {FaLinkedin}
                                                {FaTwitterSquare} */}
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default AboutAndy;