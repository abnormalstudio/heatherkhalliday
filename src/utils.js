exports.slugify = str => {
  return str
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^a-z-]/g, '')
}
