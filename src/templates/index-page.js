import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Intro from '../components/sections/Intro';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import Section from '../components/Section';

export const IndexPageTemplate = ({
  intro,
  services,
  portfolio,
  about
}) => {
  return (
    <React.Fragment>
      <Intro {...intro} />
      <Section {...services}>
        <Services services={services.services} />
      </Section>
      <Section {...portfolio}>
        <Portfolio jobs={portfolio.jobs} />
      </Section>
      <Section {...about}>
        <About team={about.team} />
      </Section>
    </React.Fragment>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.object.isRequired,
  services: PropTypes.shape({
    services: PropTypes.array,
  }),
  portfolio: PropTypes.shape({
    portfolio: PropTypes.array,
  }),
  about: PropTypes.shape({
    about: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        services={frontmatter.services}
        portfolio={frontmatter.portfolio}
        about={frontmatter.about}
      />
    </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          title
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
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
                fluid(maxWidth: 225, maxHeight: 225, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            info
          }
        }
      }
    }
  }
`;