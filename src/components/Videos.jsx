import React from 'react'
import { Link } from 'react-router-dom'
import '../style/videos.css'

function Videos() {
    return (
        <div className="videos-container">
            <h2>Videos</h2>
            <Link className='cards__item__link' to="/video">alone</Link>
        </div>
    )
}

export default Videos
