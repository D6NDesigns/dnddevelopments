/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'D & D Developments',
    description:
      'Midlands Extensions, Renovations, New Builds and Landscaping',
    theme: '#E8B90E',
    pages: [
      'Services',
      'Portfolio',
      'About',
      'Contact'
    ],
    services: [
      'Extensions',
      'Renovations',
      'New Builds',
      'Landscaping'
    ],
    siteUrl: `https://dandddevelopments.uk/`,
  },
  plugins: ['gatsby-plugin-sass', "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};