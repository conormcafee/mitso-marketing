import React from "react"
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from "../components/globalStyles"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header";
import Footer from "./footer";
import { ThemeProvider } from "styled-components"
import theme from "../theme"

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
				<ThemeProvider theme={theme}>
					<React.Fragment>
						<Normalize />
						<GlobalStyle />
						<main>
							<Header siteTitle={data.site.siteMetadata.title} />
							{children}
						</main>
						<Footer />
					</React.Fragment>
				</ThemeProvider>
			)}
		/>
)

export default Layout
