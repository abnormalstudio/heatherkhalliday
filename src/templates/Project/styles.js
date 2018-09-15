import styled from 'styled-components'
import Link from 'gatsby-link'

const LinkContainer = styled.div`
  text-align: right;
  margin: 50px;

  @media (max-width: 1024px) {
    margin: 30px;
  }
`

const ProjectImage = styled.img`
  max-width: 80%;
  max-height: 65vh;
  display: block;
  margin: 50px auto;
  margin-bottom: 70px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 1024px) {
    margin: 25px auto;
  }
`

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Fjalla One', sans-serif;
  margin: 50px;
  text-align: center;
`

const Description = styled.p`
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  line-height: 2.8rem;
  padding: 0 10%;
  margin: 50px;

  @media (max-width: 1024px) {
    padding: 0 5%;
    margin: 50px 10px;
  }
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
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

export { LinkContainer, ProjectImage, ProjectTitle, Description, ProjectLink }
