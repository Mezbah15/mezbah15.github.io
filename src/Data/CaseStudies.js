import META_CPM from '../Assets/Meta-Ads-Cost.png'
import META_CREATIVE from '../Assets/Meta-Ad-Formats.png'
import META_TRACKING from '../Assets/Unbelievable-Browser-Statistics.webp'
import GOOGLE_SEARCH from '../Assets/search-intent.jpg'
import GOOGLE_DISPLAY from '../Assets/performance-marketing.png'
import SHOPIFY from '../Assets/shopify-ecommerce.webp'


const caseStudies = [
  {
    slug: 'meta-cpm',

    category: 'META ADS · MARKET ANALYSIS',

    title:
      'The Same Meta Ad Can Cost Very Differently Across Markets',

    shortDescription:
      'Understanding CPM, competition, audience behavior and market conditions before scaling campaigns.',

    image: META_CPM,

    tags: ['Meta Ads', 'CPM', 'Market Research'],

    introduction:
      'Advertising costs are not the same across every market. A campaign that performs at one cost in one country can behave very differently in another market.',

    challenge:
      'One of the most common mistakes in paid advertising is comparing CPM between countries without considering the market conditions behind those numbers.',

    strategy: [
      'Compare CPM across target markets.',
      'Analyze audience size and competition.',
      'Review campaign objectives and placements.',
      'Compare CPM with CTR, CPC and conversion performance.',
      'Evaluate the overall economics of the campaign rather than focusing on one metric.'
    ],

    insight:
      "Lower CPM does not automatically mean better performance. The real question is what happens after the impression.",

    takeaway:
      'Market selection and campaign strategy should be based on the complete conversion journey, not CPM alone.'
  },

  {
    slug: 'meta-creative',

    category: 'META ADS · CREATIVE STRATEGY',

    title:
      'Why Creative Format Matters in Meta Ads',

    shortDescription:
      'Testing video, static and UGC-style creative to understand what drives stronger engagement and conversions.',

    image: META_CREATIVE,

    tags: ['Meta Ads', 'Creative Testing', 'CRO'],

    introduction:
      'Creative is one of the most important components of a Meta advertising campaign. Different audiences can respond very differently to the same message and creative format.',

    challenge:
      'A campaign can have a well-defined audience and strong targeting but still struggle if the creative fails to capture attention or communicate the offer clearly.',

    strategy: [
      'Test video against static creative.',
      'Experiment with different opening hooks.',
      'Test UGC-style content and product demonstrations.',
      'Compare different offers and messages.',
      'Monitor creative fatigue as campaigns scale.'
    ],

    insight:
      'Video is not automatically better than static creative. The right creative depends on the product, audience, message and stage of the customer journey.',

    takeaway:
      'Creative testing should be treated as an ongoing part of campaign optimization rather than a one-time task.'
  },

  {
    slug: 'meta-tracking',

    category: 'META ADS · TRACKING',

    title:
      'Better Measurement Starts Beyond the Browser',

    shortDescription:
      'Exploring Pixel and Conversions API to build a stronger measurement foundation for Meta campaigns.',

    image: META_TRACKING,

    tags: ['Meta Ads', 'CAPI', 'Tracking'],

    introduction:
      'Modern advertising depends heavily on reliable conversion data. Tracking helps advertisers understand what happens after someone interacts with an advertisement.',

    challenge:
      'Browser-based tracking can face limitations. Building a stronger measurement setup requires understanding how browser and server-side events work together.',

    strategy: [
      'Implement Meta Pixel events.',
      'Configure appropriate conversion events.',
      'Connect server-side event tracking through Conversions API.',
      'Use event deduplication where browser and server events overlap.',
      'Monitor the quality and consistency of conversion signals.'
    ],

    insight:
      'Your advertising strategy is only as reliable as the conversion data feeding it.',

    takeaway:
      'A strong measurement foundation helps businesses make better optimization and budget-allocation decisions.'
  },

  {
    slug: 'google-search',

    category: 'GOOGLE ADS · SEARCH',

    title:
      'Search Starts With Understanding Intent',

    shortDescription:
      'How keyword research and search intent shape the foundation of effective Google Search campaigns.',

    image: GOOGLE_SEARCH,

    tags: ['Google Ads', 'Keywords', 'Search Intent'],

    introduction:
      'Google Search gives advertisers an opportunity to reach people who are actively looking for a product, service or solution.',

    challenge:
      'High search volume alone does not guarantee valuable traffic. The important question is whether the search represents meaningful business intent.',

    strategy: [
      'Research relevant search terms.',
      'Group keywords according to search intent.',
      'Use appropriate keyword match types.',
      'Build negative keyword lists.',
      'Analyze actual search terms.',
      'Align advertisements with landing-page content.'
    ],

    insight:
      "The goal is not simply to find keywords with high search volume. It is to identify searches that represent valuable business intent.",

    takeaway:
      'Strong Search campaigns begin with understanding what people are actually trying to accomplish when they search.'
  },

  {
    slug: 'google-display',

    category: 'GOOGLE ADS · DISPLAY',

    title:
      "When Cheap Impressions Aren't the Goal",

    shortDescription:
      'Understanding the difference between low-cost reach and meaningful conversion performance.',

    image: GOOGLE_DISPLAY,

    tags: ['Google Display', 'CPM', 'Remarketing'],

    introduction:
      'Display advertising can help businesses reach audiences beyond active searchers and can play an important role in awareness and remarketing strategies.',

    challenge:
      'A low CPM can look attractive at first, but inexpensive impressions do not necessarily produce inexpensive conversions.',

    strategy: [
      'Compare CPM and CTR.',
      'Analyze CPC and conversion rate.',
      'Evaluate CPA rather than impressions alone.',
      'Separate prospecting from remarketing activity.',
      'Compare Display performance with Search based on campaign objectives.'
    ],

    insight:
      'A low CPM tells you that impressions are inexpensive. It does not necessarily tell you that customers are inexpensive to acquire.',

    takeaway:
      'Campaign performance should always be evaluated against the business objective rather than a single advertising metric.'
  },

  {
    slug: 'shopify',

    category: 'E-COMMERCE · SHOPIFY',

    title:
      'Building an E-Commerce Foundation That Can Scale',

    shortDescription:
      'Why platform choice matters when your store needs marketing, analytics and conversion optimization to work together.',

    image: SHOPIFY,

    tags: ['Shopify', 'E-Commerce', 'CRO'],

    introduction:
      'An e-commerce platform is more than a storefront. It becomes the foundation connecting products, payments, analytics, marketing tools and the customer journey.',

    challenge:
      'Businesses need an e-commerce environment that is practical to manage while supporting marketing activities and future growth.',

    strategy: [
      'Evaluate the store structure and customer journey.',
      'Connect analytics and advertising platforms.',
      'Use relevant apps and integrations.',
      'Optimize product and collection pages.',
      'Build a foundation suitable for ongoing conversion optimization.'
    ],

    insight:
      'The right e-commerce platform should make it easier for marketing, analytics and conversion optimization to work together.',

    takeaway:
      'Shopify can provide a practical hosted foundation for businesses of different sizes, depending on their operational and technical requirements.'
  }
]

export default caseStudies