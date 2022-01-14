import * as React from "react"
import FPOvideo from "../../images/fpo.mp4"

const NativeVideoPlayer = (props) => (
  <video controls autoPlay={true} playsInline muted {...props}>
    <source src={FPOvideo} type="video/mp4" />
  </video>
)

export default NativeVideoPlayer