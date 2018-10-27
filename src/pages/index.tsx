import { graphql, StaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import ProjectTile from "../components/ProjectTile"
import { ProjectInterface } from "../declarations"
import { Grid } from "./styles"

interface IndexProps {
  allContentfulProject: {
    edges: [
      {
        node: ProjectInterface
      }
    ]
  }
}

const Index = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          allContentfulProject {
            edges {
              node {
                id
                name
                image {
                  resolutions(width: 500) {
                    ...GatsbyContentfulResolutions
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
            {data.allContentfulProject.edges.reverse().map(edge => (
              <ProjectTile project={edge.node} key={edge.node.id} />
            ))}
          </Grid>
        </Layout>
      )}
    />
  )
}

export default Index
