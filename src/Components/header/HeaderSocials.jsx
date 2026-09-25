import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import{AiOutlineDribbble} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/mezba0044" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mezbah15" target="_blank"><BsGithub/></a>
        <a href="https://dribbble.com" target="_blank"><AiOutlineDribbble/></a>
    </div>
  )
}

export default HeaderSocials