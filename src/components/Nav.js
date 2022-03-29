import React from 'react';
import './Nav.css'

function Nav({ handleChange }) {

    return (
        <header className="nav-header container-fluid">
            <div className='nav_content'>
                <h1 className='name'>Eli Pagan</h1>
                <nav>
                    <ul className='flex-row list-unstyled'>
                        <li>
                            <a className='nav-link link-light about_me'
                                href='#about'
                                onClick={() => handleChange('About')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a className='nav-link link-light portfolio_me'
                                href='#portfolio'
                                onClick={() => handleChange('Portfolio')}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a className='nav-link link-light contact_me'
                                href='#contact'
                                onClick={() => handleChange('Contact')}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className='nav-link link-light resume_me'
                                href='#resume'
                                onClick={() => handleChange('Resume')}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <div className='nav-fadeBottom' /> */}
        </header>
    );
}

export default Nav;
