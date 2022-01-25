import React, { useEffect, useState } from "react"

import VimeoPlayer from "../vimeo-player"
import NativeVideoPlayer from "../native-video-player"
import ScaledPlayer from "../scaled-player"
import { getVideoScale } from "../../utilities"
import * as styles from "./video-page.module.css"

import { NATIVE_VIDEO_TYPE, VIMEO_VIDEO_TYPE } from "../../utilities/constants"

const VideoPage = ({ sizes }) => {
  const [player, setPlayer] = useState(null)
  const [scale, setScale] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(null)

  useEffect(() => {
    const getBestSize = () => {
      let smallestAppropriateSize = sizes.find(size => {
        return window.innerWidth <= size.videoWidth
      })
      if (!smallestAppropriateSize) {
        smallestAppropriateSize = sizes[sizes.length - 1]
      }
      return smallestAppropriateSize
    }

    const setVideoSize = () => {
      const size = getBestSize()
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

    window.addEventListener("resize", setVideoSize)
    setVideoSize()
    return window.removeEventListener("resize", setVideoSize)
  }, [sizes])

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

export default VideoPage;
