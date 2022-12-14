import { graphql, useStaticQuery } from "gatsby"
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
    return site.siteMetadata
}
