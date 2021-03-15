 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./portfolioStyle.css"

// IMPORTING THUMBNAIL IMAGES
import syntropyDemo from "../components/thumbnails/grid/syntropydemo.png"

import vrVisionImpairment from "../components/thumbnails/grid/visionimpairment.jpg"
import uclaVideo from "../components/thumbnails/grid/ucla.jpg"
import explosionVideo from "../components/thumbnails/grid/explosion-case.jpg"
import highImpactDemo from "../components/thumbnails/grid/highimpactdemo.png"

// MODALS
import VideoModal from "../components/PortfolioModals/VideoModal"

//JSON
import videoEditingDataArr from "../components/json/videoALL.json"

const VideoPortfolio = () => {

    // MODAL STATE
    const [ showVideoModal, setShowVideoModal] = useState(false) 
    const [ modalData, setModalData ] = useState()

    // SETTING MODAL DATA
    const visionImpairModal = () => {
        setModalData(videoEditingDataArr[0])
        openVideoModal()
    }

    const explosionModal = () => {
        setModalData(videoEditingDataArr[1])
        openVideoModal()
    }

    const uclaModal = () => {
        setModalData(videoEditingDataArr[2])
        openVideoModal()
    }

    const verdictModal = () => {
        setModalData(videoEditingDataArr[3])
        openVideoModal()
    }

    const syntropyModal = () => {
        setModalData(videoEditingDataArr[4])
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
            
            {/* VIDEO PRODUCTION */}

            <div className="row">
                <div className="col">
                    <div className="secondaryCategoryHeadline">Video Editing</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioSingleRow">

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-lg-3">
                        <div className="projectPlacement projectSpacer">
                            
                            <Link to="dataVisualizationSection" onClick={visionImpairModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={vrVisionImpairment}
                                    alt="VR Shows Vision Impairment"
                                />
                                <div className="projectHeadline">VR Shows Vision Impairment</div>
                            </Link>
                            
                        </div>

                        <div className="projectPlacement">
                            
                            <Link to="dataVisualizationSection" onClick={uclaModal}>
                                <img 
                                className="projectNewImage" 
                                src={uclaVideo}
                                alt="UCLA Leg Amputation"
                                />
                                <div className="projectHeadline">UCLA Leg Amputation</div>
                            </Link>
                        </div> 
                    </div>

                    {/* HERO PROJECT */}
                    <div className="col-lg-6">
                        <div className="heroCodingProject">
                            {/* <div className="row portfolioHead"></div> */}
                            <Link to="dataVisualizationSection" onClick={syntropyModal}>
                                <img className="heroCodingImage" 
                                src={syntropyDemo}
                                alt="Syntropy Demo"/>
                            
                                <div className="projectHeroHeadline">Syntropy Demo Reel
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 lastLine">

                        <div className="projectPlacement projectSpacer">
                            
                            <Link to="dataVisualizationSection" onClick={explosionModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={explosionVideo}
                                    alt="Chemical Explosion"
                                />
                                <div className="projectHeadline">Chemical Explosion Lawsuit</div>
                            </Link>
                        </div>

                        <div className="projectPlacement">
                            <Link to="dataVisualizationSection" onClick={verdictModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={highImpactDemo}
                                    alt="Testimonial Video"
                                />
                                <div className="projectHeadline">High Impact Demo Reel</div>
                            </Link>
                        </div> 

                    </div>

                </div>
                
            </div>
            
        </div>
        </>
        
    );
}

export default VideoPortfolio;