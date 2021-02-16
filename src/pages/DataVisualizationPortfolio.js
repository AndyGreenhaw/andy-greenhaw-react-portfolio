import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./portfolioStyle.css"

const DataVisualization = () => {
    
    return (
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
                            
                            <a href="https://www.youtube.com/watch?v=78jLBNSqc3g&t=1s"><img 
                                className="projectNewImage" 
                                src="andy-greenhaw-react-portfolio/assets/thumbnails/covid-19.jpg" 
                                alt="Covid-19 Animation"
                            /></a>
                            <div className="projectHeadline">Covid-19</div>
                            
                        </div>

                        <div className="projectPlacement">
                            <a href="https://andygreenhaw.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                                <img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/crash-accuracy.jpg" 
                                    alt="Crash Reconstruction"
                                /></a>
                            <div className="projectHeadline">Crash Reconstruction</div>
                        </div>
                        
                    </div>

                    <div className="col-md-3">

                        <div className="projectPlacement">

                            <a href="https://www.youtube.com/watch?v=6T8yedKRQOQ"><img 
                                    className="projectNewImage" 
                                    src="andy-greenhaw-react-portfolio/assets/thumbnails/dis.jpg" 
                                    alt="Digital Injury Summary"
                                /></a>
                            <div className="projectHeadline">Digital Injury Summary</div>

                        </div>

                        <div className="projectPlacement">
                                
                            <a href="https://shielded-savannah-98558.herokuapp.com/notes"><img 
                                className="projectNewImage" 
                                src="andy-greenhaw-react-portfolio/assets/thumbnails/nuclear.png" 
                                alt="Nuclear Reactor"
                            /></a>
                            <div className="projectHeadline">Nuclear Physics</div>

                        </div> 

                    </div>

                    {/* HERO PROJECT */}
                    <div className="col-md-6">
                        <div className="heroCodingProject">
                            {/* <div className="row portfolioHead"></div> */}
                            <a href="https://highimpact.com/blog/High-Impact-to-Bring-Virtual-Reality-to-the-Courtroom"><img className="heroCodingImage" src="andy-greenhaw-react-portfolio/assets/thumbnails/virtual-reality.jpg" alt="Virtual Reality Litigation"/></a>

                            <div className="heroCodingCopy">Translating complex data into visual communication tools that engage and educate was my primary focus for six years at High Impact. We specialized in highly accurate illustrations, animations, and interactive applications based on medical and forensic science. This included the first virtual reality exhibit used in a legal mediation in the United States, which has been used in several cases since. (I also wrote and produced the video for this example.)
                            </div>
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
        
    );
}

export default DataVisualization;