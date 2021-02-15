import React from 'react'
// import alone2 from "../videos/alone2.mp4"
import '../style/videos.css'

function Video() {
    return (
        <div className="video-container">
            <video src="./videos/alone2.mp4" controls width="100%" id="project-video" />
        </div>
    )
}

export default Video
