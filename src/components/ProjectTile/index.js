import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'

import { Item, ItemImage } from './styles'
import { slugify } from '../../utils'

const ProjectTile = ({ project }) => (
  <Zoom>
    <Item>
      <Link to={`/${slugify(project.name)}`}>
        <ItemImage resolutions={project.image.resolutions} />
      </Link>
    </Item>
  </Zoom>
)

ProjectTile.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.shape({ description: PropTypes.string.isRequired })
      .isRequired,
    image: PropTypes.shape({
      resolutions: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectTile
