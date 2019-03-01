import Link from "gatsby-link"
import React from "react"
import { Zoom } from "react-reveal"

import { ProjectInterfaceFluid } from "../../declarations"
import { slugify } from "../../utils"
import { Item, ItemImage } from "./styles"

interface ProjectTileProps {
  project: ProjectInterfaceFluid
}

const ProjectTile = ({ project }: ProjectTileProps) => (
  <Zoom>
    <Item>
      <Link to={`/${slugify(project.name)}`}>
        <ItemImage fluid={project.image.fluid} />
      </Link>
    </Item>
  </Zoom>
)

export default ProjectTile
