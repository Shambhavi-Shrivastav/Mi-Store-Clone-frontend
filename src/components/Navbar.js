import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav'>

      <div className='logo'>
        <a href="/">
          <img id="logoImage" src='https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg' alt="Not" />
        </a>

      </div>

      <a className="navlinks" href="/#miphones">Mi Phones</a>
      <a className="navlinks" href="/#redmiphones">Redmi Phones</a>
      <a className="navlinks" href="/#tv">TV</a>
      <a className="navlinks" href="/#laptops">Laptops</a>
      <a className="navlinks" href="/#lifestyle">Fitness & Lifestyle</a>
      <a className="navlinks" href="/#home">Home</a>
      <a className="navlinks" href="/#audio">Radio</a>
      <a className="navlinks" href="/#accessories">Accessories</a>

    </div>
  )
}

export default Navbar
