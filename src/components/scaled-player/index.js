import React from "react"

export const ScaledPlayer = ({ scale, aspectRatio, children }) => (
  <div
    style={{
      width: `${scale * 100}%`,
      height: "auto",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <div
      style={{
        paddingTop: `${(1 / aspectRatio) * 100}%`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  </div>
)
