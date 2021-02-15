import React from 'react'
import { Link } from 'react-router-dom'
// import alone2 from "../videos/alone2.mp4"
import '../style/videos.css'

function Videos() {
    return (
        <div className="videos-container">
            <h2>Videos</h2>
            {/* <video src={alone2} autoPlay controls width="500" id="video" />   */}
            <Link className='cards__item__link' to="/video">alone</Link>
        </div>
    )
}

export default Videos
