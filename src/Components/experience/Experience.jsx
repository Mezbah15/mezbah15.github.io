import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

import {
  SiGoogleads,
  SiFacebook,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiShopify,
  SiReact,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiCsharp,
  SiDotnet
} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">

      <h5 className="text-light">What We Do</h5>
      <h2>Our Expertise</h2>

      <div className="container experience_container">

        {/* =========================
            META ADS
        ========================= */}

        <div className="experience_frontend">

          <h2>Meta Ads</h2>

          <div className="experience_content">

            <article className="experience_details">
              <SiFacebook className="experience-icons" />
              <div>
                <h4>Facebook & Instagram Ads</h4>
                <small className="text-light">
                  Campaign Strategy & Setup
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiFacebook className="experience-icons" />
              <div>
                <h4>Audience Targeting</h4>
                <small className="text-light">
                  Research & Segmentation
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>WhatsApp Campaigns</h4>
                <small className="text-light">
                  Leads & Conversions
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>Threads Advertising</h4>
                <small className="text-light">
                  Audience Reach
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>Meta Pixel & CAPI</h4>
                <small className="text-light">
                  Advanced Tracking
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>Conversion Tracking</h4>
                <small className="text-light">
                  Events & Measurement
                </small>
              </div>
            </article>

          </div>
        </div>


        {/* =========================
            GOOGLE ADS
        ========================= */}

        <div className="experience_backend">

          <h2>Google Ads</h2>

          <div className="experience_content">

            <article className="experience_details">
              <SiGoogleads className="experience-icons" />
              <div>
                <h4>Search Campaigns</h4>
                <small className="text-light">
                  High-Intent Search Traffic
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiGoogleads className="experience-icons" />
              <div>
                <h4>Display Campaigns</h4>
                <small className="text-light">
                  Awareness & Remarketing
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiGoogleads className="experience-icons" />
              <div>
                <h4>YouTube & Video Ads</h4>
                <small className="text-light">
                  Video Advertising
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiGoogleads className="experience-icons" />
              <div>
                <h4>Shopping Campaigns</h4>
                <small className="text-light">
                  E-commerce Advertising
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiGoogleads className="experience-icons" />
              <div>
                <h4>Performance Max</h4>
                <small className="text-light">
                  Multi-Channel Campaigns
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiGoogletagmanager className="experience-icons" />
              <div>
                <h4>Tracking & Optimization</h4>
                <small className="text-light">
                  Conversion Measurement
                </small>
              </div>
            </article>

          </div>
        </div>


        {/* =========================
            SEO & SHOPIFY
        ========================= */}

        <div className="experience_ui_cms">

          <h2>SEO & Shopify</h2>

          <div className="experience_content">

            <article className="experience_details">
              <SiShopify className="experience-icons" />
              <div>
                <h4>Shopify Store</h4>
                <small className="text-light">
                  Store Setup & Optimization
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiShopify className="experience-icons" />
              <div>
                <h4>Product Listing</h4>
                <small className="text-light">
                  Products & Collections
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiShopify className="experience-icons" />
              <div>
                <h4>Inventory Management</h4>
                <small className="text-light">
                  Product & Stock Management
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>Technical SEO</h4>
                <small className="text-light">
                  Search Performance
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>On-Page SEO</h4>
                <small className="text-light">
                  Content & Product Optimization
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiGoogleanalytics className="experience-icons" />
              <div>
                <h4>Analytics & Reporting</h4>
                <small className="text-light">
                  E-commerce Performance
                </small>
              </div>
            </article>

          </div>
        </div>


        {/* =========================
            SOFTWARE DEVELOPMENT
        ========================= */}

        <div className="experience_data">

          <h2>Software Development</h2>

          <div className="experience_content">

            <article className="experience_details">
              <SiDotnet className="experience-icons" />
              <div>
                <h4>ASP.NET Core</h4>
                <small className="text-light">
                  Web Application Development
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiCsharp className="experience-icons" />
              <div>
                <h4>C#</h4>
                <small className="text-light">
                  Backend Development
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiReact className="experience-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">
                  Modern Web Interfaces
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiJavascript className="experience-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  Interactive Web Experiences
                </small>
              </div>
            </article>

            <article className="experience_details">
              <SiMicrosoftsqlserver className="experience-icons" />
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">
                  Database Development
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience-icons" />
              <div>
                <h4>REST APIs</h4>
                <small className="text-light">
                  Integrations & Backend Services
                </small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience