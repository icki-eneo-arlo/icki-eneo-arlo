import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import shareImage from "../images/share-image.jpg"

function Seo() {
  // Get data from the config file
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  // Prepare data
  const lang = "en"
  const { title, description } = site.siteMetadata;

  // Construct an array of meta tags that Helmet will shove into the <head>

  const metaTags = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
  },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      property: 'og:image',
      content: shareImage,
    },
    {
      name: 'twitter:image',
      content: shareImage,
    }
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={metaTags}
    />
  )
}

export default Seo
