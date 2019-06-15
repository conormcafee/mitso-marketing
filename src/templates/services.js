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

import { BLACK, FONT_BOLD } from "../variables"
import SubHeading from "../components/SubHeading"

const ServicesTemplate = props => {
  const getUrl = data => navigate(data)
  return <Template data={props.data} getUrl={getUrl} />
}

const Template = props => {
  const { markdownRemark, allMarkdownRemark } = props.data
  const { frontmatter } = markdownRemark
  const { seo } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]}>
          <Box>
            <Title>
              We offer tailored services to reach your target audience
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
                activeStyle={{ backgroundColor: "#f6f6f6" }}
              >
                {service.node.frontmatter.title}
              </SubNavLink>
            ))}
          </SubNav>

          <Flex flexWrap={["wrap", "nowrap"]} justifyContent="center">
            <Box px={[3, 4]}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                faucibus ante lacinia, rhoncus nisi at, feugiat lacus. Donec ac
                volutpat augue. Donec euismod nunc augue, iaculis fermentum
                augue rutrum at. Morbi convallis quam eros, a volutpat urna
                commodo lobortis.
              </p>
            </Box>
            <Box px={[3, 4]}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                faucibus ante lacinia, rhoncus nisi at, feugiat lacus. Donec ac
                volutpat augue. Donec euismod nunc augue, iaculis fermentum
                augue rutrum at. Morbi convallis quam eros, a volutpat urna
                commodo lobortis.
              </p>
            </Box>
          </Flex>
          <Statement statement={frontmatter.statement} />

          <Services services={frontmatter.listOfServices} />
        </Box>
      </Container>
      <WorkWithMitso />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Services" } } }
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
        statement
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

const SubNav = styled(Flex)`
  border-top: 1px solid #e6e6e6;
  border-right: 2px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-left: 2px solid #e6e6e6;
  border-radius: 7px;
  overflow: hidden;
`

const SubNavLink = styled(Link)`
  color: ${BLACK};
  font-family: ${FONT_BOLD};
  font-weight: 700;
  text-decoration: none;
  width: 50%;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  box-sizing: border-box;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  &:hover {
    background-color: #f6f6f6;
  }

  @media only screen and (max-width: 767px) {
    &:nth-child(odd) {
      border-right: 2px solid #e6e6e6;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 999px) {
    width: calc(100% / 3);

    &:nth-child(3n + 2) {
      border-left: 2px solid #e6e6e6;
      border-right: 2px solid #e6e6e6;
    }
  }

  @media only screen and (min-width: 1000px) {
    width: auto;
    flex: 1;
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
    font-size: 20px;

    &:not(:last-of-type) {
      border-right: 2px solid #e6e6e6;
    }
  }
`
