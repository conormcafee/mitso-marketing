import React from "react"
import {StaticQuery, graphql, navigate} from "gatsby"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "../../components/container"
import Button from "../../components/button"
import test from "../../images/test-blob.svg"
import {Heading02} from "../../components/global/typography"
import Tagline from "../../components/tagline"

const navigatePage = (page) => navigate(page)

const Service = (props) => {
  const { title, intro } = props.node.frontmatter
  const { slug } = props.node.fields
  const { index } = props 
  const width = [1,1/2]
  const padding = [3,4]
  const ltr = [1, 2]
  const rtl = [2, 1]

  return (
    <Flex 
      as="section"
      flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
      alignItems="center" py={[4,5]}
    >
      <Flex 
        width={width} px={padding} 
        flexDirection="column" alignItems="center" justifyContent="center"
        order={(index + 1) % 2 === 0 ? rtl[0] : ltr[0]}
      >
        <img src={test} alt="Test"/>
      </Flex>
      
      <Box 
        width={width} px={padding}
        order={(index + 1) % 2 === 0 ? rtl[1] : ltr[1]}
      >
        <ServiceTitle>{title}</ServiceTitle>
          <p>{intro}</p>
          <Button onClick={() => navigatePage(slug)}>Find out More</Button>
        </Box>
      </Flex>
  )
}

const WhatWeOffer = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout dottedBackground>
      <SEO title="What We Offer" />
      <Container>
        <Hero px={[3,4]} mx="auto" mb={[4,5]}>
          <h1>What We Offer</h1>
          <p>We believe that effective marketing begins with a clear strategy and a deep understanding of the customer.  From there we build an impressive brand identity, delivering creative and targeted messaging to the right customers at the right time.</p> 
          <Tagline centered />
        </Hero>
      </Container>

      <Flex as="section" flexDirection="column" mx="auto" css={{ maxWidth: '1200px'}}>
        {services.map((service, index) => (
          <Service 
            key={index} 
            index={index} 
            {...service}
          />
        ))}
      </Flex>
    </Layout>
  )
}

export default () => (<StaticQuery query={services} render={data => (<WhatWeOffer data={data} />)} />)

const services = graphql`
  query {
    allMarkdownRemark( filter: { frontmatter: { category: { eq: "Services" }} }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
            intro
          }
        }
      }
    }
  }
`

const Hero = styled(Box)`
  text-align: center;
  position: relative;

  h1, p {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
  }
`

const ServiceTitle = styled(Heading02)`
  margin-bottom: 0;
`