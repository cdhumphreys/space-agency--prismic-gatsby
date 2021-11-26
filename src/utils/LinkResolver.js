exports.linkResolver = (doc) => {
  console.log(doc.type)
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  return '/'
}
