import React from 'react'
import Layout from '../../components/Layout'
import {
  LinkContainer,
  ProjectImage,
  ProjectTitle,
  Description,
  ProjectLink,
} from './styles'

class Project extends React.Component {
  render() {
    const { project, next, prev } = this.props.pathContext
    const paras = project.description.description.split('\n')

    return (
      <Layout>
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
