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
                                                        
                                                        <p> I am a full-stack developer with an extensive background in data visualization and strategic communication. I’ve worked on the front-end content development side of projects for the U.S. Air Force, SOCOM, the Defense Intelligence Agency and National Defense University. I've also developed digital presentations for some of the top attorneys in the country on complex cases spanning almost every type of catastrophic injury and car crash you can imagine.</p>
                                                                                                                
                                                        <p> I completed my certification in Full Stack Development through an extensive intensive University of Denver coding bootcamp, and I am now proficient in all the major computing languages, including React, Mongo, JavaScript, and many more outlines throughout my portfolio. My bachelor’s degree in journalism and strategic communications also provided the foundation through which I've mastered nearly every form of content creation, and I am excited about my new career trajectory in full-stack development because every language augments my front-end content development skills and capabiities. </p>
                                                                
                                                        <p> If you are looking for a junior developer with professional experience who learns quickly and is dedicated to every assignment, send me a message and I will send you my resume so you can learn more! </p>
                                                
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