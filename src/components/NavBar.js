//////////////////////////
// NAVIGATION COMPONENT //
//////////////////////////

// import React, { Component } from "react";
import React, {useState } from 'react'
import { Link as Link2 } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import { createPortal } from "react-dom";

import ContactModal from "./ContactModal/ContactModal.js"

///////////////////////
// NAVIGATION STARTS //
///////////////////////

function NavBar (props) {

  /////////////////
  // STATE USERS //
  /////////////////

  // const [ scrollHomeClicked, setScrollHome] = useState(false) // 'SCROLL-TO-TOP' STATE
  const [ showContactMe, setShowAbout] = useState(false) // 'ABOUT' MODAL STATE

  ///////////////////
  // STATE SETTERS //
  ///////////////////

  // Scroll to Top of Page When Home Clicked
  const scrollHome = ({scrollHomeClicked, setScrollHome}) => {
    scroll.scrollToTop();
  }

  // Sets 'About' Modal to Open or Closed When About Clicked
  const openContactModal = () => {
    console.log("read")

    document.body.style.overflow = 'hidden';
    document.getElementById("blurMe").style.filter='blur(8px)'
    document.getElementById("blurMe").style.transition='all 0.25s ease-in'

    setShowAbout(true)
  }

  const closeAboutModal = () => {
    console.log("read")

    document.body.style.overflow = 'auto';
    document.getElementById("blurMe").style.filter='blur(0px)'

    setShowAbout(false)
  }

  ///////////////////
  // ABOUT MODAL //
  ///////////////////

  const Modal = ({showContactMe, setShowAbout}) => {

    const content = showContactMe && (

      <ContactModal 
        className="contactBox"
        clickcb={closeAboutModal}
      />
            
    )
    return createPortal(content, document.body)
  }

    return (
      <>

        

        <div className="nav-items">

          <Link 
            className="nav-item"
            activeClass="active"
            to="heroSection" 
            
            // className="nav-link active nav-link" 
            // className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            onClick={scrollHome}
          >
            Home
          </Link>

          <Link
            className="nav-item"
            activeClass="active"
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>

          <div className="dropDownMenu">
            <div className="nav-item dropDown">
              <Link 
                className="dropDown"
                activeClass="active"
                to="codingSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Portfolio
              </Link>
            
              <div className="dropdown-content">
                <Link className="dropLink dropItem1"
                  activeClass="active"
                  to="codingSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Programming</Link>
                <Link className="dropLink dropItem2"
                  activeClass="active"
                  to="dataVisualizationSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Data Visualization</Link>
                <Link className="dropLink dropItem3"
                  activeClass="active"
                  to="animationSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Computer Animation</Link>
                <Link className="dropLink dropItem4"
                  activeClass="active"
                  to="videoSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Video Editing</Link>
              </div>
            </div>
          </div>
          
          <Link2
            className="nav-item"
            to="/contact"
            onClick={openContactModal}
          >
            Contact
          </Link2>
        </div>

        
        <Modal
          showContactMe={showContactMe}
        >
        </Modal>
        </>
    )
  // }
}

export default NavBar