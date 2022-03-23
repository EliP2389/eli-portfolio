import React from 'react';
import './About.css';

function About() {
    return (
        <section className='about-section container-fluid'>
            <h1 className='about'>About</h1>
            <div className='container'>
                <div className='about-story'>
                    <p className=''><strong>Full Stack Web Developer</strong> <br />
                        My name is Eliezer Pagan, I am a graduate of the Full Stack Web Developer program through
                        Columbia Engineering Coding Boot Camp. Ive come to learn both front-end and back-end technologies
                        and associated libraires and frameworks. I took the courageous step to step outside of my comfort
                        zone and learn web development. I come from a background of electrical and mechanical work as a
                        signal maintainer at amtrak. As it is a great career, I wanted something more for myself. I wanted
                        to push myself and learn something new, challenging, and peaked my interest. Web developement was
                        the answer. I decided on my own to learn and try out learning to code on my own and then
                        decided to attend a coding bootcamp. It was one of the best decisions I have made and I am eager and
                        motivated to continue learning.</p>
                </div>
            </div>
        </section>
    )
}

export default About;