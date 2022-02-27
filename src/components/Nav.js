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
                      <a href='#about'>About</a>
                  </li>
                  <li>
                      <a href='#portfolio'>Portfolio</a>
                  </li>
                  <li>
                      <a href='#contact'>Contact</a>
                  </li>
                  <li>
                      <a href='#resume'>Resume</a>
                  </li>
              </ul>
              </nav>
          </div>
        </header>
    )
}

export default Nav 