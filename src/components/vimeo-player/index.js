import React, { useState, useEffect, useRef } from "react"
import Vimeo from "@vimeo/player"
import * as vimeoUtil from "../../utilities/vimeo"
import * as styles from "./vimeo-player.module.css"

const VimeoPlayer = ({ url }) => {
  const [muted, setMuted] = useState(true);
  const [player, setPlayer] = useState(null);

  const toggleMuteState = () => {
    if (!player) {
      return;
    }

    if (muted) {
      player.setMuted(false);
      player.setVolume(1);
    } else {
      player.setMuted(true);
      player.setVolume(0);
    }

    setMuted(!muted);
  };

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
      controls: false,
      byline: false,
      portrait: false,
      title: false,
      muted: true,
      loop: true,
      autoplay: true,
      id: vimeoUtil.getVimeoVideoID(url),
    }
    const p = new Vimeo(element.current, options)
    setPlayer(p);

    // When this component is unmounted, destroy the Vimeo player
    return () => {
      p.destroy();
      setPlayer(null);
    }
  }, [element, url])

  useEffect(() => {
    const keydownHandler = (e) => {
      if (!e.keyCode === 32 && !e.keyCode === 13) {
        return
      }

      toggleMuteState();
    }
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    }
  }, [toggleMuteState])

  return <div ref={element} className={styles.player} onClick={toggleMuteState}></div>
}

export default VimeoPlayer
