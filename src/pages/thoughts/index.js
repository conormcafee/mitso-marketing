import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Box } from "@rebass/grid"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Container from "../../components/container"
import Thoughts from "../../components/Thoughts"
import WorkWithMitso from "../../components/workWithMitso"
import Dot from "../../components/Dot"

export default ({ data }) => {
  const { intro, seo } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]} mb={5}>
          <Hero>
            <Title>
              {intro}
              <Dot />
            </Title>
          </Hero>
          <Box mt={[4, 4, 5]}>
            <Thoughts hmepge={false} subPage={false} />
          </Box>
        </Box>
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
    file(name: { eq: "thoughts" }) {
      childMarkdownRemark {
        frontmatter {
          intro
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
