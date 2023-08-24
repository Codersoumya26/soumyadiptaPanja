import React from 'react'
import cv from "../../assets/cv.pdf"

const HeaderButton = () => {
  return (
    <div className="hb">
        <a href={cv} download className='btn'> Download CV </a>
        <a href="#contact" className='btn btn-primary'> Let's Connect </a>
    </div>
  )
}

export default HeaderButton