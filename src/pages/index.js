import * as React from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Intro from '../components/sections/Intro';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import '../css/dnddevelopments.scss';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => {
  console.log(data);
  const { about, contact, intro, portfolio, services, site } = data.markdownRemark.frontmatter;
  return (
    <>
      <Navbar {...site} />
      <Intro {...intro} />
      <Section {...services}>
        <Services services={services.services} />
      </Section>
      <Section {...about}>
        <About team={about.team} />
      </Section>
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

export const Head = ({ data }) => {
  const { description, title, theme } = data.markdownRemark.frontmatter.site;
  return (
  <>
    <title>D &amp; D Developments | {description}</title>
    <meta name="description" content={description} />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/images/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/images/favicon-16x16.png"
      sizes="16x16"
    />

    <link
      rel="mask-icon"
      href="/images/safari-pinned-tab.svg"
      color="#ff4400"
    />
    <meta name="theme-color" content={theme} />
    <meta name="msapplication-navbutton-color" content={theme} />
    <meta name="apple-mobile-web-app-status-bar-style" content={theme} />

    <meta property="og:type" content="business.business" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="/" />
    <meta property="og:image" content="/images/og-image.jpg" />

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css' />  
  </>
)};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        site {
          title
          description
          theme
          pages
          services
        }
        intro {
          title
          heading
          subheading
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        services {
          heading
          description
          services {
            heading
            description
            image {
              publicURL
            }
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
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
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