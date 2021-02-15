import React from 'react'

function About() {
    return (
        <div className="content-container about">

            <div className="about-text">
                <p>I've finished my studies as a full stack web developer in July 2020, but my strong suit so far is the Frontend. Always ready to keep learning, bringing my energy and creativity to the table to a creative team.
                I stay active and curious CONSTANTLY working on different projects. Video and audio editing are also part of my expertise.
                </p>
            </div>
            <h4>Skills</h4>
            <ul className="icons">
                <li><i className="fab fa-html5"></i></li>
                <li> <i class="fab fa-js-square"></i> </li>
                <li><i class="fab fa-css3-alt"></i></li>
                <li><i class="fab fa-sass"></i></li>
                <li><i class="fab fa-react"></i></li>
                <li><i class="fab fa-node"></i></li>
                <li><i class="fab fa-github-square"></i></li>
                <li><i class="fas fa-drum"></i></li>
            </ul>
        </div>
    )
}

export default About
