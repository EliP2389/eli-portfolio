import React from 'react';
import './Portfolio.css';
import images from '../assets/images/meta-login.png'
import images1 from '../assets/images/netflix-clone.png';
import images2 from '../assets/images/save 2.png';
import images3 from '../assets/images/budget-img.png';
import images4 from '../assets/images/sqlproj-img.png';


export default function Portfolio() {
  return (
    <section className='portfolio container'>
      <h1 className='project-name'>Projects</h1>
      <div className='row'>
        <div className='card proj_one col-4'>
          <div className='card-header'>
            <a className='proj-link' href='https://metaverse-challenge-lyart-eight.vercel.app/'>Metaverse</a>
          </div>
          <img className='card-img-top' src={images} alt='budget project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/enterThemetaverse123.git'>GitHub Repo</a>
          </div>
        </div>

        <div className='card proj_two col-4'>
          <div className='card-header'>
            <a className='proj-link' href='https://elip2389.github.io/netflix-clone-build/'>Netflix Clone</a>
          </div>
          <img className='card-img-top' src={images1} alt='budget project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/netflix-clone-build.git'>GitHub Repo</a>
          </div>
        </div>

        <div className='card proj_three col-4'>
          <div className='card-header'>
            <a className='proj-link' href='https://ancient-depths-61432.herokuapp.com/'>Keep Tasks</a>
          </div>
          <img className='card-img-top' src={images2} alt='social network project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/mkohn4/keep.git'>GitHub Repo</a>
          </div>
        </div>
       
       {/* <div className='row'> */}
        <div className='card proj_four col-4'>
          <div className='card-header'>
            <a className='proj-link' href='https://eli-budgettracker.herokuapp.com/'>Budget Tracker</a>
          </div>
          <img className='card-img-top' src={images3} alt='media project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/realDeal-budget-tracker.git'>GitHub Repo</a>
          </div>
        </div>

        <div className='card proj_five col-4'>
          <div className='card-header'>
            <a className='proj-link' href='https://watch.screencastify.com/v/3aWZXq728N9NWovtCqgI'>Employee Tracker</a>
          </div>
          <img className='card-img-top' src={images4} alt='employee tracker project' />
          <div className='card-footer'>
            <a className='proj-link' href='https://github.com/EliP2389/employee-tracker.git'>GitHub Repo</a>
          </div>
        </div>
      </div>
      {/* </div> */}

    </section>
  )
}

