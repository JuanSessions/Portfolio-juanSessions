import React from 'react'
import useSound from "use-sound";
import ImgSound from "../sounds/flyby.mp3";

function Contact() {
    const [playActive] = useSound(ImgSound, { volume: 0.50 });

    return (
        <div className="contact">
            {/* <div className="contact-info"> */}
            <h2>Contact</h2>

            <ul className="contact-icons">
                <li><a href="https://github.com/JuanSessions" target="_blanc"><i className="fab fa-github-square" onClick={playActive}></i></a></li>
                <li><a href="https://www.linkedin.com/in/juan-perusin-a708101a6/" target="_blanc"><i className="fab fa-linkedin" onClick={playActive}></i></a></li>
                <li><a href="https://juansessions.bandcamp.com/releases" target="_blanc"><i className="fab fa-bandcamp" aria-hidden="true" onClick={playActive}></i></a></li>
            </ul>

            <a href="mailto:juansessions@live.com" className="mail-btn">send me an email</a>
            {/* </div> */}
        </div>
    )
}

export default Contact
