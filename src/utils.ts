const slugify = (str: string) => {
  return str
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z-]/g, "")
}

export { slugify }
