import React from 'react'
import "./about.css"
import me from '../../assets/me-about.jpeg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt='About Pic' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/> 
              <h5> Experience </h5>
              <small> 3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/> 
              <h5> Clients </h5>
              <small> 5+ worldwide </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/> 
              <h5> Projects </h5>
              <small> 4+ completed </small>
            </article>
          </div>

          <p>
            As an enthusiastic and dedicated Python Application Developer, I am driven to utilize my technical
            proficiency and passion for software engineering to contribute innovative solutions and make a positive
            impact in a dynamic and collaborative team. With a solid background in full-stack software engineering and
            proficiency in web development frameworks, I aim to leverage my expertise in Python programming and
            relational database management to deliver high-quality applications and drive success in the tech industry.
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About