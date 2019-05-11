import React from "react"
import {Box} from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import WorkWithMitso from "../components/workWithMitso"
import { graphql } from "gatsby"

const CaseStudyTemplate = (props) => {
  return (
    <Template data={props.data} />
  )
}

const Template = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Hi" />
      <Container>
          <Box px={[3,4]}>
            <Box>
                <h1>{frontmatter.title}</h1>
            </Box>
          
          </Box>          
      </Container>
      <WorkWithMitso />
    </Layout>
  )
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`