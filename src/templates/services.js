import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql, navigate, Link } from "gatsby"

import Statement from "../components/Statement"
import Services from "../components/Services"

import { HeroWithText } from "../components/HeroWithText"
import { FONT_BOLD, BLACK, ACCENT } from "../variables"

const ServicesTemplate = props => {
  const getUrl = data => navigate(data)
  return <Template data={props.data} getUrl={getUrl} additionalData={props} />
}

const Template = props => {
  const { markdownRemark, allMarkdownRemark } = props.data
  const { frontmatter } = markdownRemark
  const { text01, text02, seo, statementImage } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />

      <HeroWithText
        image={statementImage}
        title="We offer tailored services to reach your target audience"
        subtitle={frontmatter.title}
      />

      <OtherServices
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        px={[2, 3]}
        mt={3}
      >
        {allMarkdownRemark.edges.map((service, index) => (
          <Flex px={2} py={2} alignItems="center" key={index}>
            <Link to={service.node.fields.slug}>
              {service.node.frontmatter.title}
            </Link>
            {index !== allMarkdownRemark.edges.length - 1 && <Sep />}
          </Flex>
        ))}
      </OtherServices>

      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            py={[3, 4]}
          >
            <LongText width={[1, 1, 1 / 2]} px={[3, 4]}>
              {text01 && <Bold>{text01}</Bold>}
              {text02 && <p>{text02}</p>}
              {frontmatter.serviceText && <p>{frontmatter.serviceText}</p>}
            </LongText>
          </Flex>
        </Flex>
      </Container>

      <ServiceIcons
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={[1, 1, 1 / 2]} pt={[3]} px={[3, 4]}>
          <Services services={frontmatter.listOfServices} />
        </Box>
      </ServiceIcons>

      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {frontmatter.serviceText && (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              pt={[3, 4]}
            >
              <LongText width={[1, 1, 1 / 2]} px={[3, 4]}>
                <p>{frontmatter.serviceText}</p>
              </LongText>
            </Flex>
          )}
        </Flex>
      </Container>

      <Statement isStatement statement={frontmatter.statement} />
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

const LongText = styled(Box)`
  p {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const Bold = styled.p`
  font-family: ${FONT_BOLD};
  font-weight: 700;
  color: ${BLACK};
`

const ServiceIcons = styled(Flex)`
  background: ${BLACK};
`

const OtherServices = styled(Flex)`
  a {
    font-family: ${FONT_BOLD};
    font-weight: 700;
    color: ${BLACK};
    text-decoration: none;

    &:hover {
      color: ${ACCENT};
    }

    @media only screen and (max-width: 639px) {
      border-bottom: 1px solid ${ACCENT};
      font-size: 12px;
    }
  }
`

const Sep = styled(Box)`
  display: none;
  height: 20px;
  width: 2px;
  background: ${ACCENT};
  margin-left: 20px;
  margin-right: 20px;

  @media only screen and (min-width: 640px) {
    display: block;
  }
`
