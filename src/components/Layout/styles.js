import styled from 'styled-components'

const OuterContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
`

const Main = styled.main`
  margin-left: 25vw;
  width: 75vw;

  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-top: 200px;
    width: 100%;
  }
`

export { OuterContainer, Main }
