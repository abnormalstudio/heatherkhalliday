import { graphql, StaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import ProjectTile from "../components/ProjectTile"
import { ProjectInterfaceFluid } from "../declarations"
import { Grid } from "../styles"

interface IndexProps {
  allContentfulProject: {
    edges: [
      {
        node: ProjectInterfaceFluid
      }
    ]
  }
}

const Index = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allContentfulProject(sort: { order: DESC, fields: createdAt }) {
          edges {
            node {
              id
              name
              image {
                fluid(maxWidth: 400) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data: IndexProps) => (
      <Layout>
        <Grid>
          {data.allContentfulProject.edges.map(edge => (
            <ProjectTile project={edge.node} key={edge.node.id} />
          ))}
        </Grid>
      </Layout>
    )}
  />
)

export default Index
