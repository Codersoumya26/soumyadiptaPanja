/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import "./navbar.css"
import {FaHome, FaUserCircle, FaBookOpen} from "react-icons/fa"
import {BiSolidMessage} from "react-icons/bi"
import {MdWorkHistory} from "react-icons/md"
import {RiServiceLine} from "react-icons/ri"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : '' }
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : '' }
      >
        <FaUserCircle />
      </a>
      <a
        href="#academic"
        onClick={() => setActiveNav('academic')}
        className={activeNav === 'academic' ? 'active' : '' }
      >
        <FaBookOpen />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('experience')}
        className={activeNav === 'experience' ? 'active' : '' }
      >
        <MdWorkHistory />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('services')}
        className={activeNav === 'services' ? 'active' : '' }
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('contact')}
        className={activeNav === 'contact' ? 'active' : '' }
      > 
        <BiSolidMessage />
      </a>
    </nav>
  )
}

export default Navbar