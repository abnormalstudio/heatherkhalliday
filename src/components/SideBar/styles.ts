import Link from "gatsby-link"
import styled from "styled-components"

const Aside = styled.div`
  width: 25vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(190, 177, 180, 0.1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 200;

  @media (max-width: 1024px) {
    width: 100%;
    height: 170px;
    background: #eee;
  }
`

const Name = styled.h1`
  font-size: 3.6rem;
  font-family: "Fjalla One", sans-serif;
  text-align: center;
  padding-bottom: 5px;
  color: #212121;

  @media (max-width: 1024px) {
    padding-top: 15px;
    font-size: 2.5rem;
  }
`

const Line = styled.hr`
  border: 0.5px solid #beb1b4;
  width: 80%;
`

const Lastname = styled.h2`
  font-size: 1.8rem;
  font-family: "Roboto", sans-serif;
  text-align: right;
  padding-right: 20%;
  margin-bottom: 15px;
  color: #212121;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
    padding-right: 0px;
    text-align: center;
  }
`

const Navigation = styled.nav`
  margin-top: 15px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`

const Navlist = styled.ul`
  display: flex;
`

const Listitem = styled.li`
  padding: 10px;
  list-style: none;

  @media (max-width: 1024px) {
    padding: 5px 10px;
  }
`

const Navlink = styled(Link)`
  text-decoration: none;
  color: #e0474c;
  padding: 5px;
  transition: all 1s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export { Aside, Name, Line, Lastname, Navigation, Navlist, Listitem, Navlink }
