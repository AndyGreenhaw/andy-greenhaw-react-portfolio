import React, { useState, StyledModal } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./portfolioStyle.css";

// THUMBNAILS
import pandemicTracker from "../components/thumbnails/grid/pandemicTrackerWebSize1.png"

import weatherApp from "../components/thumbnails/grid/weatherdashboard.png"
import dayPlanner from "../components/thumbnails/grid/dayplanner.png"
import notetakerApp from "../components/thumbnails/grid/notetaker.png"
import bookshelfApp from "../components/thumbnails/grid/bookshelf.png"

import budgetApp from "../components/thumbnails/grid/budget.png"
import snakeApp from "../components/thumbnails/grid/snakeGamePlaceholder.png"
import theOfficeApp from "../components/thumbnails/grid/theoffice.png"
import passwordApp from "../components/thumbnails/grid/password.png"


import CodingModal from "../components/PortfolioModals/CodingModal"

const Portfolio = (props) => {

    // MODAL STATE
    const [ showCodingModal, setShowCodingModal] = useState(false) 

    // Sets Modal to Open or Closed When About Clicked
    const openCodingModal = () => {
        console.log("read")

        // document.getElementById('blurMe').addClass('.blur')

        document.body.style.overflow = 'hidden';
        document.getElementById("blurMe").style.filter='blur(8px)'
        document.getElementById("blurMe").style.transition='all 0.25s ease-in'

        setShowCodingModal(true)
    }
    const closeCodingModal = () => {
        console.log("read")

        document.body.style.overflow = 'auto';
        document.getElementById("blurMe").style.filter='blur(0px)'
        
        setShowCodingModal(false)
    }

    const Modal = ({showCodingModal, setShowCodingModal}) => {
        const content = showCodingModal && (
   
        // <StyledModal
        //     // id={this.props.id}
        //     // className={`wrapper ${this.props.class}`}
        //     role="dialog"
        //     // size={this.props.size}
        //     onTransitionEnd={this.transitionEnd}
        //     fadeType={this.state.fadeType}
        // >
          <CodingModal 
            clickcb={closeCodingModal}
          />   
        // {/* </StyledModal> */}


        )
        return createPortal(content, document.body)
    }
    
    return (
        <>
        
        <Modal
            showCodingModal={showCodingModal}
            transition="all 0.25s ease-in"
        >
            {/* setShowAbout={setShowAbout}> */}
        </Modal>
        <div className="darkPortfolioBackground" id="blurMe">
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <div className="categoryHeadline">Programming</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioTopRow">

                    {/* HERO PROJECT */}
                    <div className="col-md-6">
                        {/* <div className="heroCodingProject">
                            <div className="heroCodingCopy">I am proficient in a long list of coding languages, including React, JavaScript, mySQL, MongoDB, Express, Node JS, Handlebars, Ajax, Axios, CSS, HTML, and I'm always learning more. Check out some of my projects below and see some of my capabilities for yourself.
                            </div>
                        </div> */}
                        <div className="heroCodingProject">
                            <Link onClick={openCodingModal}>
                                <img className="heroCodingImage buttonHover" src={pandemicTracker}alt="Pandemic Tracker" />

                                <div className="projectHeroHeadline">Pandemic Tracker</div>
                            </Link>
                            
                            {/* <div className="heroCodingCopy">The Pandemic Tracker displays Covid-19 statistics across the glove. Try it for yourself and see what areas the world are experiencing the biggest impact from the pandemic. The Pandemic Tracker displays Covid-19 statistics across the glove. Try it for yourself and see what areas the world are experiencing the biggest impact from the pandemic. The Pandemic Tracker displays Covid-19 statistics across the glove. Try it for yourself and see what areas the world are experiencing the biggest impact from the pandemic.</div> */}
                            
                        </div>
                    </div>

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-md-3">
                        <div className="projectPlacement">
                            <Link onClick={openCodingModal}>
                                
                                    <img 
                                        className="projectNewImage" 
                                        
                                        src={weatherApp}
                                        alt="Weather API App"
                                        
                                    />
                                <div className="projectHeadline">Weather API App</div>
                            </Link>
                        </div>

                        <div className="projectPlacement">
                            
                            <a target="_blank" href="https://andygreenhaw.github.io/05-Third-Party-APIs-Work-Day-Scheduler/"><img 
                                className="projectNewImage" 
                                
                                src={dayPlanner}
                                alt="Work Scheduler"
                                
                            /></a>
                            <div className="projectHeadline">Work Scheduler</div>
                        </div> 
                    </div>

                    <div className="col-md-3">

                        <div className="projectPlacement">
                            
                            <a target="_blank" href="https://shielded-savannah-98558.herokuapp.com/notes"><img 
                                className="projectNewImage" 
                                src={notetakerApp}
                                alt="Blogger App"
                                
                            /></a>
                            <div className="projectHeadline">Blogger App</div>
                        </div>

                        <div className="projectPlacement">
                            <a target="_blank" href="https://intense-earth-81966.herokuapp.com/"><img 
                                className="projectNewImage" 
                                src={bookshelfApp}
                                alt="BookSelf Social App"
                                
                            /></a>
                            <div className="projectHeadline">BookShelf Social App</div>
                        </div> 

                    </div>
                </div>
                
                {/* THIRD-ROW PROJECTS */}
                

                <div className="row portfolioBottomRow">

                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a target="_blank" href="https://hidden-refuge-28358.herokuapp.com/"><img 
                                    className="projectNewImage" 
                                    src={budgetApp}
                                    alt="Budget App"
                                    
                                /></a>
                                <div className="projectHeadline">Budget App</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a target="_blank" href="https://github.com/AndyGreenhaw/snake-game"><img 
                                    className="projectNewImage" 
                                    src={snakeApp}
                                    alt="Snake Game"
                                    
                                /></a>
                                <div className="projectHeadline">Snake Game</div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a target="_blank"  href="https://andygreenhaw.github.io/19-react-employee-directory/"><img 
                                    className="projectNewImage" 
                                    src={theOfficeApp} 
                                    alt="Employee Directory"
                                    
                                /></a>
                                <div className="projectHeadline">The Office Employee Directory</div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a target="_blank" href="https://andygreenhaw.github.io/03-JavaScript-Password-Generator/"><img 
                                    className="projectNewImage" 
                                    src={passwordApp} 
                                    alt="Password Generator"
                                    
                                /></a>
                                <div className="projectHeadline">Password Generator </div>
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
        </>
        
    );
}

export default Portfolio;