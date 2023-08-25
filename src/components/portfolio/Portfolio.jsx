import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/pf1.jpg"
import img2 from "../../assets/pf2.jpeg"
import img3 from "../../assets/pf3.jpg"
import img4 from "../../assets/pf4.jpg"

const Portfolio = () => {
  return (
  <section id='portfolio'>
    <h5> My Recent Work </h5>
    <h2> Portfolio </h2>
    <div className="container portfolio_container">
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img1} alt="portfolio pic" />
      </div>
        <h3> This is a portfolio item title </h3>
        <div className="portfolio_item-cta">
          <a href='http://github.com/' className='btn' target='__blank'> Github </a>
          <a href='http://github.com/' className='btn btn-primary' target='__blank'> Live Demo </a>
        </div>
    </article>
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img2} alt="portfolio pic" />
      </div>
        <h3> This is a portfolio item title </h3>
        <div className="portfolio_item-cta">
          <a href='http://github.com/' className='btn' target='__blank'> Github </a>
          <a href='http://github.com/' className='btn btn-primary' target='__blank'> Live Demo </a>
        </div>
    </article>
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img3} alt="portfolio pic" />
      </div>
        <h3> This is a portfolio item title </h3>
        <div className="portfolio_item-cta">
          <a href='http://github.com/' className='btn' target='__blank'> Github </a>
          <a href='http://github.com/' className='btn btn-primary' target='__blank'> Live Demo </a>
        </div>
    </article>
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img3} alt="portfolio pic" />
      </div>
        <h3> This is a portfolio item title </h3>
        <div className="portfolio_item-cta">
          <a href='http://github.com/' className='btn' target='__blank'> Github </a>
          <a href='http://github.com/' className='btn btn-primary' target='__blank'> Live Demo </a>
        </div>
    </article>
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img4} alt="portfolio pic" />
      </div>
        <h3> This is a portfolio item title </h3>
        <div className="portfolio_item-cta">
          <a href='http://github.com/' className='btn' target='__blank'> Github </a>
          <a href='http://github.com/' className='btn btn-primary' target='__blank'> Live Demo </a>
        </div>
    </article>
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img1} alt="portfolio pic" />
      </div>
        <h3> This is a portfolio item title </h3>
        <div className="portfolio_item-cta">
          <a href='http://github.com/' className='btn' target='__blank'> Github </a>
          <a href='http://github.com/' className='btn btn-primary' target='__blank'> Live Demo </a>
        </div>
    </article>
    </div>
  </section>  
  )
}

export default Portfolio