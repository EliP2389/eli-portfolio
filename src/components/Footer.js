import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <a href="https://www.linkedin.com/in/eliezer-pagan-033107220/"
                    className="facebook link-light">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/eliezer-pagan-033107220/"
                    className="instagram link-light">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/eliezer-pagan-033107220/"
                    className="linkedin link-light">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;