import React from "react";

function ProjectCard(props) {

    return(
        <>
            <div className="col-lg-4">
                <h4>{props.name}</h4>
                <a href={props.link} target="blank"><img src={props.thumb} width="100%" alt={props.alt}/></a>
                <p>{props.description}</p>
            </div>
        </>
    )
}
//{props.thumb}
export default ProjectCard;