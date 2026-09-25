import React from 'react'
import { Link, useParams } from 'react-router-dom'
import caseStudies from '../../Data/CaseStudies.js'
import './CaseStudy.css'

const CaseStudy = () => {
  const { slug } = useParams()

  const currentIndex = caseStudies.findIndex(
    (item) => item.slug === slug
  )

  const caseStudy = caseStudies.find(
    (item) => item.slug === slug
  )

  // Invalid URL
  if (!caseStudy) {
    return (
      <section className="case-study-not-found">
        <div className="container">
          <h2>Case Study Not Found</h2>

          <p>
            The case study you're looking for doesn't exist.
          </p>

          <a
            href="/#portfolio"
            className="btn btn-primary"
          >
            Back to Portfolio
          </a>
        </div>
      </section>
    )
  }

  const nextCaseStudy =
    caseStudies[(currentIndex + 1) % caseStudies.length]

  const {
    category,
    title,
    shortDescription,
    image,
    tags,
    introduction,
    challenge,
    strategy,
    insight,
    takeaway,
  } = caseStudy

  return (
    <section className="case-study">

      <div className="container case-study_container">

        {/* Header */}
        <div className="case-study_header">

          <span className="case-study_category">
            {category}
          </span>

          <h1>{title}</h1>

          <p className="case-study_intro">
            {shortDescription}
          </p>

          {/* Tags */}
          <div className="case-study_tags">
            {tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>

        </div>


        {/* Hero Image */}
        <div className="case-study_hero">

          <img
            src={image}
            alt={title}
          />

        </div>


        {/* Content */}
        <div className="case-study_content">

          {/* Introduction */}
          <div className="case-study_section">

            <span className="case-study_number">
              01
            </span>

            <div>
              <h2>Introduction</h2>

              <p>
                {introduction}
              </p>
            </div>

          </div>


          {/* Challenge */}
          <div className="case-study_section">

            <span className="case-study_number">
              02
            </span>

            <div>
              <h2>The Challenge</h2>

              <p>
                {challenge}
              </p>
            </div>

          </div>


          {/* Strategy */}
          <div className="case-study_section">

            <span className="case-study_number">
              03
            </span>

            <div>

              <h2>Our Approach</h2>

              <div className="case-study_strategy">

                {strategy.map((item, index) => (
                  <div
                    className="case-study_strategy-item"
                    key={index}
                  >
                    <span>✓</span>

                    <p>
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* Insight */}
          <div className="case-study_insight">

            <span>
              Key Insight
            </span>

            <blockquote>
              "{insight}"
            </blockquote>

          </div>


          {/* Takeaway */}
          <div className="case-study_section">

            <span className="case-study_number">
              04
            </span>

            <div>

              <h2>Key Takeaway</h2>

              <p>
                {takeaway}
              </p>

            </div>

          </div>

        </div>


        {/* Case Study Navigation */}
        <div className="case-study_navigation">

          <a
            href="/#portfolio"
            className="case-study_nav-btn case-study_back-btn"
          >
            ← Back To Case Studies
          </a>

          <Link
            to={`/case-studies/${nextCaseStudy.slug}`}
            className="case-study_nav-btn case-study_next-btn"
          >
            Next Case Study →
          </Link>

        </div>

      </div>

    </section>
  )
}

export default CaseStudy