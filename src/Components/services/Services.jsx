import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { SiFacebook, SiShopify, SiGoogle,SiPinterest } from 'react-icons/si'
import { FaPlus } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">

      <h5 className="text-light">What We Can Help With</h5>
      <h2>Services & Pricing</h2>

      {/* =====================================================
          PAID SOCIAL
      ===================================================== */}

      <div className="service_category" style={{ marginTop: '80px' }}>

        <div className="service_category_header">

          <SiFacebook className="service_category_icon"/> <SiGoogle className="service_category_icon"/> <SiPinterest className="service_category_icon"/>

          <div>
            <h3>Paid Social</h3>

            <p className="text-light">
              Meta + Google Ads management focused on traffic,
              leads and conversions.
            </p>
          </div>

        </div>


        <div className="services_container" style={{ marginTop: '40px' }}>


          {/* =========================
              01 — FIXED BUDGET
          ========================= */}

          <article className="service pricing_card featured">

            <div className="pricing_badge">
              SIMPLE & TRANSPARENT
            </div>

            <div className="service_header">

              <h3>Fixed Budget</h3>

              <div className="service_price">
              <span>From $40</span>
              <small>/ month</small>
              </div>

            </div>


            <p className="service_description">
              Choose a fixed monthly package based on the number
              of ads you need managed.
            </p>


            <div className="pricing_options">

            <div className="pricing_option">
              <span className="pricing_label">Starter</span>
              <strong>Up to 10 ads</strong>
              <b>$40 <small>/ month</small></b>
            </div>

            <div className="pricing_option">
              <span className="pricing_label">Growth</span>
              <strong>Up to 40 ads</strong>
              <b>$150 <small>/ month</small></b>
            </div>

            <div className="pricing_option pricing_option_featured">
              <span className="pricing_label">Scale</span>
              <strong>Up to 100 ads</strong>
              <b>$360 <small>/ month</small></b>
            </div>
          </div>

            <ul className="service_list">

              <li>
                <BiCheck className="service_list-icon" />
                <p>Meta & Google Ads management</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Audience & keyword research</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Campaign setup & optimization</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Conversion tracking</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Performance monitoring</p>
              </li>

            </ul>


            <div className="service_note">
              <strong>Note:</strong> Advertising spend is separate
              from the management fee.
            </div>
            <a style={{marginTop: '10px'}} href="#contact" className="service_action">Get Started</a>
          </article>


          {/* =========================
              02 — COMMISSION
          ========================= */}

          <article className="service pricing_card">

            <div className="service_header">

              <h3>Commission Based</h3>

              <div className="service_price">
                <span>10%</span>
                <small>of ad spend</small>
              </div>

            </div>


            <p className="service_description">
              Pay a percentage of your advertising spend instead
              of a fixed monthly management fee.
            </p>


            <div className="commission_box">

              <div>
                <strong>Under $1,000</strong>
                <span>10% commission</span>
              </div>

              <div>
                <strong>$1,000+ spend</strong>
                <span>7% commission</span>
              </div>

            </div>


            <ul className="service_list">

              <li>
                <BiCheck className="service_list-icon" />
                <p>Meta & Google Ads management</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Campaign setup & optimization</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Audience & keyword research</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Conversion tracking</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Performance reporting</p>
              </li>

            </ul>


            <div className="service_note">
              <strong>Example:</strong> $1,500 ad spend =
              $105 management fee at 7%.
            </div>
            <a style={{marginTop: '10px'}} href="#contact" className="service_action">Get Started</a>
          </article>


          {/* =========================
              03 — PERFORMANCE
          ========================= */}

          <article className="service pricing_card">

            <div className="service_header">

              <h3>Performance Based</h3>

              <div className="service_price">
                <span>0%</span>
                <small>upfront</small>
              </div>

            </div>


            <p className="service_description">
              No upfront management fee. Your service fee is tied
              to the agreed net profit generated from the campaign.
            </p>


            <div className="performance_box">

              <strong>30%</strong>

              <span>
                of agreed net profit
              </span>

            </div>


            <ul className="service_list">

              <li>
                <BiCheck className="service_list-icon" />
                <p>Meta & Google Ads management</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Campaign strategy & setup</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Conversion tracking</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Continuous optimization</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Performance analysis</p>
              </li>

            </ul>


            <div className="service_note">
              <strong>Terms:</strong> Profit calculation,
              attribution and percentage are agreed before starting.
            </div>
            <a style={{marginTop: '10px'}} href="#contact" className="service_action">Get Started</a>
          </article>

        </div>
      </div>



      {/* =====================================================
          COMPLETE WEB SOLUTION
      ===================================================== */}

      <div className="service_category" style={{ marginTop: '80px' }}>

        <div className="service_category_header">

          <SiShopify className="service_category_icon" />

          <div>

            <h3>Complete Web Solution</h3>

            <p className="text-light">
              Shopify development, product management, SEO
              and marketing tracking.
            </p>

          </div>

        </div>


        <div className="services_container" style={{ marginTop: '40px' }} >


          {/* =========================
              04 — SHOPIFY LAUNCH
          ========================= */}

          <article className="service pricing_card featured">

            <div className="pricing_badge">
              COMPLETE SETUP
            </div>


            <div className="service_header">

              <h3>Shopify Launch</h3>

              <div className="service_price">
                <span>$180</span>
                <small>project</small>
              </div>

            </div>


            <p className="service_description">
              Get your Shopify store ready for e-commerce,
              advertising and conversion tracking.
            </p>


            <ul className="service_list">

              <li>
                <BiCheck className="service_list-icon" />
                <p>Shopify store development</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Theme included</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Up to 20 product listings</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Collections & navigation setup</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Basic SEO setup</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Meta Pixel & CAPI</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Google Tag Manager</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Google Analytics & conversion tracking</p>
              </li>

            </ul>


            <div className="service_note">
              <strong>$180 includes:</strong> Theme + development +
              up to 20 products + tracking setup.
            </div>
            <a style={{marginTop: '10px'}} href="#contact" className="service_action">Get Started</a>

          </article>



          {/* =========================
              05 — SHOPIFY MANAGEMENT
          ========================= */}

          <article className="service pricing_card">

            <div className="service_header">

              <h3>Shopify Management</h3>

              <div className="service_price">
                <span>$100</span>
                <small>/ month</small>
              </div>

            </div>


            <p className="service_description">
              Ongoing Shopify support for businesses that already
              have a store and need regular product and SEO work.
            </p>


            <ul className="service_list">

              <li>
                <BiCheck className="service_list-icon" />
                <p>Up to 30 product listings</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Product & collection management</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Product SEO optimization</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>On-page SEO improvements</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Store content updates</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Basic performance monitoring</p>
              </li>

            </ul>


            <div className="service_note">
              <strong>$100 / month</strong> for ongoing
              Shopify listing and SEO support.
            </div>
            <a style={{marginTop: '10px'}} href="#contact" className="service_action">Get Started</a>

          </article>
            


          {/* =========================
              06 — MONTHLY PARTNER
          ========================= */}

          <article className="service pricing_card">

            <div className="service_header">

              <h3>Monthly Partner</h3>

              <div className="service_price">
                <span>Custom</span>
                <small>/ month</small>
              </div>

            </div>


            <p className="service_description">
              Need regular help with paid advertising or Shopify?
              Hire me monthly for ongoing marketing and web support.
            </p>


            <ul className="service_list">

              <li>
                <BiCheck className="service_list-icon" />
                <p>Paid Social management</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Shopify product listing</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>SEO & content updates</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Tracking & analytics support</p>
              </li>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Ongoing website support</p>
              </li>

            </ul>


            <div className="service_note">
              <strong>Custom monthly threshold:</strong> Pricing
              depends on workload, business size and required support.
            </div>
            <a style={{marginTop: '10px'}} href="#contact" className="service_action">Get Started</a>
          </article>

        </div>
      </div>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}
    <div className="custom_service" style={{ marginTop: '80px' }}>
    <div className="custom_service_icon">
        <FaPlus />
    </div>

    <h3>Custom Service</h3>

    <p>
        Need something different? Let's discuss your specific marketing needs.
    </p>
            <a style={{marginTop: '10px'}} href="https://calendly.com/web-dev-digital-marketer/dm" className="service_action btn ">Book a Free Consultation →</a>
    </div>
    </section>
  )
}

export default Services
