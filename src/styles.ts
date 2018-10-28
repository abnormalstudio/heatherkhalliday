import styled from "styled-components"

const Grid = styled.div`
  padding: 2rem;
  column-gap: 1em;
  column-count: 3;

  @media (max-width: 1024px) {
    column-count: 2;
    padding-top: 0px;
  }

  @media (max-width: 600px) {
    column-count: 1;
    padding-top: 0px;
  }
`

const Container = styled.div`
  margin-top: 150px;
`

const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: "Fjalla One", sans-serif;
  margin: 50px;
  text-align: center;
`

const Text = styled.p`
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  line-height: 2.8rem;
  padding: 0 10%;
  margin: 50px;

  @media (max-width: 1024px) {
    padding: 0 5%;
    margin: 50px 10px;
  }
`

const CenteredText = styled(Text)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Redirect = styled.a`
  text-decoration: none;
  color: #e0474c;
`

const Icon = styled.svg`
  width: 25px;
  margin-right: 20px;
`

export { Grid, Container, Heading, Text, Redirect, CenteredText, Icon }
