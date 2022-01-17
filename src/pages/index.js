import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VimeoPlayer from "../components/vimeo-player"
import NativeVideoPlayer from "../components/native-video-player"
import * as styles from "./homepage.module.css"

const IndexPage = ({ data }) => {
  // Pull out and rename data from source
  const {
    vimeo: vimeoSettings,
  } = data.site.siteMetadata.settings
  const useVimeo = vimeoSettings.enabled && vimeoSettings.url

  // On load (and whenever the browser resizes), calculate other derived properties
  const player = useVimeo ? (
    <VimeoPlayer {...vimeoSettings} />
  ) : (
    <NativeVideoPlayer />
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
  query Homepage {
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
