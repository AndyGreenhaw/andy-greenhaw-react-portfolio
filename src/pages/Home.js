import React, {useState} from "react";
import reactDom, { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
// import CarouselCard from "../CarouselCard/CarouselCard.js";
// import allProjects from "../json/heroProjects.json";

function Home() {
  
  const [ show, setShow] = useState(false)

  const Modal = ({children, show, setShow}) => {

    const content = show && (
      <div id="modalDisplay">
        
        <div className="youtube-container">
        <div className="closeX"
          type="button"
          onClick={()=>setShow(false)}
        >x</div>
         
            <div className="iframe-container">
                <iframe title="demo"width="560" height="315" src="https://www.youtube.com/embed/EBv4r806oUs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            <div className="modalCopy">
            <p>Watch my demo reel and check out my portfolio.</p>
            </div>
            
        </div>
      </div>
            
    )
    return createPortal(content, document.body)
  }

  return (
    <>
    <div className="row">
      <div className="col-12 mainTitle">
        Andy Greenhaw
      </div>
    </div>
    <div className="row "> 
      {/* <div className="col-12 dropdown"> */}
          <div className="col-12 taglineTitle dropdown">
            
            What <a href="/portfolio" className="dropbtn">Skills</a> Do You Need?
          
            <div className="dropdown-content">
              <Link to="/coding-portfolio" className={useLocation.pathname === "/coding-portfolio"}>
                  UX/UI Development</Link>
              <Link to="/animation-portfolio" className={useLocation.pathname === "/animation-portfolio"}>
                  Animation</Link>
              <Link to="/video-portfolio" className={useLocation.pathname === "/video-portfolio"}>
                  Video Editing</Link>

              <Link to="/portfolio" className={useLocation.pathname === "/portfolio"}>
                  Writing</Link>
              <Link to="/portfolio" className={useLocation.pathname === "/portfolio"}>
                  See All</Link>
            </div>
          </div>
      {/* </div> */}
    </div>
    <div className="row">
        <div className="col-12 demoPlacement">
            <button className="demoButton" onClick={()=>setShow(true)}>
                Watch Demo
            </button>
        </div>
    </div>
    <Modal
        show={show}
        setShow={setShow}>
        
    </Modal>  
    </>
  );
}

export default Home;