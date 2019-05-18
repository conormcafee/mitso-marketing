import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import { ACCENT } from "../variables"
import Button from "../components/button"
import Container from "../components/container"

import Icon01 from "../images/icons/web-design.svg"
// import Icon02 from "../images/icons/digital-marketing.svg"
// import Icon03 from "../images/icons/social-media.svg"
// import Icon04 from "../images/icons/visual.svg"
// import Icon05 from "../images/icons/event-management.svg"
// import Icon06 from "../images/icons/pr.svg"

const Service = props => (
  <Flex width={[1 / 2, 1 / 3]} mb={4} alignItems="center">
    <ServiceLink to={props.url}>
      <Flex alignItems="center">
        <Box width={1 / 4} mr={[3, 4]}>
          <Icon src={props.icon} alt={`${props.title} Icon`} />
        </Box>
        <Box width={3 / 4}>
          <Title>{props.title}</Title>
        </Box>
      </Flex>
    </ServiceLink>
  </Flex>
)

const WorkWithMitso = props => {
  const services = props.data.allMarkdownRemark.edges
  return (
    <Wrapper>
      <Container>
        <Flex py={5} flexWrap="wrap" alignItems="center">
          <Box width={1} px={[3, 4]}>
            <WorkBox
              p={4}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <WorkTitle>Like our work?</WorkTitle>
              <WorkText>Contact us today for a chat</WorkText>
            </WorkBox>
          </Box>

          <Box width={1} px={[3, 4]} mb={[3, 4]}>
            <WorkBox
              bg="#ffffff"
              px={4}
              pt={4}
              flexWrap="wrap"
              mx="auto"
              css={{ maxWidth: "1000px" }}
            >
              {services.map((service, index) => (
                <Service
                  key={index}
                  index={index}
                  title={service.node.frontmatter.title}
                  url={service.node.fields.slug}
                  icon={Icon01}
                />
              ))}
            </WorkBox>
          </Box>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={1}
          >
            <Button>Start Project</Button>
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default () => (
  <StaticQuery
    query={servicesQuery}
    render={data => <WorkWithMitso data={data} />}
  />
)

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
  }
`

const Wrapper = styled.section`
  background-color: ${ACCENT};
`

const WorkTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 0;
  max-width: 300px;
  text-align: center;
`

const WorkText = styled.p`
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
`

const WorkBox = styled(Flex)`
  background-color: ${props => (props.bg ? `${props.bg}` : `transparent`)};
  border-radius: 8px;
  box-shadow: ${props =>
    props.bg ? `-4px 6px 4px 0 rgba(0, 0, 0, 0.1)` : `none`};

  h3 {
    text-align: center;
  }
`

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
`

const Icon = styled.img`
  height: 75px;
  width: 75px;
`
const ServiceLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  &:hover ${Title} {
    color: ${ACCENT};
  }
`
