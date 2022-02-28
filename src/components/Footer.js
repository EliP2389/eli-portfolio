import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <a href="https://www.linkedin.com/in/eliezer-pagan-033107220/"
                    className="facebook link-light">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a href="https://github.com/EliP2389"
                    className="instagram link-light">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.linkedin.com/in/eliezer-pagan-033107220/"
                    className="linkedin link-light">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;