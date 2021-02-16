import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./portfolioStyle.css"
import profilePic from "../components/styleimages/profilePic500x500.png"

const AboutAndy = () => {

        return(
                <>
                        <div className="row">
                                <div className="col">
                                        <div className="categoryHeadline">About Andy</div>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-12">
                                        <div className="aboutBox">
                                                <img className="profilePic" src={profilePic}></img>
                                        </div>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-12">
                                        <div className="footer">Footer
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default AboutAndy;