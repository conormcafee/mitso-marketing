import React from "react"
import styled from "styled-components"
import { Box } from "@rebass/grid"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Container from "../../components/container"
import CaseStudies from "../../components/caseStudies"
import WorkWithMitso from "../../components/workWithMitso"

const CaseStudyIndex = () => (
  <Layout dottedBackground>
    <SEO title="Case Studies" />
    <Container>
      <Box px={[3, 4]} mb={5}>
        <Hero>
          <Title>We let our work speak for itself</Title>
        </Hero>
      </Box>
      <CaseStudies moreCaseStudies={true} />
      <WorkWithMitso />
    </Container>
  </Layout>
)

export default CaseStudyIndex

const Hero = styled(Box)`
  text-align: center;
`

const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`
