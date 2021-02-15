import React from 'react'
import '../style/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            juanSessions
              <i class="fab fa-galactic-senate"></i>
                        </Link>
                    </div>
                    <small class='website-rights'>juanSessions © 2021</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            href="https://github.com/JuanSessions" target="_blanc"
                            aria-label='github'
                        >
                            <i className="fab fa-github-square" />
                        </a>
                        <a
                            class='social-icon-link linkedin'
                            href="https://www.linkedin.com/in/juan-perusin-a708101a6/"
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>

                        <a
                            class='social-icon-link bandcamp'
                            href="https://juansessions.bandcamp.com/releases"
                            target='_blank'
                            aria-label='bandcamp'
                        >
                            <i class='fab fa-bandcamp' />
                        </a>


                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
