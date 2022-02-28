import React from 'react';
import './Resume.css';
import image from '../../assets/images/resume-img.png';
import document from '../../assets/resume/ELI-RESUME.pdf';

function Resume() {
  return (
    <section>
      <div className='resume'>
        <h1 className='resume-name'>Resume</h1>
        <a href={document}><img className='image' src={image}/></a>
      </div>
    </section>
  )
}

export default Resume