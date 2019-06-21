import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dot from "../components/Dot"

export default ({ data }) => {
  const { title, text, seo } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]} mb={[3, 3, 3]}>
          <Title>
            {title}
            <Dot />
          </Title>
        </Box>

        <Flex flexWrap={["wrap", "nowrap"]} justifyContent="center">
          {text && (
            <Box px={[3, 4]}>
              <p>{text}</p>
            </Box>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 40em) {
    font-size: 30px;
  }
`

export const query = graphql`
  query {
    file(name: { eq: "privacyPolicy" }) {
      childMarkdownRemark {
        frontmatter {
          title
          text
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
