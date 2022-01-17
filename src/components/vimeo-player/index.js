import React, { useEffect, useRef } from 'react'
import Vimeo from '@vimeo/player'
import * as vimeoUtil from "../../utilities/vimeo";
import * as styles from "./vimeo-player.module.css";

const VimeoPlayer = ({ url, options }) => {
  // Default player options
  const defaultOptions = {
    background: true,
    // Fall back on these options
    muted: true,
    loop: true,
    autoplay: true,
  }

  // Merged options
  options = options
    ? Object.sign({}, defaultOptions, options)
    : defaultOptions

  // Get the vimeo video ID
  if (url) {
    options.id = vimeoUtil.getVimeoVideoID(url);
  }

  // Set up a hook so that we can initialize the Vimeo player when the
  // iframe actually exists
  const element = useRef(null)
  useEffect(() => {
    if (!element.current) {
      return
    }

    // Instantiate the player, keep a record of it in the state
    const p = new Vimeo(element.current, options)

    // When this component is unmounted, destroy the Vimeo player
    return () => {
      p.destroy()
    }
  }, [element, options])

  return options.id ? (
    <div ref={element} className={styles.player}></div>
  ) : (
    <></>
  )
}

export default VimeoPlayer
