import React, {useState} from "react";
import { Link as Link, animateScroll as scroll } from "react-scroll";

function Home() {
 
  return (
    <>
    <div className="row">
      <div className="col-12 mainTitle">
        Andy Greenhaw
      </div>
    </div>
    <div className="row "> 
      <div className="col-12 taglineTitle">
        Engineering Code with a Background in Digital Strategy       
      </div>
    </div>
    <div className="row">
      <div className="col-12 demoPlacement">

        
        <Link 
          activeClass="active"
          to="codingSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="demoButton">
          Explore Portfolio
          </button>
        </Link> 
        
        {/* <button className="demoButton" onClick={()=>setShow(true)}>
            Watch Demo
        </button> */}
      </div>
    </div>
    {/* <Modal
        showAbout={showAbout}
        setShowAbout={setShowAbout}>
        
    </Modal>   */}
    </>
  );
}

export default Home;