import React from "react"
import Helmet from "react-helmet"
import Layout from "../../components/Layout"
import { ProjectInterface } from "../../declarations"
import {
  Description,
  LinkContainer,
  ProjectImage,
  ProjectLink,
  ProjectTitle
} from "./styles"

interface ProjectProps {
  pathContext: {
    prev: string
    next: string
    project: ProjectInterface
  }
}

class Project extends React.Component<ProjectProps, {}> {
  render() {
    const { project, next, prev } = this.props.pathContext
    const paras = project.description.description.split("\n")

    return (
      <Layout>
        <Helmet title={project.name} />
        <div>
          <LinkContainer>
            <ProjectLink to={prev}>PREV</ProjectLink>
            <ProjectLink to={next}>NEXT</ProjectLink>
          </LinkContainer>

          <ProjectImage src={project.image.resolutions.src} />

          <ProjectTitle>{project.name}</ProjectTitle>
          {paras.map((para, i) => (
            <Description key={i}>{para}</Description>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Project
