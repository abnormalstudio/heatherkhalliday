import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Container, Heading } from "../styles"

interface SnippetInterface {
  id: string
  content: { content: string }
  name: string
}

interface AboutProps {
  contentfulSnippet: {
    id: string
    name: string
    content: {
      id: string
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const About = () => (
  <StaticQuery
    query={graphql`
      query SnippetQuery {
        contentfulSnippet(id: { eq: "1faa49e1-ec4a-5ade-8ce4-805c5289c567" }) {
          id
          name
          content {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={(data: AboutProps) => (
      <Layout>
        <Container>
          <Heading>{data.contentfulSnippet.name}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulSnippet.content.childMarkdownRemark.html
            }}
          />
        </Container>
      </Layout>
    )}
  />
)

export default About
