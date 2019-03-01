import Image from "gatsby-image"
import Link from "gatsby-link"
import styled from "styled-components"

const LinkContainer = styled.div`
  text-align: right;
  margin: 50px;

  @media (max-width: 1024px) {
    margin: 30px;
  }
`

const ProjectImage = styled(Image)``

const ProjectImageContainer = styled.div`
  max-width: 80%;
  display: block;
  margin: 50px auto;
  margin-bottom: 70px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;

  @media (max-width: 1024px) {
    margin: 25px auto;
  }
`

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-family: "Fjalla One", sans-serif;
  margin: 50px;
  text-align: center;
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  margin: 20px;
  color: #e0474c;
  font-weight: bolder;
  padding: 5px;
  transition: all 1s ease;

  &:hover {
    background-color: #212121;
    color: #fff;
  }
`

const Description = styled.div`
  p {
    padding: 0 5%;
  }
`

export {
  Description,
  LinkContainer,
  ProjectImage,
  ProjectImageContainer,
  ProjectLink,
  ProjectTitle
}
