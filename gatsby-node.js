const path = require('path')
const { slugify } = require('./src/utils')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
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
          i === 0 ? projects[projects.length - 1] : projects[i - 1]

        const nextProject =
          i === projects.length - 1 ? projects[0] : projects[i + 1]

        createPage({
          path: slugify(node.name),
          component: path.resolve('./src/templates/Project/index.js'),
          context: {
            project: node,
            next: slugify(nextProject.node.name),
            prev: slugify(prevProject.node.name),
          },
        })
      })
      resolve()
    })
  })
}
