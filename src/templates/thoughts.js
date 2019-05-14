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
import Image from "../images/backgrounds/hero-dummy.jpg";
import BackgroundImage from "../components/BackgroundImage";

const ThoughtsTemplate = (props) => {
  return (
    <Template data={props.data} />
  )
}

const Template = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout dottedBackground>
      <SEO title={`${frontmatter.title} | Thoughts by `} />
      <Container>
        <Flex mb={5} px={[3,4]}>
            <Hero>
              <Title>{frontmatter.title}</Title>
              <Tags tags={['Blog', 'Post', 'Test', 'Testing']} />
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
            <Share url="https://google.com" />
          </Flex>

          <BackgroundImage img={Image} aspectRatio />

          <Caption 
            as="div" 
            alignItems="center" 
            justifyContent="space-between"
            px={[3,4]}
          >
            <h4>by Maeve Finnegan</h4>
            <h4>1st May 2019</h4>
          </Caption>

          <Box px={[3,4]} mb={5}>
            <Box as="article" mb={5}>
                <h1>{frontmatter.title}</h1>
            </Box>
            
            <Article dangerouslySetInnerHTML={{ __html: html }} />
            
            <Box mx="auto" mb={5} css={{ maxWidth: '700px' }}>
              <Share url="https://google.com" />
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
        date
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