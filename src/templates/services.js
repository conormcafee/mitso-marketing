import React from "react"
import {Box} from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
        <SEO title={frontmatter.title} />
        <Container>
            <Box px={[3,4]}>
                <h1>{frontmatter.title}</h1>
                <ul>
                    {frontmatter.services.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Box>
        </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        intro
        statement
        services
      }
    }
  }
`