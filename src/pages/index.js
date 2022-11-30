import * as React from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/sections/Intro';
import '../css/dnddevelopments.scss';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const siteMetadata = {
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
  ]
};

const IndexPage = ({ data }) => {
  console.log('data', data);
  const { about, contact, intro, portfolio, services } = data.markdownRemark.frontmatter;
  return (
    <>
      <Navbar {...siteMetadata} />
      <Intro {...intro} />
    </>
  )
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const Head = ({ data }) => (
  <>
    <title>D &amp; D Developments | Midlands Extensions, Renovations, New Builds and Landscaping</title>
    <meta name="description" content={siteMetadata.description} />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/img/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/img/favicon-16x16.png"
      sizes="16x16"
    />

    <link
      rel="mask-icon"
      href="/img/safari-pinned-tab.svg"
      color="#ff4400"
    />
    <meta name="theme-color" content={siteMetadata.theme} />
    <meta name="msapplication-navbutton-color" content={siteMetadata.theme} />
    <meta name="apple-mobile-web-app-status-bar-style" content={siteMetadata.theme} />

    <meta property="og:type" content="business.business" />
    <meta property="og:title" content={siteMetadata.title} />
    <meta property="og:url" content="/" />
    <meta property="og:image" content="/img/og-image.jpg" />

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css' />  
  </>
);

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          title
          heading
          subheading
        }
        services {
          heading
          description
          services {
            heading
            description
          }
        }
        portfolio {
          heading
          description
          jobs {
            location
            services
          }
        }
        about {
          heading
          description
          team {
            name
            info
          }
        }
        contact {
          heading
          description
          background
          links {
            type
            label
            address
          }
        },
      }
    }
  }
`;