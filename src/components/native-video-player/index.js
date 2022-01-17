import * as React from "react"
import FPOvideo from "../../images/fpo.mp4"

const NativeVideoPlayer = props => (
  <video
    autoPlay={true}
    playsInline
    muted
    loop
    style={{ width: "100%", height: "100%" }}
    {...props}
  >
    <source src={FPOvideo} type="video/mp4" />
  </video>
)

export default NativeVideoPlayer
