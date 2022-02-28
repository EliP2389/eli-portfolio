import React from 'react';
import './Portfolio.css';
import images from '../../assets/images/budget-img.png';
import images1 from '../../assets/images/social-img.png';
import images2 from '../../assets/images/market-img.png';
import images3 from '../../assets/images/sqlproj-img.png';

export default function Portfolio() {
  return (
    <section className='portfolio container-fluid'>
      <h1 className='project-name'>Projects</h1>
      <div className='portfolio-content'>
        <div className='container'>
          <div><a className='proj-link link-light' href='https://eli-budgettracker.herokuapp.com/'>Budget Tracker </a></div>
          <div><a className='proj-link link-light' href='https://github.com/EliP2389/realDeal-budget-tracker.git'>GitHub Repo</a></div>
          <img className='img' src={images} alt='budget project'/>
        </div>
      </div>
      <div className='portfolio-content' >
        <div className='container'>
          <div> <a className='proj-link link-light' href='https://github.com/EliP2389/socialNetwork-API.git'>Social NetWork Api GitHub Repo</a></div>
          <img className='img' src={images1} alt='social network project'/>
        </div>
      </div>
      <div className='portfolio-content'>
        <div className='container'>
          <div><a className='proj-link link-light' href='https://elip2389.github.io/horiseonMedia-challenge1/'>Media Code Refractor</a></div>
          <div><a className='proj-link link-light' href='https://github.com/EliP2389/horiseonMedia-challenge1.git'>GitHub Repo</a></div>
          <img className='img' src={images2} alt='media project'/>
      </div>
      </div>
      <div className='portfolio-content'>
        <div className='container'>
            <div><a className='proj-link link-light' href='https://watch.screencastify.com/v/3aWZXq728N9NWovtCqgI'>Employee Tracker</a></div>
            <div><a className='proj-link link-light' href='https://github.com/EliP2389/employee-tracker.git'>GitHub Repo</a></div>
            <img className='img' src={images3} alt='employee tracker project'/>
        </div>
      </div>
    </section>
  )
}

