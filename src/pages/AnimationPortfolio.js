import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./portfolioStyle.css"


// IMPORTING THUMBNAIL IMAGES
import ndtAnimation from "../components/thumbnails/grid/neil-degrasse-tyson.jpg"

import ageOfSurpriseAnimation from "../components/thumbnails/grid/age-of-surprise-2.jpg"
import diaAnimation from "../components/thumbnails/grid/dia.png"
import spaceReportAnimation from "../components/thumbnails/grid/spacereport.png"
import nduAnimation from "../components/thumbnails/grid/hillary.png"

const AnimationPortfolio = () => {
    
    return (
        <div className="darkPortfolioBackground">
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <div className="categoryHeadline">Computer Animation</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioSingleRow">

                    {/* HERO PROJECT */}
                    <div className="col-md-6">
                        <div className="heroCodingProject">
                            {/* <div className="row portfolioHead"></div> */}
                                <a href="https://www.youtube.com/watch?v=E831oDXzKwo&t=1s"><img className="heroCodingImage" src={ndtAnimation} alt="Space Music Video"/></a>

                                <div className="heroCodingCopy">I taught myself a wide range of computer animation software throughout my digital marketing career, which shares enormous consistencies with several computing languages, particularly in Javascript and CSS. I produced this animation by editing Neil Degrasse Tyson's appearance on the Rogan Podcast to Wax Taylor and then creating the animations along with the lyrics. Filler Text Filler Text Filler Text Filler Text Filler Text</div>
                        </div>
                    </div>

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-md-3">
                        <div className="projectPlacement">
                            
                            <a href="https://www.youtube.com/watch?v=9Xpu2QqLnHY&t=67s">
                                <img 
                                    className="projectNewImage" 
                                    src={ageOfSurpriseAnimation} 
                                    alt="Age of Surprise"
                                /></a>
                            <div className="projectHeadline">U.S. Air Force</div>
                            
                        </div>

                        <div className="projectPlacement">
                            
                            <a href="https://andygreenhaw.github.io/05-Third-Party-APIs-Work-Day-Scheduler/"><img 
                                className="projectNewImage" 
                                src={diaAnimation}
                                alt="Defense Intelligence Agency"
                            /></a>
                            <div className="projectHeadline">Defense Intelligence Agency</div>
                        </div> 
                    </div>

                    <div className="col-md-3">

                        <div className="projectPlacement">
                            
                            <a href="https://www.youtube.com/watch?v=3ET7yHZWbw4"><img 
                                className="projectNewImage" 
                                src={spaceReportAnimation}
                                alt="The Space Report"
                            /></a>
                            <div className="projectHeadline">The Space Foundation</div>
                        </div>

                        <div className="projectPlacement">
                            <a href="https://www.youtube.com/watch?v=6cRIb9zDd3Y"><img 
                                className="projectNewImage" 
                                src={nduAnimation}
                                alt="BookSelf Social App"
                            /></a>
                            <div className="projectHeadline">National Defense University</div>
                        </div> 

                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default AnimationPortfolio;