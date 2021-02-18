import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./portfolioStyle.css"

// IMPORTING THUMBNAIL IMAGES
import virtualReality from "../components/thumbnails/grid/virtual-reality.jpg"

import covidAnimation from "../components/thumbnails/grid/covid-19.jpg"
import crashRecon from "../components/thumbnails/grid/crash-accuracy.jpg"
import digitalInjurySummary from "../components/thumbnails/grid/dis.jpg"
import nuclearReactor from "../components/thumbnails/grid/nuclear.png"

// MODALS
import VideoModal from "../components/PortfolioModals/VideoModal"

//JSON
import videoDataArr from "../components/json/dataVisualizationALL.json"

const DataVisualization = () => {
    
    // MODAL STATE
    const [ showVideoModal, setShowVideoModal] = useState(false) 
    const [ modalData, setModalData ] = useState()

    // SETTING MODAL DATA
    const covidModal = () => {
        setModalData(videoDataArr[0])
        openVideoModal()
    }

    const disModal = () => {
        setModalData(videoDataArr[1])
        openVideoModal()
    }

    const crashModal = () => {
        setModalData(videoDataArr[2])
        openVideoModal()
    }

    const xenergyModal = () => {
        setModalData(videoDataArr[3])
        openVideoModal()
    }

    const vrModal = () => {
        setModalData(videoDataArr[4])
        openVideoModal()
    }


    // Sets Modal to Open or Closed When About Clicked

    const openVideoModal = () => {
        console.log("read")

        document.body.style.overflow = 'hidden';
        document.getElementById("blurMe").style.filter='blur(8px)'
        document.getElementById("blurMe").style.transition='all 0.25s ease-in'

        setShowVideoModal(true)
    }
    const closeVideoModal = () => {
        console.log("read")

        document.body.style.overflow = 'auto';
        document.getElementById("blurMe").style.filter='blur(0px)'
        
        setShowVideoModal(false)
    }

    const Modal = ({showVideoModal, setShowVideoModal}) => {
        const content = showVideoModal && (
   
        
          <VideoModal 
            clickcb={closeVideoModal}
            modalHeadline={modalData.name}
            // modalThumb={modalData.thumb}
            modalLink={modalData.embedLink}
            modalDescription={modalData.description}
            alt={modalData.alt}
          />   

        )
        return createPortal(content, document.body)
    }

    return (
        <>
        <Modal
            showVideoModal={showVideoModal}
            transition="all 0.25s ease-in"
        >
            {/* setShowAbout={setShowAbout}> */}
        </Modal>
        <div className="darkPortfolioBackground">
            
            {/* DATA VISUALIZATION */}

            <div className="row">
                <div className="col">
                    <div className="categoryHeadline">Data Visualization</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioSingleRow">

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-md-3">
                        <div className="projectPlacement">
                            
                            <Link
                                onClick={covidModal}
                            >
                                <img 
                                    className="projectNewImage" 
                                    src={covidAnimation} 
                                    alt="Covid-19 Animation"
                                />
                                <div className="projectHeadline">Covid-19</div>
                            </Link>
                            
                        </div>

                        <div className="projectPlacement">
                            <Link onClick={crashModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={crashRecon}
                                    alt="Crash Reconstruction"
                                />
                                <div className="projectHeadline">Crash Reconstruction</div>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="col-md-3">

                        <div className="projectPlacement">
                            <Link onClick={disModal}>
                                <img 
                                        className="projectNewImage" 
                                        src={digitalInjurySummary}
                                        alt="Digital Injury Summary"
                                    />
                                <div className="projectHeadline">Digital Injury Summary</div>
                            </Link>
                        </div>

                        <div className="projectPlacement">
                            <Link onClick={xenergyModal}>
                                <img 
                                className="projectNewImage" 
                                src={nuclearReactor}
                                alt="Nuclear Reactor"
                                />
                                <div className="projectHeadline">Nuclear Physics</div>
                            </Link>
                        </div> 

                    </div>

                    {/* HERO PROJECT */}
                    <div className="col-md-6">
                        <div className="heroCodingProject">
                            {/* <div className="row portfolioHead"></div> */}
                            <Link onClick={vrModal}>
                                <img className="heroCodingImage" src={virtualReality} alt="Virtual Reality Litigation"/>
                            
                                <div className="projectHeroHeadline">Virtual Reality in the Courtroom
                                </div>
                            </Link>
                                
                        </div>
                    </div>
                    
                </div>
                
                {/* THIRD-ROW PROJECTS */}
                

                {/* <div className="row">

                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a href="https://hidden-refuge-28358.herokuapp.com/"><img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/budget.png" 
                                    alt="Budget App"
                                /></a>
                                <div className="projectHeadline">Budget App</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a href="https://github.com/AndyGreenhaw/snake-game"><img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/snakeGamePlaceholder.png" 
                                    alt="Snake Game"
                                /></a>
                                <div className="projectHeadline">Snake Game</div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a href="https://andygreenhaw.github.io/19-react-employee-directory/"><img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/theoffice.png" 
                                    alt="Employee Directory"
                                /></a>
                                <div className="projectHeadline">The Office Employee Directory</div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="projectPlacement">
                                <a href="https://andygreenhaw.github.io/03-JavaScript-Password-Generator/"><img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/password.png" 
                                    alt="Password Generator"
                                /></a>
                                <div className="projectHeadline">Password Generator </div>
                        </div> 
                    </div>
                </div> */}
            </div>
                        
        </div>
        </>
        
    );
}

export default DataVisualization;