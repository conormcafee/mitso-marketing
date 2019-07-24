import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql, navigate } from "gatsby"
import WorkWithMitso from "../components/workWithMitso"

import Statement from "../components/Statement"
import Services from "../components/Services"

import { FONT_BOLD, ACCENT, BASE } from "../variables"
import SubHeading from "../components/SubHeading"
import Dot from "../components/Dot"

const ServicesTemplate = props => {
  const getUrl = data => navigate(data)
  return <Template data={props.data} getUrl={getUrl} />
}

const Template = props => {
  const { markdownRemark, allMarkdownRemark } = props.data
  const { frontmatter } = markdownRemark
  const { text01, text02, statementImage, seo } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]}>
          <Box>
            <Title>
              We offer tailored services to reach your target audience
              <Dot />
              <SubHeading text={frontmatter.title} size="30px" mt="16px" />
            </Title>
          </Box>

          <SubNav
            flexWrap="wrap"
            alignItems="center"
            justifyContent="flex-start"
            my={5}
          >
            {allMarkdownRemark.edges.map((service, index) => (
              <SubNavLink
                to={service.node.fields.slug}
                key={index}
                activeStyle={{ color: "#ffffff", backgroundColor: ACCENT }}
              >
                {service.node.frontmatter.title}
              </SubNavLink>
            ))}
          </SubNav>

          <Flex flexWrap={["wrap", "nowrap"]} justifyContent="center">
            {text01 && (
              <Box px={[3, 4]}>
                <p>{text01}</p>
              </Box>
            )}
            {text02 && (
              <Box px={[3, 4]}>
                <p>{text02}</p>
              </Box>
            )}
          </Flex>
        </Box>
      </Container>

      <Statement
        isStatement
        statement={frontmatter.statement}
        image={statementImage}
      />

      <Container>
        <Flex flexWrap="wrap" py={4} css={{ maxWidth: "1000px" }} mx="auto">
          <Box order={[2, 2, 1]} width={[1, 1, 1 / 2]} px={[3, 4]}>
            <Services services={frontmatter.listOfServices} />
          </Box>
          <Box order={[1, 1, 2]} width={[1, 1, 1 / 2]} px={[3, 4]}>
            <SubTitle>{frontmatter.title} Services</SubTitle>
            <p>{frontmatter.serviceText}</p>
          </Box>
        </Flex>
      </Container>
      <WorkWithMitso />
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

const SubNav = styled(Flex)`
  border-right: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-radius: 7px;
  overflow: hidden;
`

const SubNavLink = styled(Link)`
  color: ${BASE};
  font-family: ${FONT_BOLD};
  background-color: #f6f6f6;
  font-weight: 700;
  text-decoration: none;
  width: 50%;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  box-sizing: border-box;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  &:hover {
    color: #ffffff;
    background-color: ${ACCENT};
  }

  @media only screen and (max-width: 767px) {
    &:nth-child(odd) {
      border-right: 2px solid #e6e6e6;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 999px) {
    width: calc(100% / 3);

    &:nth-child(3n + 2) {
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
    }
  }

  @media only screen and (min-width: 1000px) {
    width: auto;
    flex: 1;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 20px;

    &:not(:last-of-type) {
      border-right: 1px solid #e6e6e6;
    }
  }
`
