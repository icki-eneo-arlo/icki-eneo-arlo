import React, { useEffect, useRef, useState } from "react"

const NativeVideoPlayer = ({ url }) => {
  const video = useRef(null)
  const [source, setSource] = useState(null)

  const toggleMuteState = e => {
    e.target.muted = !e.target.muted
  }

  useEffect(() => {
    if (!video.current) {
      return
    }

    const getSourceElement = url => {
      return <source src={url} type="video/mp4" />
    }

    setSource(getSourceElement(url))
  }, [url])

  return (
    <video
      ref={video}
      autoPlay={true}
      playsInline
      loop
      muted
      style={{ width: "100%", height: "100%" }}
      onClick={toggleMuteState}
    >
      {source}
    </video>
  )
}

export default NativeVideoPlayer
