import { graphql } from "gatsby"
import React from "react"

import VideoPage from "../components/video-page";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { VIMEO_VIDEO_TYPE } from "../utilities/constants"

const VimeoPage = ({ data }) => {
  // Manually draft some source data
  const sizes = [
    {
      videoWidth: 750,
      videoHeight: 1334,
      cropSafeWidth: 400,
      cropSafeHeight: 800,
      url: "https://vimeo.com/669953810",
      type: VIMEO_VIDEO_TYPE
    },
    {
      videoWidth: 1024,
      videoHeight: 576,
      cropSafeWidth: 500,
      cropSafeHeight: 500,
      url: "https://vimeo.com/669965690",
      type: VIMEO_VIDEO_TYPE
    },
  ]

  return (
    <Layout>
      <Seo />
      <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>
      <VideoPage sizes={sizes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query VimeoPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default VimeoPage
