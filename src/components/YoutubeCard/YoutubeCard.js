import React from "react";

function YoutubeCard(){

return (
    <div id="youtube-container" id="modalDisplay">
        <div className="iframe-container">
            <iframe title="demo"width="560" height="315" src="https://www.youtube.com/embed/EBv4r806oUs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
    )
}

export default YoutubeCard;