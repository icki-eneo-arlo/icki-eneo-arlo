import React, { useEffect, useRef, useState } from "react"
import video512 from "../../images/20220117--crf-18--width-512.mp4"
import video1024 from "../../images/20220117--crf-18--width-1024.mp4"
import video2048 from "../../images/20220117--crf-21--width-2048.mp4"
import video3840 from "../../images/20220117--original.mp4"

const NativeVideoPlayer = ({ scale }) => {
  const video = useRef(null);
  const [source, setSource] = useState(null)

  useEffect(() => {
    if (!video.current) {
      return;
    }

    const sourcesBySize = [
      {
        width: 512,
        url: video512,
      },
      {
        width: 1024,
        url: video1024,
      },
      {
        width: 2048,
        url: video2048,
      },
      {
        width: 3840,
        url: video3840,
      },
    ]
    const renderedAssetSize = scale * window.innerWidth
    let sourceToUse = sourcesBySize.find(
      source => source.width >= renderedAssetSize
    )
    if (!sourceToUse) {
      sourceToUse = sourcesBySize[sourcesBySize.length - 1]
    }
    setSource(<source src={sourceToUse.url} type="video/mp4" />)
    video.current.play();
  }, [scale, video])

  return (
    <video
      ref={video}
      autoPlay={true}
      playsInline
      muted
      loop
      style={{ width: "100%", height: "100%" }}
    >
      {source}
    </video>
  )
}

export default NativeVideoPlayer
