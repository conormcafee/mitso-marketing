import React from "react"
import {Box} from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import WorkWithMitso from "../components/workWithMitso"


const ThoughtsTemplate = () => {
  return (
      <Layout>
        <SEO title="Hi" />
        <Container>
            <Box px={[3,4]}>
              <Box>
                  <h1>Thoughts</h1>
              </Box>
            
            </Box>          
        </Container>
        <WorkWithMitso />
    </Layout>
    )
  }

export default ThoughtsTemplate