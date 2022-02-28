import React from 'react';
import './Nav.css'

function Nav({handleChange}) {

    return (
        <header className="nav">
            <div className='nav_content'>
                <h1 className='name'>Eli Pagan</h1>
                <nav>
                    <ul className='flex-row'>
                        <li>
                            <a href='#about'
                                onClick={() => handleChange('About')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio'
                                onClick={() => handleChange('Portfolio')}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href='#contact'
                                onClick={() => handleChange('Contact')}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href='#resume'
                                onClick={() => handleChange('Resume')}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
