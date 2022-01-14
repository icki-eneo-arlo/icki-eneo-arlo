export const getVimeoVideoID = (url) => {
  const videoIDMatches = url.match(/(vimeo.com\/)(video\/)?(\d+)/)
  if (!videoIDMatches) {
    console.warn(`Could not extract Vimeo ID from url ${url}`)
    return false
  }

  return videoIDMatches.pop()
}
