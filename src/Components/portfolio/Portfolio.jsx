import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'
import META_CPM from '../../Assets/Meta-Ads-Cost.png'
import META_CREATIVE from '../../Assets/Meta-Ad-Formats.png'
import META_TRACKING from '../../Assets/Unbelievable-Browser-Statistics.webp'
import GOOGLE_SEARCH from '../../Assets/search-intent.jpg'
import GOOGLE_DISPLAY from '../../Assets/performance-marketing.png'
import SHOPIFY from '../../Assets/shopify-ecommerce.webp'

const caseStudies = [
  {
    id: 1,
    category: 'META ADS · MARKET ANALYSIS',
    image: META_CPM,
    title: 'The Same Meta Ad Can Cost Very Differently Across Markets',
    description:
      'Understanding CPM, competition, audience behavior and market conditions before scaling campaigns.',
    tags: ['Meta Ads', 'CPM', 'Market Research'],
    slug: '/case-studies/meta-cpm',
  },
  {
    id: 2,
    category: 'META ADS · CREATIVE STRATEGY',
    image: META_CREATIVE,
    title: 'Why Creative Format Matters in Meta Ads',
    description:
      'Testing video, static and UGC-style creative to understand what drives stronger engagement and conversions.',
    tags: ['Meta Ads', 'Creative Testing', 'CRO'],
    slug: '/case-studies/meta-creative',
  },
  {
    id: 3,
    category: 'META ADS · TRACKING',
    image: META_TRACKING,
    title: 'Better Measurement Starts Beyond the Browser',
    description:
      'Exploring Pixel and Conversions API to build a stronger measurement foundation for Meta campaigns.',
    tags: ['Meta Ads', 'CAPI', 'Tracking'],
    slug: '/case-studies/meta-tracking',
  },
  {
    id: 4,
    category: 'GOOGLE ADS · SEARCH',
    image: GOOGLE_SEARCH,
    title: 'Search Starts With Understanding Intent',
    description:
      'How keyword research and search intent shape the foundation of effective Google Search campaigns.',
    tags: ['Google Ads', 'Keywords', 'Search Intent'],
    slug: '/case-studies/google-search',
  },
  {
    id: 5,
    category: 'GOOGLE ADS · DISPLAY',
    image: GOOGLE_DISPLAY,
    title: "When Cheap Impressions Aren't the Goal",
    description:
      'Understanding the difference between low-cost reach and meaningful conversion performance.',
    tags: ['Google Display', 'CPM', 'Remarketing'],
    slug: '/case-studies/google-display',
  },
  {
    id: 6,
    category: 'E-COMMERCE · SHOPIFY',
    image: SHOPIFY,
    title: 'Building an E-Commerce Foundation That Can Scale',
    description:
      'Why platform choice matters when your store needs marketing, analytics and conversion optimization to work together.',
    tags: ['Shopify', 'E-Commerce', 'CRO'],
    slug: '/case-studies/shopify',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio_section">

        {/* Section Heading */}
        <div className="portfolio_header">
          <h5>Selected Case Studies</h5>

          <h2>How We Think About Paid Growth</h2>

          <p>
            We don't believe in one-size-fits-all advertising.
            Explore the strategies, technologies and decisions
            behind effective digital marketing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="portfolio_filters">
          <button className="portfolio_filter active">All</button>
          <button className="portfolio_filter">Meta Ads</button>
          <button className="portfolio_filter">Google Ads</button>
          <button className="portfolio_filter">E-Commerce</button>
        </div>

        {/* Case Studies */}
        <div className="portfolio_container">

          {caseStudies.map(
            ({ id, category, image, title, description, tags, slug }) => {
              return (
                <article className="portfolio_item" key={id}>

                  {/* Image */}
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>

                  {/* Content */}
                  <div className="portfolio_item-content">

                    <span className="portfolio_item-category">
                      {category}
                    </span>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    {/* Tags */}
                    <div className="portfolio_item-tags">
                      {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link to={slug} className="portfolio_case-link">
                      Read Case Study
                      <span>→</span>
                    </Link>

                  </div>

                </article>
              )
            }
          )}

        </div>

        {/* Bottom CTA */}
        <div className="portfolio_bottom">

          <div>
            <h3>Have a campaign you're planning to launch?</h3>

            <p>
              Let's discuss your goals and find the right
              advertising strategy for your business.
            </p>
          </div>

          <a href="https://calendly.com/web-dev-digital-marketer/dm" className="btn btn-primary">
            Book a Consultation
          </a>

        </div>

      </div>
    </section>
  )
}

export default Portfolio