import React from "react";

function ProjectCard(props) {

    return(
        <>
            <div className="col-md-3 projectCards">
                <div className="row portfolioHead">
                <p>{props.name}</p>
                </div>
                <div className="row">
                <a href={props.link} target="blank"><img src={props.thumb} width="100%" alt={props.alt}/></a>
                <div className="portfolioCopy">
                    <p>{props.description}</p>
                </div>
                </div>
            </div>
        </>
    )
}
//{props.thumb}
export default ProjectCard;