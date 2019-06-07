import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Intro from '../components/sections/Intro';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import useSiteMetadata from '../components/SiteMetadata';
import Section from '../components/Section';

export const IndexPageTemplate = ({
  intro,
  services,
}) => {
  const siteMetadata = useSiteMetadata();
  return (
    <React.Fragment>
      <Intro {...intro} />
      <Section title={siteMetadata.pages[0]} description={services.description}>
        <Services services={services.services} />
      </Section>
      <Section title={siteMetadata.pages[1]} description={'Previous work by D&D, click an image to view more'}>
        <Portfolio jobs={siteMetadata.jobs} />
      </Section>
      <Section title={siteMetadata.pages[2]} description={'About D&D'}>
        <About about={siteMetadata.about} />
      </Section>
    </React.Fragment>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.object.isRequired,
  description: PropTypes.string,
  services: PropTypes.shape({
    services: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        description={frontmatter.description}
        services={frontmatter.services}
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
      }
    }
  }
`;