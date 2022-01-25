import { graphql } from "gatsby"
import React from "react"

import VideoPage from "../components/video-page";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { NATIVE_VIDEO_TYPE } from "../utilities/constants"

import portraitVideo from "../images/2022-01-24--portrait--crf-24--width-750.mp4"
import landscapeVideo1024 from "../images/2022-01-24--landscape--crf-18--width-1024.mp4"
import landscapeVideo2048 from "../images/2022-01-24--landscape--crf-18--width-2048.mp4"
import landscapeVideo3840 from "../images/2022-01-24--landscape--original.mp4"

const IndexPage = ({ data }) => {
  // Manually draft some source data
  const sizes = [
    {
      videoWidth: 750,
      videoHeight: 1334,
      cropSafeWidth: 400,
      cropSafeHeight: 800,
      url: portraitVideo,
      type: NATIVE_VIDEO_TYPE
    },
    {
      videoWidth: 1024,
      videoHeight: 576,
      cropSafeWidth: 500,
      cropSafeHeight: 500,
      url: landscapeVideo1024,
      type: NATIVE_VIDEO_TYPE
    },
    {
      videoWidth: 2048,
      videoHeight: 1152,
      cropSafeWidth: 750,
      cropSafeHeight: 900,
      url: landscapeVideo2048,
      type: NATIVE_VIDEO_TYPE
    },
    {
      videoWidth: 3840,
      videoHeight: 2160,
      cropSafeWidth: 1800,
      cropSafeHeight: 2000,
      url: landscapeVideo3840,
      type: NATIVE_VIDEO_TYPE
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
  query Homepage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
