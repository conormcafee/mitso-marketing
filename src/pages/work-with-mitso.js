import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Box } from "@rebass/grid"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopImages from "../components/WhoWeAre/TopImages"
import WorkWithMitso from "../components/workWithMitso"
import Team from "../components/team"
import Dot from "../components/Dot"

export default ({ data }) => {
  const { title, intro, seo } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]} mb={[3, 3, 3, 6]}>
          <Title>
            {title}
            <Dot />
          </Title>
          <SubTitle>{intro}</SubTitle>
        </Box>
      </Container>
      <TopImages />
      <Team />
      <WorkWithMitso />
    </Layout>
  )
}

const Title = styled.h1`
  text-align: center;
  @media only screen and (max-width: 40em) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`

const SubTitle = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export const query = graphql`
  query {
    file(name: { eq: "workWithMitso" }) {
      childMarkdownRemark {
        frontmatter {
          title
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
