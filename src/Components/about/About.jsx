import React from 'react'
import './about.css'

import AdsVideo from '../../Assets/AdsVideo.mp4'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">

      <h5 className="text-light">Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about_container">

        {/* =========================
            ABOUT VIDEO
        ========================= */}

        <div className="about_me">

          <div className="about_me-image">

            <video
              src={AdsVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Digital marketing and advertising overview"
            />

          </div>

        </div>


        {/* =========================
            ABOUT CONTENT
        ========================= */}

        <div className="about_content">

          <div className="about_cards">

            <article className="about_card">
              <FaAward className="about_icon" />

              <h5>Experience</h5>

              <small>
                3+ Years Experience
              </small>
            </article>


            <article className="about_card">
              <FiUsers className="about_icon" />

              <h5>Clients</h5>

              <small>
                26+ Worldwide
              </small>
            </article>


            <article className="about_card">
              <VscFolderLibrary className="about_icon" />

              <h5>Projects</h5>

              <small>
                83+ Projects
              </small>
            </article>

          </div>


          <div className="paragraph">

            <p>
             We help businesses turn Meta Ads into a powerful growth channel.
             Our agency specializes in Facebook and Instagram advertising, combining smart targeting, 
             creative testing, and continuous optimization to drive measurable results.
            </p>

            <p>
             With experience across numerous successful Meta Ads campaigns, 
             we focus on finding what works, optimizing performance, 
             and scaling campaigns to help businesses generate more leads, sales, and growth.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About
