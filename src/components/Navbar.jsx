import React from 'react'
import { NavLink } from "react-router-dom";
import "../style/Navbar.css"
import useSound from "use-sound";
import ImgSound from "../sounds/navbarsound.wav";
function Navbar() {
    const [playActive] = useSound(ImgSound, { volume: 0.80 });

    return (
        <nav className="navbar">
            <NavLink to="/" exact activeClassName="active" className="nav-link" onClick={playActive}>Home</NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-link" onClick={playActive}>About</NavLink>
            <NavLink to="/projects" activeClassName="active" className="nav-link" onClick={playActive}>Projects</NavLink>
            <NavLink to="/contact" activeClassName="active" className="nav-link" onClick={playActive}>Contact</NavLink>
        </nav>
    )
}

export default Navbar
