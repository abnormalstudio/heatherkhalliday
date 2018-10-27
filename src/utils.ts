const slugify = (str: string) => {
  return str
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z-]/g, "")
}

export { slugify }
