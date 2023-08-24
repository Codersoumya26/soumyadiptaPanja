import React from 'react'
import './header.css'
import HeaderButton from './HeaderButton'
import me2 from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello, I'm </h5>
        <h1> Soumyadipta Panja </h1>
        <h5 className="text-light"> Fullstack Developer </h5>
        
        <HeaderButton />
        <HeaderSocials />

      <div className="me">
        <img src={me2} alt="Profile" />
      </div>

      <a href='#contact' className='scroll_down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header