import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VimeoPlayer from "../components/vimeo-player"
import NativeVideoPlayer from "../components/native-video-player"
import * as styles from "./homepage.module.css"

const IndexPage = ({ data }) => {
  // State that can be updated
  const [videoScale, setVideoScale] = useState(null)
  const [cachedWindowWidth, setCachedWindowWidth] = useState(null)

  // Pull out and rename data from source
  const {
    cropSafeRegion,
    vimeo: vimeoSettings,
    video: videoSettings,
  } = data.site.siteMetadata.settings
  const useVimeo = vimeoSettings.enabled && vimeoSettings.url
  const { width: videoWidth, height: videoHeight } = videoSettings
  const { width: cropSafeWidth, height: cropSafeHeight } = cropSafeRegion

  // Calculate derived properties
  const videoAspectRatio = videoWidth / videoHeight
  const cropWidthAsPercentage = cropSafeWidth / videoWidth
  const cropHeightAsPercentage = cropSafeHeight / videoHeight

  // On load (and whenever the browser resizes), calculate other derived properties
  useEffect(() => {
    const calculateVideoScale = () => {
      const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window

      if (viewportWidth === cachedWindowWidth) {
        return
      }

      const viewportAspectRatio = viewportWidth / viewportHeight

      // Helpful variable names (that don't mean a whole)
      const videoScaleWhenMatchingViewportWidth = 1 // duh
      const videoScaleWhenMatchingViewportHeight =
        videoAspectRatio / viewportAspectRatio

      // Calculate what scale the video should be rendered at
      if (cropSafeWidth && cropSafeHeight) {
        console.log("Finding a crop that doesn't sacrifice our region of interest:", cropSafeWidth, cropSafeHeight);
        let targetVideoScale = 1
        let maxScaleBeforeViolatingProtectedCropWidth = 1
        let maxScaleBeforeViolatingProtectedCropHeight = 1

        if (viewportAspectRatio > videoAspectRatio) {
          // If the viewport is wider than the video is (in terms of aspect ratio, not pixel values)
          // Match the video to the viewport width
          targetVideoScale = videoScaleWhenMatchingViewportWidth
          maxScaleBeforeViolatingProtectedCropWidth =
            videoScaleWhenMatchingViewportWidth * (1 / cropWidthAsPercentage)
          maxScaleBeforeViolatingProtectedCropHeight =
            videoScaleWhenMatchingViewportHeight * (1 / cropHeightAsPercentage)
        } else if (viewportAspectRatio < videoAspectRatio) {
          // If the viewport is more narrow than the video is (in terms of aspect ratio, not pixel values)
          // Match the video to the viewport height
          targetVideoScale = videoScaleWhenMatchingViewportHeight
          maxScaleBeforeViolatingProtectedCropWidth =
            videoScaleWhenMatchingViewportWidth * (1 / cropWidthAsPercentage)
          maxScaleBeforeViolatingProtectedCropHeight =
            videoScaleWhenMatchingViewportHeight * (1 / cropHeightAsPercentage)
        }

        const maxVideoScale = Math.min(
          maxScaleBeforeViolatingProtectedCropWidth,
          maxScaleBeforeViolatingProtectedCropHeight
        )

        setVideoScale(
          targetVideoScale > maxVideoScale ? maxVideoScale : targetVideoScale
        )
      } else {
        if (viewportAspectRatio > videoAspectRatio) {
          setVideoScale(videoScaleWhenMatchingViewportWidth)
        } else if (viewportAspectRatio < videoAspectRatio) {
          setVideoScale(videoScaleWhenMatchingViewportHeight)
        }
      }

      setCachedWindowWidth(viewportWidth)
    }

    window.addEventListener("resize", calculateVideoScale)
    calculateVideoScale()

    return () => window.removeEventListener("resize", calculateVideoScale)
  }, [cachedWindowWidth, cropHeightAsPercentage, cropSafeHeight, cropSafeWidth, cropWidthAsPercentage, videoAspectRatio])

  const player = useVimeo ? (
    <VimeoPlayer url={vimeoSettings.url} />
  ) : (
    <NativeVideoPlayer />
  )
  return (
    <Layout>
      <Seo title="Home" />
      <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>
      <div className={styles.page}>
        <div style={{ height: "100%", overflow: "hidden" }}>
          <div
            style={{
              width: `${videoScale * 100}%`,
              height: "auto",
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                paddingTop: `${(1 / videoAspectRatio) * 100}%`,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {player}
              </div>
            </div>
          </div>
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
          }
          video {
            width
            height
          }
          cropSafeRegion {
            width
            height
          }
        }
      }
    }
  }
`

export default IndexPage
