import React from "react"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql } from "gatsby"
import WorkWithMitso from "../components/workWithMitso"

import Button from "../components/button"
import Statement from "../components/Statement"
import Services from "../components/Services"
import CaseStudies from "../components/caseStudies"
import SubHeading from "../components/SubHeading"

import {CASE_STUDIES} from "../data"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
        <SEO title={frontmatter.title} />
        <Container>
            <Box px={[3,4]}>
              <Box>
                  <Title>{frontmatter.title}</Title>
                  <Intro>{frontmatter.intro}</Intro>
                  
                  <Flex mx="auto" alignItems="center" justifyContent="space-between" my={[3,4]} css={{ maxWidth: '350px'}}>
                    <Button reversed back>All Services</Button>
                    <Button>Get in Touch</Button>
                  </Flex>
              </Box>
            
              <Box px={[3,4]}>
                <Statement statement={frontmatter.statement} />
              </Box>
            </Box>

            <Services 
              title={frontmatter.title}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus ante lacinia, rhoncus nisi at, feugiat lacus. Donec ac volutpat augue. Donec euismod nunc augue, iaculis fermentum augue rutrum at. Morbi convallis quam eros, a volutpat urna commodo lobortis."
              services={frontmatter.services}
            />

            <Box px={[3,4]}>
              <h2>{frontmatter.title} <SubHeading text="Latest Work" /></h2>
            </Box>
            
            <CaseStudies data={CASE_STUDIES} my={3} />

            <Box py={5} />
          
        </Container>
        <WorkWithMitso />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        intro
        statement
        services
      }
    }
  }
`

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
`

const Intro = styled.p`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`