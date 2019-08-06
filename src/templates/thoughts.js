import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import WorkWithMitso from "../components/workWithMitso"
import { BLACK, FONT_BOLD, ACCENT } from "../variables"
import Tags from "../components/Tags"
import Thoughts from "../components/Thoughts"
import Image from "../images/mitso-default.png"
import Dot from "../components/Dot"
import { HeroWithText } from "../components/HeroWithText"

const ThoughtsTemplate = props => {
  return (
    <Template
      data={props.data}
      location={props.location}
      additionalData={props}
    />
  )
}

const Template = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { title, tags, mainImage, date, author, seo } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  const getTags = tags => {
    let data = []
    tags !== null && tags.map(tag => data.push(tag.Tag))

    if (data.length > 0) return <Tags tags={data} />
  }

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Flex mb={5} px={[3, 4]}>
          <Hero>
            <Title>
              {title}
              <Dot />
            </Title>
            {getTags(tags)}
          </Hero>
        </Flex>

        <HeroWithText image={mainImage !== null ? mainImage : Image} noText />

        <Caption
          as="div"
          alignItems="center"
          justifyContent="space-between"
          px={[3, 4]}
        >
          <h4>by {author !== null ? author : "MiTSO Marketing"}</h4>
          <h4>{date}</h4>
        </Caption>

        <Box px={[3, 4]} mb={5}>
          <Article dangerouslySetInnerHTML={{ __html: html }} />

          <Thoughts subPage />
        </Box>
        <WorkWithMitso />
      </Container>
    </Layout>
  )
}

export default ThoughtsTemplate

export const pageQuery = graphql`
  query($slug: String!) {
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
        author
        date(formatString: "Do MMMM YYYY")
        mainImage
        tags {
          Tag
        }
      }
    }
  }
`

const Hero = styled(Box)`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 16px;
`

const Article = styled(Box)`
  line-height: 1.6;

  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
  }

  p:first-of-type {
    color: ${BLACK};
    font-family: ${FONT_BOLD};
    font-weight: 700;
    font-size: 20px;
  }

  img {
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  a {
    background: ${BLACK};
    color: #ffffff;
    font-family: ${FONT_BOLD};
    font-weight: 900;
    text-decoration: none;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    transition: background 150ms ease-in-out;

    &:hover {
      background: ${ACCENT};
    }
  }
`

const Caption = styled(Flex)`
  border-bottom: 2px solid #e6e6e6;
`
