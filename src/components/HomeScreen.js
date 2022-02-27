import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About';


function Homescreen() {
    return (
        <div className='home'>
            <Nav />
            <main>
                <About />
            </main>
        </div>
    )
}

export default Homescreen;