import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VimeoPlayer from "../components/vimeo-player"
import NativeVideoPlayer from "../components/native-video-player"
import * as styles from "./homepage.module.css"

import portraitVideo from "../images/portrait-orientation--width-750--vbr-1-pass--target-3mbps.mp4"
import landscapeVideo1024 from "../images/20220117--crf-18--width-1024.mp4"
import landscapeVideo2048 from "../images/20220117--crf-21--width-2048.mp4"
import landscapeVideo3840 from "../images/20220117--original.mp4"

const IndexPage = ({ data }) => {
  // Pull out and rename data from source
  const {
    vimeo: vimeoSettings,
  } = data.site.siteMetadata.settings
  const useVimeo = vimeoSettings.enabled && vimeoSettings.url

  // Manually draft some source data
  const sizes = [
    {
      videoWidth: 750,
      videoHeight: 1334,
      cropSafeWidth: 400,
      cropSafeHeight: 800,
      url: portraitVideo,
    },
    {
      videoWidth: 1024,
      videoHeight: 576,
      cropSafeWidth: 500,
      cropSafeHeight: 500,
      url: landscapeVideo1024,
    },
    {
      videoWidth: 2048,
      videoHeight: 1152,
      cropSafeWidth: 750,
      cropSafeHeight: 900,
      url: landscapeVideo2048,
    },
    {
      videoWidth: 3840,
      videoHeight: 2160,
      cropSafeWidth: 1800,
      cropSafeHeight: 2000,
      url: landscapeVideo3840,
    },
  ]

  // On load (and whenever the browser resizes), calculate other derived properties
  const player = useVimeo ? (
    <VimeoPlayer {...vimeoSettings} />
  ) : (
    <NativeVideoPlayer sizes={sizes} />
  )
  return (
    <Layout>
      <Seo />
      <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>
      <div className={styles.page}>
        <div style={{ height: "100%", overflow: "hidden" }}>
          { player }
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query OldSizesHomePage {
    site {
      siteMetadata {
        title
        settings {
          vimeo {
            enabled
            url
            videoWidth
            videoHeight
            cropSafeWidth
            cropSafeHeight
          }
        }
      }
    }
  }
`

export default IndexPage
