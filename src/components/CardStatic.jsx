import React from 'react'

export default function CardStatic() {
    return (
        <>
            <li className='cards__item card-two'>
                <a href='https://drive.google.com/file/d/1DsZl-wAihpVmcPRGtroJdxFPkw82R7Ll/view?usp=sharing' className='cards__item__link' target="blank">

                    <div className='cards__item__pic-wrap' id="card-video-container" data-category="Videos">
                        <h3 id="card-video-title">juanSessions</h3>
                        <video src="./videos/video-tv.mp4" autoPlay loop muted width="100%" className='cards__item__img' id="card-video" />
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>Audio and Video Editing, Soundtracks, Voice-Over</h5>
                    </div>

                </a>
            </li>

            <li className='cards__item card-three'>
                <a href='https://juansessions.bandcamp.com/releases' className='cards__item__link' target="blank">
                    <div className='cards__item__pic-wrap' id="card-video-container" data-category="Music">
                        <h3 id="card-2-video-title">juanSessions</h3>
                        <video src="./videos/cassette.mp4" autoPlay loop muted width="100%" className='cards__item__img' id="card-video" />
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>Music Composition and Production</h5>
                    </div>
                </a>
            </li>

        </>
    )
}
