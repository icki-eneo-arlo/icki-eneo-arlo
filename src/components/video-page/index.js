import React, { useEffect, useState } from "react"

import VimeoPlayer from "../vimeo-player"
import NativeVideoPlayer from "../native-video-player"
import ScaledPlayer from "../scaled-player"
import { getVideoScale } from "../../utilities"
import * as styles from "./video-page.module.css"

import {
  NATIVE_VIDEO_TYPE,
  VIMEO_VIDEO_TYPE,
  BY_VIEWPORT_ASPECT_RATIO,
} from "../../utilities/constants"

const VideoPage = ({ sizes, mode = "by-viewport-width" }) => {
  const [player, setPlayer] = useState(null)
  const [scale, setScale] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(null)
  const [viewportWidth, setViewportWidth] = useState(null)

  useEffect(() => {
    const getVideoSize = () => {
      if (mode === BY_VIEWPORT_ASPECT_RATIO) {
        const viewportAspectRatio = window.innerWidth / window.innerHeight
        const sizesByNearestAspectRatio = sizes
          .map(size => {
            size.aspectRatio = size.videoWidth / size.videoHeight
            size.aspectRatioDelta = size.aspectRatio - viewportAspectRatio
            return size
          })
          .sort((a, b) => {
            return a.aspectRatioDelta < b.aspectRatioDelta ? 1 : -1
          })
        console.log({ sizesByNearestAspectRatio })
        return sizesByNearestAspectRatio[0]
      } else {
        let smallestAppropriateSize = sizes.find(size => {
          return window.innerWidth <= size.videoWidth
        })
        if (!smallestAppropriateSize) {
          smallestAppropriateSize = sizes[sizes.length - 1]
        }
        return smallestAppropriateSize
      }
    }

    const setVideoSize = () => {
      const size = getVideoSize()
      setScale(
        getVideoScale(
          size.videoWidth,
          size.videoHeight,
          size.cropSafeWidth,
          size.cropSafeHeight,
          window.innerWidth,
          window.innerHeight
        )
      )
      setAspectRatio(size.videoWidth / size.videoHeight)

      if (size.type === NATIVE_VIDEO_TYPE) {
        setPlayer(<NativeVideoPlayer url={size.url} />)
      } else if (size.type === VIMEO_VIDEO_TYPE) {
        setPlayer(<VimeoPlayer url={size.url} />)
      }
    }

    const handleHorizontalResize = () => {
      if (viewportWidth === window.innerWidth) {
        return
      }

      setVideoSize()
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleHorizontalResize)
    handleHorizontalResize()
    return window.removeEventListener("resize", setVideoSize)
  }, [sizes, viewportWidth])

  return (
    <div className={styles.page}>
      <div style={{ height: "100%", overflow: "hidden" }}>
        <ScaledPlayer scale={scale} aspectRatio={aspectRatio}>
          {player}
        </ScaledPlayer>
      </div>
    </div>
  )
}

export default VideoPage
