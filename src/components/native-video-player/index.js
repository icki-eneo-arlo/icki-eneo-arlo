import React, { useEffect, useRef, useState } from "react"
import { getVideoScale } from "../../utilities"
import { ScaledPlayer } from "../scaled-player"
import portraitVideo from "../../images/portrait-orientation--width-750--vbr-1-pass--target-3mbps.mp4";
import landscapeVideo1024 from "../../images/20220117--crf-18--width-1024.mp4"
import landscapeVideo2048 from "../../images/20220117--crf-21--width-2048.mp4"
import landscapeVideo3840 from "../../images/20220117--original.mp4"

const NativeVideoPlayer = () => {
  const video = useRef(null)
  const [source, setSource] = useState(null)
  const [scale, setScale] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(null)

  useEffect(() => {
    if (!video.current) {
      return
    }

    const sizes = [
      {
        videoWidth: 600,
        videoHeight: 900,
        cropSafeWidth: 480,
        cropSafeHeight: 500,
        url: portraitVideo,
      },
      {
        videoWidth: 1024,
        videoHeight: 576,
        cropSafeWidth: 500,
        cropSafeHeight: 500,
        url: landscapeVideo1024,
      },
      {
        videoWidth: 2048,
        videoHeight: 1152,
        cropSafeWidth: 750,
        cropSafeHeight: 900,
        url: landscapeVideo2048,
      },
      {
        videoWidth: 3840,
        videoHeight: 2160,
        cropSafeWidth: 1800,
        cropSafeHeight: 2000,
        url: landscapeVideo3840,
      },
    ]

    const getBestSize = () => {
      const scales = sizes.map(size => (
        getVideoScale(
          size.videoWidth,
          size.videoHeight,
          size.cropSafeWidth,
          size.cropSafeHeight,
          window.innerWidth,
          window.innerHeight
        )
      ));
      let sizeIndex = scales.findIndex(s => s < 1.125);
      if (sizeIndex < 0) {
        sizeIndex = scales.findIndex(s => s < 1.25);
      }
      if (sizeIndex < 0) {
        sizeIndex = scales.findIndex(s => s < 1.5);
      }
      if (sizeIndex < 0) {
        sizeIndex = scales.findIndex(s => s < 2);
      }
      if (sizeIndex < 0) {
        sizeIndex = sizes.length - 1;
      }
      const size = sizes[sizeIndex];
      return size || sizes[sizes.length - 1]
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
  }, [])

  return (
    <ScaledPlayer scale={scale} aspectRatio={aspectRatio}>
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
    </ScaledPlayer>
  )
}

export default NativeVideoPlayer
