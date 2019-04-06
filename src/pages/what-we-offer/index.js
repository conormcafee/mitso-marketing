import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Flex, Box} from "@rebass/grid"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "../../components/container"
import Tagline from "../../components/tagline"
import Button from "../../components/button"
import test from "../../images/test-blob.svg"

const Service = (props) => {
    const { title, path, intro } = props.node.frontmatter
    const { index } = props 
    const width = [1,1/2]
    const padding = [3,4]
    const ltr = [1, 2]
    const rtl = [2, 1]

    return (
        <Flex 
            flexWrap={['wrap', 'nowrap']}
            alignItems="center"
            as="section"
            py={[5, 6]}
        >
            <Flex 
                width={width}
                px={padding}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                order={(index + 1) % 2 === 0 ? rtl[0] : ltr[0]}
            >
                <img src={test} alt="Test"/>
            </Flex>
            <Flex 
                width={width} 
                px={padding}
                flexDirection="column"
                justifyContent="center"
                order={(index + 1) % 2 === 0 ? rtl[1] : ltr[1]}
            >
                <h1>{title}</h1>
                <p>{intro}</p>
                <Button>Find out More - {path}</Button>
            </Flex>
        </Flex>
    )
}

const WhatWeOffer = (props) => {
    const services = props.data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="What We Offer" />

            <Container>
                <Box px={[3,4]} mb={[4,5]}>
                    <h1>What We Offer</h1>

                    <p>We believe that effective marketing begins with a clear strategy and a deep understanding of the customer.</p>
                    <p>From there we build an impressive brand identity, delivering creative and targeted messaging to the right customers at the right time.</p>
                </Box>
            </Container>

            <Tagline />

            <Flex 
                as="section" 
                flexDirection="column"
            >
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
                    frontmatter {
                        title
                        path
                        icon
                        intro
                    }
                }
            }
        }
    }
`