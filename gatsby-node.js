const path = require("path")

const slugify = str => {
  return str
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z-]/g, "")
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject(sort: { order: DESC, fields: createdAt }) {
          edges {
            node {
              id
              name
              image {
                resolutions(width: 1200) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
              description {
                description
              }
            }
          }
        }
      }
    `).then(result => {
      const projects = result.data.allContentfulProject.edges

      projects.forEach(({ node }, i) => {
        const prevProject =
          i === projects.length - 1 ? projects[0] : projects[i + 1]

        const nextProject =
          i === 0 ? projects[projects.length - 1] : projects[i - 1]

        createPage({
          path: slugify(node.name),
          component: path.resolve("./src/templates/Project/index.tsx"),
          context: {
            project: node,
            next: slugify(nextProject.node.name),
            prev: slugify(prevProject.node.name)
          }
        })
      })
      resolve()
    })
  })
}
