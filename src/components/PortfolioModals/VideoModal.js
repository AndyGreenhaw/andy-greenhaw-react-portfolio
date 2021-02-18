import React from "react";
import "./videoModalStyle.css"

// IMPORTING ICONS
import { AiOutlineCloseCircle } from "react-icons/ai"

// IMPORTING IMAGES
// import pandemicTrackerHero from "./assets/pandemicTrackerHeroGIF.gif"


function VideoModal(props) {

  return(
    <div id="modalOuterContainer">
            
      <div className="row titleBlock">

        <div className="col-12 modalTopBar">
            <div className="modalTitle">
                <div>
                {props.modalHeadline}
                </div>
                {/* {props.modalHeadline} */}
                <AiOutlineCloseCircle 
                className="closeX"
                type="button"
                onClick={props.clickcb}
                size={60}
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
                
                <div id="modalCopyIntro" >
                    {props.modalDescription}
                {/* {props.modalDescription}            */}
                </div>

                <div className="buttonCenter">
                    {/* <a href={props.modalLink} target="_blank"> */}
                    <a href={props.modalLink} target="_blank">

                    <button
                        className="tryItButton"
                    >See Video
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