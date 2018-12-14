import { graphql, StaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import ProjectTile from "../components/ProjectTile"
import { ProjectInterfaceFixed } from "../declarations"
import { Grid } from "../styles"

interface IndexProps {
  allContentfulProject: {
    edges: [
      {
        node: ProjectInterfaceFixed
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
                fixed(width: 500) {
                  ...GatsbyContentfulFixed
                }
              }
              description {
                description
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
