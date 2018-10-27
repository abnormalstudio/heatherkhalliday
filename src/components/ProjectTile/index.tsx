import Link from "gatsby-link"
import React from "react"
import { Zoom } from "react-reveal"

import { ProjectInterface } from "../../declarations"
import { slugify } from "../../utils"
import { Item, ItemImage } from "./styles"

interface ProjectTileProps {
  project: ProjectInterface
}

const ProjectTile = ({ project }: ProjectTileProps) => (
  <Zoom>
    <Item>
      <Link to={`/${slugify(project.name)}`}>
        <ItemImage resolutions={project.image.resolutions} />
      </Link>
    </Item>
  </Zoom>
)

export default ProjectTile
