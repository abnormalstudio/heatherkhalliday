import Link from "gatsby-link"
import React from "react"
import { Zoom } from "react-reveal"

import { ProjectInterfaceFixed } from "../../declarations"
import { slugify } from "../../utils"
import { Item, ItemImage } from "./styles"

interface ProjectTileProps {
  project: ProjectInterfaceFixed
}

const ProjectTile = ({ project }: ProjectTileProps) => (
  <Zoom>
    <Item>
      <Link to={`/${slugify(project.name)}`}>
        <ItemImage fixed={project.image.fixed} />
      </Link>
    </Item>
  </Zoom>
)

export default ProjectTile
