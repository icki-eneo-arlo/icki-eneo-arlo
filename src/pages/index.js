import { graphql } from "gatsby"
import React from "react"

import VideoPage from "../components/video-page";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { VIMEO_VIDEO_TYPE, BY_VIEWPORT_ASPECT_RATIO } from "../utilities/constants"

const Homepage = ({ data }) => {
  // Manually draft some source data
  const sizes = [
    {
      videoWidth: 750,
      videoHeight: 1334,
      cropSafeWidth: 400,
      cropSafeHeight: 800,
      url: "https://vimeo.com/674889833",
      type: VIMEO_VIDEO_TYPE
    },
    {
      videoWidth: 1024,
      videoHeight: 576,
      cropSafeWidth: 576,
      cropSafeHeight: 576,
      url: "https://vimeo.com/674889802",
      type: VIMEO_VIDEO_TYPE
    },
  ]

  return (
    <Layout>
      <Seo />
      <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>
      <VideoPage sizes={sizes} mode={BY_VIEWPORT_ASPECT_RATIO} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Homepage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Homepage
