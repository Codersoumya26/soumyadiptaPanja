import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/pf1.jpg"
import img2 from "../../assets/pf2.jpeg"
import img3 from "../../assets/pf3.jpg"
import img4 from "../../assets/pf4.jpg"

const data = [
  {
    id: 1,
    image: img1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots'
  },
  {
    id: 2,
    image: img2,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots'
  },
  {
    id: 3,
    image: img3,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots'
  },
  {
    id: 4,
    image: img3,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots'
  },
  {
    id: 5,
    image: img4,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots'
  },
  {
    id: 6,
    image: img1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots'
  },
]

const Portfolio = () => {
  return (
  <section id='portfolio'>
    <h5> My Recent Work </h5>
    <h2> Portfolio </h2>
    <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='__blank'> Github </a>
                <a href={demo} className='btn btn-primary' target='__blank'> Live Demo </a>
              </div>
            </article>
          )
        })
      }
    </div>
  </section>  
  )
}

export default Portfolio