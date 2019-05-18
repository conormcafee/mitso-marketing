import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopImages from "../components/WhoWeAre/TopImages"
import HowWeWork from "../components/WhoWeAre/HowWeWork"
import WorkWithMitso from "../components/workWithMitso"
import Team from "../components/team"

const WhoWeAre = () => {
  return (
    <Layout dottedBackground>
      <SEO title="Who We Are" />
      <Container>
        <Box px={[3, 4]} mb={[3, 3, 3, 6]}>
          <Title>We are a creative marketing consultancy.</Title>
        </Box>
      </Container>
      <TopImages />
      <Container>
        <HowWeWorkSection
          flexWrap={["wrap", "wrap", "nowrap"]}
          justifyContent="center"
          py={[3, 4]}
        >
          <HowWeWork />
        </HowWeWorkSection>
      </Container>
      <Team />
      <WorkWithMitso />
    </Layout>
  )
}

export default WhoWeAre

const Title = styled.h1`
  @media only screen and (max-width: 40em) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`

const HowWeWorkSection = styled(Flex)`
  position: relative;
  overflow: hidden;
`
