export const getVideoScale = (
  videoWidth,
  videoHeight,
  cropSafeWidth,
  cropSafeHeight,
  viewportWidth,
  viewportHeight
) => {
  const viewportAspectRatio = viewportWidth / viewportHeight
  const videoAspectRatio = videoWidth / videoHeight
  const cropWidthAsPercentage = cropSafeWidth / videoWidth
  const cropHeightAsPercentage = cropSafeHeight / videoHeight
  const scaleToMatchViewportWidth = 1
  const scaleToMatchViewportHeight = videoAspectRatio / viewportAspectRatio

  const targetScale =
    viewportAspectRatio > videoAspectRatio
      ? scaleToMatchViewportWidth
      : scaleToMatchViewportHeight
  if (cropSafeWidth && cropSafeHeight) {
    const maxScaleBeforeViolatingProtectedCropWidth =
      scaleToMatchViewportWidth * (1 / cropWidthAsPercentage)
    const maxScaleBeforeViolatingProtectedCropHeight =
      scaleToMatchViewportHeight * (1 / cropHeightAsPercentage)
    const maxScale = Math.min(
      maxScaleBeforeViolatingProtectedCropWidth,
      maxScaleBeforeViolatingProtectedCropHeight
    )
    return targetScale > maxScale ? maxScale : targetScale
  } else {
    return targetScale
  }
}