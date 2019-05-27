import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            pages
            services
            jobs {
              title
              services
            }
            about {
              name
              info
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
