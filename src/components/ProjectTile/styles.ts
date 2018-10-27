import Img from "gatsby-image"
import styled from "styled-components"

const Item = styled.div`
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  margin-bottom: 1em;

  @media (max-width: 600px) {
    margin-bottom: 1.5em;
  }
`

const ItemImage = styled(Img)`
  max-width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export { Item, ItemImage }
