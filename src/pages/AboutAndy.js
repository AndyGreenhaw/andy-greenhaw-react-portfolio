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
                                        <div className="aboutBox">
                                                <img className="profilePic" src={profilePic}></img>
                                                
                                                <p className="bioSpacing">I’m a programmer with more than 12 years of experience working on the digital marketing side of content development. I recently completed my certification in Full Stack Development at the University of Denver, and I'm proficient in all major computing languages, including JavaScript, React, Mongo, and much more.</p>

                                                <p>While I’m somewhat new to the profession of coding, I’ve worked on digital projects for the U.S. Air Force, Special Forces, the Defense Intelligence Agency, National Defense University, and some of the top attorneys in the country. I’m highly proficient in SEO, Adwords, content development, animation, video editing and I have experience building and managing content for nearly every marketing strategy you can imagine..</p>

                                                <p>I decided to pursue a career in coding to build on all these skills and to incorporate the ability to deliver them in the form of any website or app. I’ve developed API websites for weather forecast and Covid-19 tracking apps, I created a social media website with the ability to create a profile and interact with others, and I’m currently developing a few games to hone my skills in user interactivity. If you’re looking for a junior developer with professional experience who learns quickly and is dedicated to every job, send me a message and I’ll send you my resume so you can learn more.</p>
                                        
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