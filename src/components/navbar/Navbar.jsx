import React from 'react'
import "./navbar.css"
import {FaHome, FaUserCircle, FaBookOpen} from "react-icons/fa"
import {BiSolidMessage} from "react-icons/bi"
import {MdWorkHistory} from "react-icons/md"
import {RiServiceLine} from "react-icons/ri"

const Navbar = () => {
  return (
    <nav>
      <a href="#"> <FaHome /> </a>
      <a href="#about"> <FaUserCircle /> </a>
      <a href="#academic"> <FaBookOpen /> </a>
      <a href="#experience"> <MdWorkHistory /> </a>
      <a href="#services"> <RiServiceLine /> </a>
      <a href="#contact"> <BiSolidMessage /> </a>
    </nav>
  )
}

export default Navbar