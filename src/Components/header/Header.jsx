/* rafce */
import React from 'react'
import './header.css'
import CTA from './CTA'
import BannerVideo from '../../Assets/BannerVideo.mp4'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <video className="hero_video" src={BannerVideo}
            autoPlay
            muted
            loop
            playsInline
        />
        {/* Video Overlay */}
      <div className="hero_overlay"></div>
      <div className="container header_container">
        <h1> Turn META Ads </h1>
        <h1> Into <span>Real Business Growth</span></h1>
        <h3 style={{ padding: '25px', color: 'white' }}>Target smarter🎯 Convert better🤝 Grow faster📈</h3>        
        <CTA/>
        <HeaderSocial/>
        <a href="#contact" className="scroll_down">Scroll Down</a> 
      </div>
    </header>
  )
}

export default Header
