import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Box } from "@rebass/grid"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Container from "../../components/container"
import CaseStudies from "../../components/caseStudies"
import WorkWithMitso from "../../components/workWithMitso"
import Dot from "../../components/Dot"

export default ({ data }) => {
  const { title, seo } = data.file.childMarkdownRemark.frontmatter

  const { seoTitle, seoDescription, seoImage } = seo

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]} mb={5}>
          <Hero>
            <Title>
              {title}
              <Dot />
            </Title>
          </Hero>
        </Box>
        <CaseStudies moreCaseStudies={true} />
        <WorkWithMitso />
      </Container>
    </Layout>
  )
}

const Hero = styled(Box)`
  text-align: center;
`

const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`

export const query = graphql`
  query {
    file(name: { eq: "caseStudies" }) {
      childMarkdownRemark {
        frontmatter {
          title
          seo {
            seoTitle
            seoDescription
            seoImage
          }
        }
      }
    }
  }
`
