import React from 'react'
import './Nav.css'


function Nav() {
    return (
        <header className='nav'>
          <div className='nav_content'>
              <h1 className='name'>Eli Pagan </h1>
              <nav >
              <ul className='flex-row'>
                  <li>
                      <a>About</a>
                  </li>
                  <li>
                      <a>Portfolio</a>
                  </li>
                  <li>
                      <a>Contact</a>
                  </li>
                  <li>
                      <a>Resume</a>
                  </li>
              </ul>
              </nav>
          </div>
        </header>
    )
}

export default Nav 