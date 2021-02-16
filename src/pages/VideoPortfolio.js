import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./portfolioStyle.css"

const VideoPortfolio = () => {
    
    return (
        <div className="darkPortfolioBackground">
            
            {/* VIDEO PRODUCTION */}

            <div className="row">
                <div className="col">
                    <div className="categoryHeadline">Video Editing</div>
                </div>
            </div>

            <div className="prortfolioProjectSection">
                <div className="row portfolioSingleRow">

                    {/* SECONDARY CODE PROJECTS */}
                    <div className="col-md-3">
                        <div className="projectPlacement">
                            
                            <a href="https://www.youtube.com/watch?v=9Xpu2QqLnHY&t=67s">
                                <img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/visionimpairment.jpg" 
                                    alt="VR Shows Vision Impairment"
                                /></a>
                            <div className="projectHeadline">VR Shows Vision Impairment</div>
                            
                        </div>

                        <div className="projectPlacement">
                            
                            <a href="https://www.youtube.com/watch?v=_KlhF6ETtPg"><img 
                                className="projectNewImage" 
                                src="andy-greenhaw-react-portfolio/assets/thumbnails/ucla.jpg" 
                                alt="UCLA Leg Amputation"
                            /></a>
                            <div className="projectHeadline">UCLA Leg Amputation</div>
                        </div> 
                    </div>

                    <div className="col-md-3">

                        <div className="projectPlacement">
                            
                            <a href="https://www.youtube.com/watch?v=Oe7iXSVUYek"><img 
                                className="projectNewImage" 
                                src="andy-greenhaw-react-portfolio/assets/thumbnails/explosion-case.jpg" 
                                alt="Chemical Explosion"
                            /></a>
                            <div className="projectHeadline">Chemical Explosion Lawsuit</div>
                        </div>

                        <div className="projectPlacement">
                            <a href="https://highimpact.com/testimonials"><img 
                                className="projectNewImage" 
                                src="andy-greenhaw-react-portfolio/assets/thumbnails/testimonials.png" 
                                alt="Testimonial Video"
                            /></a>
                            <div className="projectHeadline">High Impact Testimonials</div>
                        </div> 

                    </div>

                    {/* HERO PROJECT */}
                    <div className="col-md-6">
                        <div className="heroCodingProject">
                            {/* <div className="row portfolioHead"></div> */}
                                <a href="https://www.youtube.com/watch?v=v7FfnRJCh6E"><img className="heroCodingImage" src="andy-greenhaw-react-portfolio/assets/thumbnails/syntropydemo.png" alt="Syntropy Demo"/></a>

                                <div className="heroCodingCopy">I taught myself a wide range of video editing software throughout my digital marketing career, which shares enormous consistencies with several computing languages, particularly in Javascript and CSS. I produced this animation reel editing together some of High Impact's best work for its sister brand, Syntropy. Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text</div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default VideoPortfolio;