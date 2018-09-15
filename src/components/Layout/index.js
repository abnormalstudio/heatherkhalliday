import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import SideBar from '../SideBar'
import { OuterContainer, Main } from './styles'

import './generic/reset.css'
import './generic/index.css'

const Layout = ({ children }) => (
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
        <Main>{children}</Main>
      </OuterContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
