import React, { useEffect, useRef, useState } from "react"
import { getVideoScale } from "../../utilities"
import { ScaledPlayer } from "../scaled-player"

const NativeVideoPlayer = ({ sizes }) => {
  const video = useRef(null)
  const [source, setSource] = useState(null)
  const [scale, setScale] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(null)

  const toggleMuteState = e => {
    e.target.muted = !e.target.muted
  }

  useEffect(() => {
    if (!video.current) {
      return
    }

    const getBestSize = () => {
      let smallestAppropriateSize = sizes.find(size => {
        return window.innerWidth <= size.videoWidth
      })
      if (!smallestAppropriateSize) {
        smallestAppropriateSize = sizes[sizes.length - 1]
      }
      return smallestAppropriateSize
    }

    const getSourceElement = url => {
      return <source src={url} type="video/mp4" />
    }

    const setVideoSize = () => {
      const size = getBestSize()
      setSource(getSourceElement(size.url))
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
    }

    window.addEventListener("resize", setVideoSize)
    setVideoSize()
    return window.removeEventListener("resize", setVideoSize)
  }, [sizes])

  return (
    <ScaledPlayer scale={scale} aspectRatio={aspectRatio}>
      <video
        ref={video}
        autoPlay={true}
        playsInline
        muted
        loop
        style={{ width: "100%", height: "100%" }}
        onClick={toggleMuteState}
      >
        {source}
      </video>
    </ScaledPlayer>
  )
}

export default NativeVideoPlayer
