import React from "react";
import "./codingModalStyle.css"

// IMAGES
// import pandemicTrackerHero from "./assets/pandemicTrackerHeroGIF.gif"

// ICONS
import {
    FaReact
     
    // DiCss3, 
    // AiFillHtml5, 
    // AiFillApi, 
    // SiJquery
} from "react-icons/fa"

import {IoLogoJavascript} from "react-icons/io"
import {DiCss3, DiRequirejs} from "react-icons/di"
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
    <div id="modalCodingOuterContainer">
            
      <div className="row">
            <div className="col-12">
                <div className="row">
                    
                    <div className="col-11">
                        <div className="codingModalTitle">
                            {props.modalHeadline}
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="closeCodingModal">
                            <AiOutlineCloseCircle 
                                type="button"
                                onClick={props.clickcb}
                                size={35}
                            />
                        </div>
                    </div>

                </div>
                
                
                <div className="row">
                    <div className="codeIcons">
                        <FaReact size={30}/>
                        <IoLogoJavascript size={30}/>
                        <AiFillApi size={30}/>
                        <SiJquery size={30}/>
                        <DiCss3 size={30}/> 
                        <AiFillHtml5 size={30}/> 
                    </div> 
                </div>
                
            </div>
            
                
                {/* <div className="row"> */}
                    {/* <div className="closeProject">
                        <AiOutlineCloseCircle 
                            type="button"
                            // className="closeProject"
                            onClick={props.clickcb}
                            size={30}
                        />
                    </div> */}
                {/* </div> */}
                
            

           


      </div>

      <div className="modalInnerContainer">

        <div className="row projectTopRow">

            <div className="col-12">
                <a href="https://vast-eyrie-87899.herokuapp.com/globe" 
                    target="_blank"
                >
                    {/* {props.modalThumb} */}
                    <img className="porfolioMainImg" 
                    src={props.modalThumb}
                    alt={props.alt}
                    >
                    </img>
                </a>
                
            </div>
            

            <div className="col-12">
                
                <div className="modalCopyIntro" >
                    {props.modalDescription}           
                </div>

                <div className="buttonCenter">
                    <a href={props.modalLink} target="_blank">
                    <button
                        className="tryItButton"
                    >Try It Out
                    </button>
                    </a>
                
                    <a href={props.modalGitHub} target="_blank">
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