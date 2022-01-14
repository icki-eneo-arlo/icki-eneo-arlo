import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VimeoPlayer from "../components/vimeo-player"
import NativeVideoPlayer from "../components/native-video-player"
import * as styles from './homepage.module.css'

const IndexPage = ({ data }) => {
  const vimeoSettings = data.site.siteMetadata.settings.vimeo
  const useVimeo = vimeoSettings.enabled && vimeoSettings.url
  const player = useVimeo ? (
    <VimeoPlayer url={vimeoSettings.url} aspectRatio={vimeoSettings.aspectRatio} />
) : (
    <NativeVideoPlayer />
  )
  return (
    <Layout>
      <Seo title="Home" />
      <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>
      <div className={styles.page}>
        { player }
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
            aspectRatio
          }
        }
      }
    }
  }
`

export default IndexPage
