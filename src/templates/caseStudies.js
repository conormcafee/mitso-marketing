import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import WorkWithMitso from "../components/workWithMitso"
import { BLACK } from "../variables"
import Tags from "../components/Tags"
import Share from "../components/Share"
import BackLink from "../components/BackLink"
import { FONT_BOLD } from "../variables"
import Statement from "../components/Statement"
import BackgroundImage from "../components/BackgroundImage"
import DefaultImage from "../images/mitso-default.png"
import {
  SingleImage,
  DoubleImage,
  TrioImage,
  MultiImage,
} from "../components/ImageBlock"

const CaseStudyTemplate = props => (
  <Template data={props.data} location={props.location} />
)

const Template = props => {
  const { markdownRemark } = props.data
  const { frontmatter } = markdownRemark
  const { html } = markdownRemark
  const { title, mainImage, testimonial, imageBlock, text, seo } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  let images = []
  imageBlock && imageBlock.map(item => images.push(item.Image))

  const _renderImageBlock = images => {
    let ib
    switch (images.length) {
      case 1:
        ib = <SingleImage image={images[0]} />
        break
      case 2:
        ib = <DoubleImage images={images} />
        break
      case 3:
        ib = <TrioImage images={images} />
        break
      default:
        ib = <MultiImage images={images} />
        break
    }
    return ib
  }

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Flex mb={5} px={[3, 4]}>
          <Hero>
            <Title>{title}</Title>
            <Tags tags={["Case Study"]} />
          </Hero>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          mt={5}
          mb={3}
          px={[3, 4]}
        >
          <BackLink url="/case-studies" title="All Case Studies" />
          <Share url={props.location.href} />
        </Flex>

        <BackgroundImage
          img={mainImage !== null ? mainImage : DefaultImage}
          aspectRatio
        />

        <Box px={[3, 4]} pt={5} mb={5}>
          <Article
            as="article"
            mb={5}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {_renderImageBlock(images)}

          <Article
            as="article"
            mb={5}
            dangerouslySetInnerHTML={{ __html: text }}
          />

          <Statement statement={testimonial} />

          <Box mx="auto" mb={5} css={{ maxWidth: "700px" }}>
            <Share url={props.location.href} />
          </Box>
        </Box>
        <WorkWithMitso />
      </Container>
    </Layout>
  )
}

export default CaseStudyTemplate

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
        mainImage
        testimonial
        imageBlock {
          Image
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
    font-weight: 900;
    font-size: 20px;
  }

  img {
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
