import React from "react"
import { navigate } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import { BLACK } from "../variables"
import Button from "../components/button"
import Container from "../components/container"

import MitsoCircleWhite from "../images/icons/mitso-circle-white.svg"

const WorkWithMitso = ({ data }) => {
  const intro = data.file.childMarkdownRemark.frontmatter.intro
  return (
    <Wrapper as="section" bg={BLACK} p={[3, 4]} mx={-2}>
      <Container>
        <WorkTextBox width={1} px={[3, 4]}>
          <Box as="h2" color="white" mb={3}>
            Work with MiTSO
          </Box>
          <Box as="p" color="white" my={0}>
            {intro}
          </Box>
        </WorkTextBox>

        <Flex alignItems="center" justifyContent="center" mt={4} mb={4}>
          <Button onClick={() => navigate("/work-with-mitso")}>
            Start Project
          </Button>
        </Flex>
      </Container>
      <WrapperBG src={MitsoCircleWhite} />
    </Wrapper>
  )
}

export default props => (
  <StaticQuery
    query={servicesQuery}
    render={data => <WorkWithMitso data={data} simple={props.simple} />}
  />
)

const Wrapper = styled(Box)`
  position: relative;
  overflow: hidden;
`

const WrapperBG = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(55%, 55%);
  max-height: 750px;
`

const WorkTextBox = styled(Box)`
  text-align: center;

  h2,
  p {
    margin-left: auto;
    margin-right: auto;
  }
`
const servicesQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Services" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
          }
        }
      }
    }
    file(name: { eq: "workWithMitso" }) {
      childMarkdownRemark {
        frontmatter {
          intro
        }
      }
    }
  }
`
