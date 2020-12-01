import React from "react";
import allProjects from "../json/heroProjects.json";

function CarouselCard(props) {




    return(
    <>
        <div clasName="carousel-item">
            <img class="d-block w-100" src={allProjects[]} alt="Third slide"/>
        </div>
        <div className="carousel-item active">
            <img className="d-block w-100" src={props} alt="First slide"/>
        </div>
    
        <div class="carousel-item">
            <img class="d-block w-100" src={props} alt="Second slide"/>
        </div>
         
    </>   
    )
}

export default CarouselCard;