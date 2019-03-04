const path = require("path")

const slugify = str => {
  return str
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z-]/g, "")
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, _) => {
    graphql(`
      {
        allContentfulProject(sort: { order: DESC, fields: createdAt }) {
          edges {
            next {
              id
              name
            }
            previous {
              id
              name
            }
            node {
              id
              name
              image {
                fluid(maxWidth: 1600) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              description {
                id
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `).then(result => {
      const projects = result.data.allContentfulProject.edges

      projects.forEach(({ next, previous, node }) => {
        createPage({
          path: slugify(node.name),
          component: path.resolve("./src/templates/Project/index.tsx"),
          context: {
            project: node,
            next: next ? slugify(next.name) : null,
            prev: previous ? slugify(previous.name) : null
          }
        })
      })
      resolve()
    })
  })
}
