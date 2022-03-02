import React from 'react';
import './Portfolio.css';
import images from '../../assets/images/budget-img.png';
import images1 from '../../assets/images/netflix-clone.png';
import images2 from '../../assets/images/market-img.png';
import images3 from '../../assets/images/sqlproj-img.png';


export default function Portfolio() {
  return (
    <section className='portfolio container-fluid'>

      <h1 className='project-name'>Projects</h1>

      <div className='portfolio-content container'>

        <div className='card'>
          <div className='card-header'>
            <a className='proj-link' href='https://elip2389.github.io/netflix-clone-build/'>Netflix-Clone-Build</a>
          </div>
          <img className='card-img-top' src={images1} alt='budget project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/netflix-clone-build.git'>GitHub Repo</a>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <a className='proj-link' href='https://eli-budgettracker.herokuapp.com/'>Budget Tracker </a>
          </div>
          <img className='card-img-top' src={images} alt='social network project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/realDeal-budget-tracker.git'>GitHub Repo</a>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <a className='proj-link' href='https://elip2389.github.io/horiseonMedia-challenge1/'>Media Code Refractor</a>
          </div>
          <img className='card-img-top' src={images2} alt='media project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/ElliP2389/horiseonMedia-challenge1.git'>GitHub Repo</a>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <a className='proj-link' href='https://watch.screencastify.com/v/3aWZXq728N9NWovtCqgI'>Employee Tracker</a>
          </div>
          <img className='card-img-top' src={images3} alt='employee tracker project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/employee-tracker.git'>GitHub Repo</a>
          </div>
        </div>

      </div>
    </section>
  )
}

