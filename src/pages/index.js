import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Grid } from './styles'
import Layout from '../components/Layout'
import ProjectTile from '../components/ProjectTile'

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
      render={data => (
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
