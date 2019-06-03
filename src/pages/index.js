import React from "react"
import { navigate, graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Button from "../components/button/index"
import CaseStudies from "../components/caseStudies"
import WorkWithMitso from "../components/workWithMitso"
import Thoughts from "../components/Thoughts"
import Dot from "../components/Dot"
import { WHO_WE_ARE } from "../data"
import { BLACK } from "../variables"

import HomepageHero from "../images/homepage-hero.jpg"

export default ({ data }) => {
  console.log(data)
  const { title } = data.file.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <Intro
          as="section"
          flexWrap={["wrap"]}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={[5, 6]}
        >
          <Box px={[3, 4]} mb={6} width={[1, 1 / 2]}>
            <h1>{title}</h1>
            <Button>Work with MiTSO</Button>
          </Box>
          <Hero as="figure" px={[3, 4]} width={[1, 1 / 2]}>
            <img src={HomepageHero} alt="Welcome to MiTSO" />
          </Hero>
        </Intro>
      </Container>

      {/* Who WE Are */}
      <Container>
        <Flex
          as="section"
          flexWrap={["wrap", "wrap", "nowrap"]}
          pb={6}
          px={[3, 4]}
        >
          <Flex
            as="aside"
            width={[1, 1, 1 / 4]}
            pr={[3, 4]}
            mb={3}
            flexDirection="column"
            alignItems="flex-start"
            justifyContent={["flex-start", "flex-start", "flex-end"]}
          >
            <WhoWeAreHeading>Who We Are</WhoWeAreHeading>
            <Button onClick={() => navigate("/who-we-are")}>Learn More</Button>
          </Flex>
          <WhoWeAre
            as="article"
            flexWrap={["wrap", "wrap", "wrap"]}
            width={[1, 1, 3 / 4]}
            p={[3, 4]}
            css={{ background: BLACK }}
          >
            {WHO_WE_ARE.map((block, index) => (
              <Box width={["auto", 1 / 2]} px={[3, 4]} key={index}>
                <WhoWeAreSubHeading>
                  {block.title}
                  <Dot />
                </WhoWeAreSubHeading>
                <p>{block.text}</p>
              </Box>
            ))}
          </WhoWeAre>
        </Flex>
      </Container>

      {/* Case Studies */}

      <CaseStudies homepage moreCaseStudies />

      {/* Work with Mitso */}

      <WorkWithMitso />

      {/* Thoughts */}

      <Thoughts homepage />
    </Layout>
  )
}

const WhoWeAreHeading = styled.h2`
  margin-bottom: 16px;
`

const Intro = styled(Flex)`
  position: relative;
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
`

const Hero = styled(Box)`
  position: relative;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`
const WhoWeAre = styled(Flex)`
  color: #ffffff;
  border-radius: 7px;
`

const WhoWeAreSubHeading = styled.h3`
  color: #ffffff;
`
export const query = graphql`
  query {
    file(name: { eq: "homepage" }) {
      childMarkdownRemark {
        frontmatter {
          title
          plan
          brand
          promote
          review
        }
      }
    }
  }
`
