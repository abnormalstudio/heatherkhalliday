import React from "react"
import Helmet from "react-helmet"
import Layout from "../../components/Layout"
import { ProjectInterfaceFluid } from "../../declarations"
import {
  Description,
  LinkContainer,
  ProjectImage,
  ProjectImageContainer,
  ProjectLink,
  ProjectTitle
} from "./styles"

interface ProjectProps {
  pathContext: {
    prev: string | null
    next: string | null
    project: ProjectInterfaceFluid
  }
}

class Project extends React.Component<ProjectProps, {}> {
  render() {
    const { project, next, prev } = this.props.pathContext

    return (
      <Layout>
        <Helmet title={project.name} />
        <div>
          <LinkContainer>
            {prev && <ProjectLink to={prev}>PREV</ProjectLink>}
            {next && <ProjectLink to={next}>NEXT</ProjectLink>}
          </LinkContainer>

          <ProjectTitle>{project.name}</ProjectTitle>

          <ProjectImageContainer>
            <ProjectImage fluid={project.image.fluid} />
          </ProjectImageContainer>

          <Description
            dangerouslySetInnerHTML={{
              __html: project.description.childMarkdownRemark.html
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default Project
