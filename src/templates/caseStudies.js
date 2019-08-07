import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import WorkWithMitso from "../components/workWithMitso"
import { FONT_BOLD, BLACK, ACCENT } from "../variables"
import DefaultImage from "../images/mitso-default.png"
import {
  SingleImage,
  DoubleImage,
  TrioImage,
  MultiImage,
} from "../components/ImageBlock"
import { HeroWithText } from "../components/HeroWithText"
import Quotes from ".././images/icons/quotes.svg"
import { PrevNext } from "../components/PrevNext"

const CaseStudyTemplate = props => (
  <Template
    data={props.data}
    location={props.location}
    additionalData={props}
  />
)

const Template = props => {
  const { markdownRemark } = props.data
  const { frontmatter } = markdownRemark
  const { html } = markdownRemark
  const {
    title,
    intro,
    mainImage,
    testimonial,
    testimonialFrom,
    imageBlock,
    text,
    seo,
    youtube,
    vimeo,
    category,
  } = frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  const { pageContext } = props.additionalData

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
        <Flex px={[3, 4]} pb={[3, 4]}>
          <Hero>
            <Title>{title}</Title>
            <SubTitle>{intro}</SubTitle>
          </Hero>
        </Flex>

        <HeroWithText
          image={mainImage !== null ? mainImage : DefaultImage}
          youtube={youtube !== null ? youtube : null}
          vimeo={vimeo !== null ? vimeo : null}
          noText={vimeo === "" && youtube === ""}
        />

        <Box px={[3, 4]} py={[3, 4]}>
          <Article
            as="article"
            mb={5}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {_renderImageBlock(images)}

          <Article
            as="article"
            mb={testimonial ? 5 : 0}
            dangerouslySetInnerHTML={{ __html: text }}
          />

          {testimonial && (
            <Testimonial flexDirection="column" alignItems="flex-end">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width={1}
              >
                <h4>{testimonialFrom}</h4>
                <img src={Quotes} alt="Quote Marks for Testimonial" />
              </Flex>
              <p>{testimonial}</p>
            </Testimonial>
          )}
        </Box>

        <PrevNext slug={pageContext.slug} category={category} />

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
        intro
        mainImage
        testimonial
        testimonialFrom
        youtube
        vimeo
        imageBlock {
          Image
        }
        category
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
  margin-bottom: 0px;
`

const SubTitle = styled.h2`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 20px;
  line-height: 1.3;
  color: ${ACCENT};
`

const Article = styled(Box)`
  line-height: 1.6;

  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
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

  h1,
  h2 {
    font-size: 20px;
    line-height: 1.3;
  }

  h3,
  h4 {
    font-size: 18px;
    line-height: 1.3;
  }
`
const Testimonial = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;

  p {
    margin: 0;
  }

  img {
    max-height: 50px;
  }
`
