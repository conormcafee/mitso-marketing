import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import WorkWithMitso from "../components/workWithMitso"
import { BLACK } from "../variables"
import Tags from "../components/Tags"
import Share from "../components/Share"
import BackLink from "../components/BackLink"
import Thoughts from "../components/Thoughts"
import BackgroundImage from "../components/BackgroundImage";
import Image from "../images/mitso-default.png";

const ThoughtsTemplate = (props) => {
  return (
    <Template data={props.data} location={props.location} />
  )
}

const Template = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { title, tags, mainImage, date, author } = frontmatter
  const { href } = props.location
  
  const getTags = (tags) => {
    let data = []
    tags !== null && tags.map(tag => data.push(tag.Tag))

    if (data.length > 0) return (
      <Tags tags={data} />
    )
  }

  return (
    <Layout dottedBackground>
      <SEO title={`${frontmatter.title} | Thoughts by `} />
      <Container>
        <Flex mb={5} px={[3,4]}>
            <Hero>
              <Title>{title}</Title>  
              {getTags(tags)}
            </Hero>
          </Flex>

          <Flex 
            alignItems="center" 
            justifyContent="space-between" 
            mt={5} 
            mb={3}
            px={[3,4]}
          >
            <BackLink url="/thoughts" title="All Thoughts" />
            <Share url={href} />
          </Flex>

          <BackgroundImage 
            img={mainImage !== null ? mainImage : Image} 
            aspectRatio 
          />

          <Caption 
            as="div" 
            alignItems="center" 
            justifyContent="space-between"
            px={[3,4]}
          >
            <h4>by {author !== null ? author : "MiTSO Marketing"}</h4>
            <h4>{date}</h4>
          </Caption>

          <Box px={[3,4]} mb={5}>
            <Article dangerouslySetInnerHTML={{ __html: html }} />
            
            <Box mx="auto" mb={5} css={{ maxWidth: '700px' }}>
              <Share url={href} />
            </Box>

            <Thoughts subPage/>
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
    font-weight: bold;
    font-size: 20px;
  }

  img {
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`

const Caption = styled(Flex)`
  border-bottom: 2px solid #e6e6e6;
`