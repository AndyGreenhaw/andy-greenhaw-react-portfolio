import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./portfolioStyle.css"


// IMPORTING THUMBNAIL IMAGES
import ndtAnimation from "../components/thumbnails/grid/neil-degrasse-tyson.jpg"

import ageOfSurpriseAnimation from "../components/thumbnails/grid/age-of-surprise-2.jpg"
import diaAnimation from "../components/thumbnails/grid/dia.png"
import spaceReportAnimation from "../components/thumbnails/grid/spacereport.png"
import nduAnimation from "../components/thumbnails/grid/hillary.png"


// MODALS
import VideoModal from "../components/PortfolioModals/VideoModal.js"

//JSON
import animationDataArr from "../components/json/animationALL.json"


const AnimationPortfolio = () => {
    
    // MODAL STATE
    const [ showVideoModal, setShowVideoModal] = useState(false) 
    const [ modalData, setModalData ] = useState()

    // SETTING MODAL DATA
    const ndtModal = () => {
        console.log("Read")
        setModalData(animationDataArr[0])
        
        openVideoModal()
    }

    const aosModal = () => {
        setModalData(animationDataArr[1])
        openVideoModal()
    }

    const spaceModal = () => {
        setModalData(animationDataArr[2])
        openVideoModal()
    }

    const diaModal = () => {
        setModalData(animationDataArr[3])
        openVideoModal()
    }

    const natDefModal = () => {
        setModalData(animationDataArr[4])
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
            learnMore={modalData.learnMore}
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
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <div className="secondaryCategoryHeadline">Computer Animation</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioSingleRow">

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-lg-3">
                        <div className="projectPlacement projectSpacer">
                            
                            <Link to="dataVisualizationSection" onClick={aosModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={ageOfSurpriseAnimation} 
                                    alt="Age of Surprise"
                                />
                                <div className="projectHeadline">U.S. Air Force</div>
                            </Link>
                            
                        </div>

                        <div className="projectPlacement">
                            
                            <Link to="dataVisualizationSection" onClick={diaModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={diaAnimation}
                                    alt="Defense Intelligence Agency"
                                />
                                <div className="projectHeadline">Defense Intelligence Agency
                                </div>
                            </Link>
                        </div> 
                    </div>

                    {/* HERO PROJECT */}
                    <div className="col-lg-6">
                        <div className="heroCodingProject">
                            <Link to="dataVisualizationSection" onClick={ndtModal}>
                                <img className="heroCodingImage" src={ndtAnimation} alt="Space Music Video"/>
                            
                                <div className="projectHeroHeadline"
                                >
                                    Neil Degrasse Tyson Funks the Universe
                                </div>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3">

                        <div className="projectPlacement projectSpacer">
                            
                            <Link to="dataVisualizationSection" onClick={spaceModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={spaceReportAnimation}
                                    alt="The Space Report"
                                />
                                <div className="projectHeadline">The Space Foundation
                                </div>
                            </Link>

                        </div>

                        <div className="projectPlacement">
                            <Link to="dataVisualizationSection" onClick={natDefModal}>
                                <img 
                                    className="projectNewImage" 
                                    src={nduAnimation}
                                    alt="BookSelf Social App"
                                />
                                <div className="projectHeadline">National Defense University
                                </div>
                            </Link>
                        </div> 

                    </div>
                </div>
                
            </div>
            
        </div>
        </>
        
    );
}

export default AnimationPortfolio;