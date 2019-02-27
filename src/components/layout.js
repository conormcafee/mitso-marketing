import React from "react"
import { Normalize } from 'styled-normalize';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";

import '../fonts/campton-bolddemo-webfont.ttf';
import '../fonts/campton-bolddemo-webfont.woff';
import '../fonts/campton-bolddemo-webfont.woff2';
import '../fonts/campton-lightdemo-webfont.ttf';
import '../fonts/campton-lightdemo-webfont.woff';
import '../fonts/campton-lightdemo-webfont.woff2';

import '../fonts/stylesheet.css';

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
