import React from "react";
import "./videoModalStyle.css"

// IMPORTING ICONS
import { AiOutlineCloseCircle } from "react-icons/ai"

// IMPORTING IMAGES
// import pandemicTrackerHero from "./assets/pandemicTrackerHeroGIF.gif"


function VideoModal(props) {

  return(
    <div id="modalVideoOuterContainer">
            
      <div className="row">
        <div className="col-11">
            <div className="videoModalTitle">
                {props.modalHeadline}
            </div>
        </div>
        <div className="col-1">
            <div className="closeVideoModal">
                    <AiOutlineCloseCircle 
                        type="button"
                        onClick={props.clickcb}
                        size={35}
                    />
            </div>
        </div>

      </div>

      <div className="modalInnerContainer"> 

        <div className="row projectTopRow">

            <div className="col-12 videoContainer">
                
                    <iframe 
                        className="videoPlayer"
                        src={props.modalLink}
                        // src="https://www.youtube.com/embed/78jLBNSqc3g" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                
            </div>
            

            <div className="col-12">
                
                <div className="videoModalCopy" >
                    {props.modalDescription}
                {/* {props.modalDescription}            */}
                </div>

                <div className="buttonCenter">
                    {/* <a href={props.modalLink} target="_blank"> */}
                    <a href={props.learnMore} target="_blank">

                    <button
                        className="tryItButton"
                    >Learn More
                    </button>
                    </a>
                
                </div>

            </div>
        
        </div>
              
        </div>
    </div>
  )  
  
}

export default VideoModal;