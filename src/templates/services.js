import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql, navigate } from "gatsby"
import WorkWithMitso from "../components/workWithMitso"

import Statement from "../components/Statement"
import Services from "../components/Services"
import SubHeading from "../components/SubHeading"
import Dot from "../components/Dot"

const ServicesTemplate = props => {
  const getUrl = data => navigate(data)
  return <Template data={props.data} getUrl={getUrl} />
}

const Template = props => {
  const { markdownRemark } = props.data
  const { frontmatter } = markdownRemark
  const { text01, text02, statementImage, seo } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]} mb={[3, 4]}>
          <Box>
            <Title>
              We offer tailored services to reach your target audience
              <Dot />
              <SubHeading text={frontmatter.title} size="30px" mt="16px" />
            </Title>
          </Box>
        </Box>
      </Container>

      <WorkWithMitso simple />

      <Container>
        <Box px={[3, 4]} mt={[4, 5]}>
          <SubTitle>{frontmatter.title} Services</SubTitle>
        </Box>

        <Flex flexWrap="wrap">
          <LongText width={[1, 1, 1 / 2]} px={[3, 4]}>
            {text01 && <p>{text01}</p>}
            {text02 && <p>{text02}</p>}
            {frontmatter.serviceText && <p>{frontmatter.serviceText}</p>}
          </LongText>

          <Box width={[1, 1, 1 / 2]} px={[3, 4]}>
            <Services services={frontmatter.listOfServices} />
          </Box>
        </Flex>
      </Container>

      <Statement
        isStatement
        statement={frontmatter.statement}
        image={statementImage}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Services" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        seo {
          seoTitle
          seoDescription
          seoImage
        }
        title
        intro
        text01
        text02
        statement
        statementImage
        serviceText
        listOfServices {
          Service
        }
        category
      }
    }
  }
`

export default ServicesTemplate

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
`
const SubTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 0;
`

const LongText = styled(Box)`
  p {
    max-width: 100%;
  }
`
