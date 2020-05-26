function formatUrl(url) {
  const newUrl = url.split("/")
  return newUrl[6]
}

export default formatUrl
