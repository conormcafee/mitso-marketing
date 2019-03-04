import React from "react"
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from "../components/globalStyles";
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";

import Header from "./header"

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
    	<React.Fragment>
        	<Normalize />
          <GlobalStyle />
        	<Header siteTitle={data.site.siteMetadata.title} />
        	<main>{children}</main>
      	</React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
