import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

import SideBar from "../SideBar"
import { Main, OuterContainer } from "./styles"

import "./generic/_reset.css"
import "./generic/index.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Helmet title={data.site.siteMetadata.title}>
          <link
            href="https://fonts.googleapis.com/css?family=Fjalla+One|Roboto:300"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Helmet>
        <SideBar />
        <Main>{props.children}</Main>
      </OuterContainer>
    )}
  />
)

export default Layout
