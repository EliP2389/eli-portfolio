import React from 'react';
import './Resume.css';
import image from '../assets/images/Resume.png';
import document from '../assets/resume/ELI-RESUME-Main.pdf';
import { defaultStyles, FileIcon } from 'react-file-icon'

function Resume() {
  return (
    <section className='my_resume container-fluid'>
      <div className='resume'>
        <h1 className='resume-name'>Resume</h1>
        <a className='resume-doc' href={document}>
          <FileIcon extension='docx' {...defaultStyles.docx} />
        </a>
        <div>
          <img className='image' src={image} alt='resume' />
        </div>
      </div>
    </section>
  )
}

export default Resume