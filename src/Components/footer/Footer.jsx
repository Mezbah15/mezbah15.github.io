/* rafce */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <p className='footer-logo'>MEZTECH</p>
      <ul className='permalinks'>
        <li><a href="#"> Home </a></li>
        <li><a href="#about"> About </a></li>
        <li><a href="#experience"> Experience </a></li>
        <li><a href="#services"> Services </a></li>
        <li><a href="#portfolio"> Portfolio </a></li>
        <li><a href="#contact"> Contact </a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/mezbah1582/"> <FaFacebookF/> </a>
        <a href="https://www.linkedin.com/in/mezba0044/"> <FaLinkedinIn/> </a>
        <a href="https://github.com/mezbah15"> <FiGithub/> </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Meztech Official. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer