import React from "react";
import "./modalStyle.css"

// IMAGES
import pandemicTrackerHero from "./assets/pandemicTrackerHeroGIF.gif"
import pandemicTrackerSupport1 from "./assets/pandemicTrackerSupport1.png"
import pandemicTrackerSupport2 from "./assets/pandemicTrackerSupport2.png"
import pandemicTrackerSupport3 from "./assets/pandemicTrackerSupport3.png"
import closeButton from "../styleimages/close-button-blue.png"

// ICONS
import {
    FaReact
     
    // DiCss3, 
    // AiFillHtml5, 
    // AiFillApi, 
    // SiJquery
} from "react-icons/fa"

import {IoLogoJavascript} from "react-icons/io"
import {DiCss3} from "react-icons/di"
import {
    AiFillHtml5, 
    AiFillApi,
    AiOutlineCloseCircle,
} from "react-icons/ai"

import {
    SiJquery
} from "react-icons/si"

function CodingModal(props) {

  return(
    <div id="modalOuterContainer">
            
      <div className="row titleBlock">
            <div className="col-12">
                <div className="modalTitle">
                    Pandemic Tracker
                </div>
                <div className="col-md-12 codeIcons"> 
                    <FaReact size={30}/>
                    <IoLogoJavascript size={30}/>
                    <AiFillApi size={30}/>
                    <SiJquery size={30}/>
                    <DiCss3 size={30}/> 
                    <AiFillHtml5 size={30}/> 
                </div>
            </div>

            <div className="col-1 closeX">
                <AiOutlineCloseCircle 
                    type="button"
                    onClick={props.clickcb}
                    size={60}
                />
                
                {/* <img src={closeButton}
                className="closeX" 
                type="button"
                onClick={props.clickcb}
                onClick={()=>props.setShowAbout(false)}
                >
                </img> */}
            
            </div>

      </div>

      <div className="modalInnerContainer">

        <div className="row projectTopRow">

            <div className="col-12">
                <a href="https://vast-eyrie-87899.herokuapp.com/globe" 
                    target="_blank"
                >
                    <img className="porfolioMainImg" 
                    src={pandemicTrackerHero}>

                    </img>
                </a>
                
            </div>
            

            <div className="col-12">
                
                <div id="modalCopyIntro" >
                The Pandemic Tracker displays Covid-19 statistics across the globe. Try it for yourself and see what areas the world are experiencing the biggest impact from the pandemic. The Pandemic Tracker displays Covid-19 statistics across the globe. Try it for yourself and see what areas the world are experiencing the biggest impact from the pandemic. The Pandemic Tracker displays Covid-19 statistics across the globe. Try it for yourself and see what areas the world are experiencing the biggest impact from the pandemic.              
                </div>

                <div className="buttonCenter">
                    <a href="https://vast-eyrie-87899.herokuapp.com/globe" target="_blank">
                    <button
                        className="tryItButton"
                    >Try It Out
                    </button>
                    </a>
                
                    <a href="https://github.com/AndyGreenhaw/global-pandemic-tracker" target="_blank">
                        <button
                            className="tryItButton"
                        >See Code

                        </button>
                    </a>
                </div>

            </div>
        
        </div>
              
        </div>
    </div>
  )  
  
}

export default CodingModal;