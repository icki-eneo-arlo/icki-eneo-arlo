import React, { useEffect, useRef } from "react"
import Vimeo from "@vimeo/player"
import * as vimeoUtil from "../../utilities/vimeo"
import * as styles from "./vimeo-player.module.css"

const VimeoPlayer = ({ url }) => {
  // Set up a hook so that we can initialize the Vimeo player when the
  // iframe actually exists
  const element = useRef(null)
  useEffect(() => {
    if (!element.current) {
      return
    }

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
  }, [element, url])

  return <div ref={element} className={styles.player}></div>
}

export default VimeoPlayer
