import React from "react";

function ProjectCard(props) {

    return(
        <>
            <div className="col-md-4">
                <div className="projectCards">
                    <div className="row portfolioHead">
                        <p>{props.name}</p>
                    </div>
                    <div className="row">
                        <a href={props.link} target="blank"><img className="projectImage" src={props.thumb} width="100%" alt={props.alt}/></a>
                    </div>

                    <div className="row">
                    <p className="portfolioCopy">{props.description}</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
//{props.thumb}
export default ProjectCard;