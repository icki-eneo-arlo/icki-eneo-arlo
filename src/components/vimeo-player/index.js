import React, { useEffect, useRef, useState } from "react"
import Vimeo from "@vimeo/player"
import * as vimeoUtil from "../../utilities/vimeo"
import { getVideoScale } from "../../utilities"
import { ScaledPlayer } from "../scaled-player"
import * as styles from "./vimeo-player.module.css"

const VimeoPlayer = ({
  url,
  videoWidth,
  videoHeight,
  cropSafeWidth,
  cropSafeHeight,
}) => {
  const [scale, setScale] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(null)

  // Set up a hook so that we can initialize the Vimeo player when the
  // iframe actually exists
  const element = useRef(null)
  useEffect(() => {
    if (!element.current) {
      return
    }

    setScale(
      getVideoScale(
        videoWidth,
        videoHeight,
        cropSafeWidth,
        cropSafeHeight,
        window.innerWidth,
        window.innerHeight
      )
    )

    setAspectRatio(videoWidth / videoHeight)

    // Instantiate the player, keep a record of it in the state
    // Default player options
    const options = {
      background: true,
      // Fall back on these options
      muted: true,
      loop: true,
      autoplay: true,
      id: vimeoUtil.getVimeoVideoID(url),
    }
    const p = new Vimeo(element.current, options)

    // When this component is unmounted, destroy the Vimeo player
    return () => {
      p.destroy()
    }
  }, [element, url, videoWidth, videoHeight, cropSafeWidth, cropSafeHeight])

  return (
    <ScaledPlayer scale={scale} aspectRatio={aspectRatio}>
      <div ref={element} className={styles.player}></div>
    </ScaledPlayer>
  )
}

export default VimeoPlayer
