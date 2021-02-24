import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./portfolioStyle.css";
import codingProjectsArr from "../components/json/codingALL.json"

import ParticlesBackground from "../components/ParticleBackgrounds/ParticleBackground"

// THUMBNAILS
import pandemicTrackerImage from "../components/thumbnails/grid/pandemicTrackerWebSize1.png"
import weatherAppImage from "../components/thumbnails/grid/weatherdashboard.png"
import dayPlannerImage from "../components/thumbnails/grid/dayplanner.png"
import notetakerAppImage from "../components/thumbnails/grid/notetaker.png"
import bookshelfAppImage from "../components/thumbnails/grid/bookshelf.png"
import budgetAppImage from "../components/thumbnails/grid/budget.png"
import snakeAppImage from "../components/thumbnails/grid/snakeGamePlaceholder.png"
import theOfficeAppImage from "../components/thumbnails/grid/theoffice.png"
import passwordAppImage from "../components/thumbnails/grid/password.png"

// GIF DISPLAY
import pandemicGIF from "../components/PortfolioModals/assets/pandemicTrackerHeroGIF.gif"
import weatherGIF from "../components/PortfolioModals/assets/weatherThumb.png"
import bloggerGIF from "../components/PortfolioModals/assets/noteTakerGIF.gif"
import plannerGIF from "../components/PortfolioModals/assets/plannerGIF.gif"
import bookshelfGIF from "../components/PortfolioModals/assets/bookshelfGIF.gif"
import budgetGIF from "../components/PortfolioModals/assets/budgetapp.png"
import officeGIF from "../components/PortfolioModals/assets/theOfficeGIF.gif"
import passwordGIF from "../components/PortfolioModals/assets/passwordThumb.png"

// MODALS
import CodingModal from "../components/PortfolioModals/CodingModal"
import Particles from "react-tsparticles";

const Portfolio = (props) => {

    // MODAL STATE
    const [ showCodingModal, setShowCodingModal] = useState(false) 
    const [ displayImage, setDisplayImage ] = useState()
    const [ modalData, setModalData ] = useState()

    
    // SETTING MODAL DATA
    const pandemicModal = () => {
        setModalData(codingProjectsArr[0])
        setDisplayImage(pandemicGIF)
        openCodingModal()
    }

    const weatherModal = () => {
        setModalData(codingProjectsArr[1])
        setDisplayImage(weatherGIF)
        openCodingModal()
    }

    const bloggerApp = () => {
        setModalData(codingProjectsArr[2])
        setDisplayImage(bloggerGIF)
        openCodingModal()
    }

    const plannerApp = () => {
        setModalData(codingProjectsArr[3])
        setDisplayImage(plannerGIF)
        openCodingModal()
    }

    const bookshelfApp = () => {
        setModalData(codingProjectsArr[4])
        setDisplayImage(bookshelfGIF)
        openCodingModal()
    }

    const snakeApp = () => {
        setModalData(codingProjectsArr[5])
        setDisplayImage(budgetGIF)
        openCodingModal()
    }

    const budgetApp = () => {
        setModalData(codingProjectsArr[6])
        setDisplayImage(budgetGIF)
        openCodingModal()
    }

    const theOfficeApp = () => {
        setModalData(codingProjectsArr[7])
        setDisplayImage(officeGIF)
        openCodingModal()
    }

    const passwordApp = () => {
        setModalData(codingProjectsArr[8])
        setDisplayImage(passwordGIF)
        openCodingModal()
    }




    // Sets Modal to Open or Closed When About Clicked
    const openCodingModal = () => {
        console.log("read")

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
   
        
          <CodingModal 
            clickcb={closeCodingModal}
            modalHeadline={modalData.name}
            modalThumb={displayImage}
            modalLink={modalData.link}
            modalGitHub={modalData.github}
            modalDescription={modalData.description}
            alt={modalData.alt}
          />   

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

        
        <div className="darkPortfolioBackground">
            {/* <div className="particleContainer"> */}
            
            {/* </div> */}
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <div className="categoryHeadline">Programming</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioTopRow">

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-md-3">
                        <div className="projectPlacement projectSpacer">
                            <Link onClick={weatherModal}>
                                
                                    <img 
                                        className="projectNewImage" 
                                        
                                        src={weatherAppImage}
                                        alt="Weather API App"
                                        
                                    />
                                <div className="projectHeadline">Weather API App</div>
                            </Link>
                        </div>

                        <div className="projectPlacement">
                            
                            <Link onClick={plannerApp}>
                            
                                <img 
                                    className="projectNewImage" 
                                    
                                    src={dayPlannerImage}
                                    alt="Work Scheduler"
                                    
                                />
                                <div className="projectHeadline">Work Scheduler</div>
                            </Link>
                            
                        </div> 
                    </div>

                    {/* HERO PROJECT */}
                    <div className="col-md-6">                      
                    
                        <div className="heroCodingProject">
                            <Link onClick={pandemicModal}>
                                <img className="heroCodingImage buttonHover" src={pandemicTrackerImage}alt="Pandemic Tracker" />

                                <div className="projectHeroHeadline">Tracking Covid-19 Across the Globe</div>
                            </Link>                    
                            
                        </div>
                    </div>

                    <div className="col-md-3">

                        <div className="projectPlacement projectSpacer">
                            
                            <Link onClick={bloggerApp}>
                                <img 
                                    className="projectNewImage" 
                                    src={notetakerAppImage}
                                    alt="Blogger App"
                                    
                                />
                                <div className="projectHeadline">Blogger App</div>
                            </Link>
                        </div>

                        <div className="projectPlacement">
                            <Link onClick={bookshelfApp}>
                                <img 
                                    className="projectNewImage" 
                                    src={bookshelfAppImage}
                                    alt="BookSelf Social App"
                                    
                                />
                                <div className="projectHeadline">BookShelf Social App</div>
                            </Link>
                        </div> 

                    </div>
                </div>
                
                {/* THIRD-ROW PROJECTS */}
                

                <div className="row portfolioBottomRow">

                    <div className="col-md-3">
                        <div className="projectPlacement">
                            <Link onClick={budgetApp}>
                                <img 
                                        className="projectNewImage" 
                                        src={budgetAppImage}
                                        alt="Budget App"               
                                />
                                <div className="projectHeadline">Budget App</div>
                                </Link>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="projectPlacement">
                            <Link onClick={snakeApp}>
                                <img 
                                        className="projectNewImage" 
                                        src={snakeAppImage}
                                        alt="Snake Game"
                                        
                                />
                                <div className="projectHeadline">Snake Game</div>
                            </Link>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="projectPlacement">
                            <Link onClick={theOfficeApp}>
                                <img 
                                        className="projectNewImage" 
                                        src={theOfficeAppImage} 
                                        alt="Employee Directory"
                                        
                                />
                                <div className="projectHeadline">The Office Employee Directory</div>
                            </Link>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="projectPlacement">
                            <Link onClick={passwordApp}>
                                <img 
                                        className="projectNewImage" 
                                        src={passwordAppImage} 
                                        alt="Password Generator"
                                        
                                />
                                <div className="projectHeadline">Password Generator </div>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
        
    );
}

export default Portfolio;